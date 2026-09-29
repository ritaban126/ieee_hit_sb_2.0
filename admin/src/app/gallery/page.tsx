'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import {
  Plus,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Images,
  ArrowLeft,
  Upload,
} from 'lucide-react';

import { AdminShell } from '@/components/admin-shell';
import { PageHeading } from '@/components/dashboard-parts';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import {
  Field,
  FormDialog,
  ConfirmDelete,
  useMockAction,
} from '@/components/manage-ui';

import { albums as seed, events } from '@/lib/data';
import type { GalleryAlbum } from '@/types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function GalleryPage() {
  const [items, setItems] = useState(seed);
  const [view, setView] = useState<GalleryAlbum | null>(null);
  const [edit, setEdit] = useState<GalleryAlbum | null>(null);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState<GalleryAlbum | null>(null);
  const [name, setName] = useState('');

  const { show } = useMockAction();

  function save() {
    if (creating) {
      const template = seed[0];

      if (!template) return;

      setItems((v) => [
        {
          ...template,
          id: Date.now(),
          name: name || 'New album',
          photos: 0,
        },
        ...v,
      ]);

      show('Gallery album created successfully');
    } else if (edit) {
      setItems((v) =>
        v.map((a) =>
          a.id === edit.id
            ? {
                ...a,
                name: name || a.name,
              }
            : a
        )
      );

      show('Gallery album updated successfully');
    }

    setCreating(false);
    setEdit(null);
  }

  return (
    <div className={poppins.className}>
      <AdminShell>
        <PageHeading
          eyebrow="Media / Albums"
          title={view?.name ?? 'Gallery'}
          description={
            view
              ? `${view.photos} photos · ${view.date}`
              : 'Moments worth keeping, organized by event.'
          }
          action={
            view ? (
              <Button
                variant="outline"
                onClick={() => setView(null)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to albums
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setCreating(true);
                  setName('');
                }}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create album
              </Button>
            )
          }
        />

        {view ? (
          <>
            {/* =========================
                VIEW ALBUM
            ========================== */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">
                Photos
              </h2>

              <Button
                variant="outline"
                onClick={() =>
                  show(
                    'Photo upload is available when storage is connected'
                  )
                }
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload photos
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                view.image,
                ...seed
                  .filter((a) => a.id !== view.id)
                  .map((a) => a.image),
              ].map((image, i) => (
                <div
                  className="overflow-hidden rounded-md border bg-card"
                  key={i}
                >
                  <Image
                    src={image}
                    alt={`${view.name} gallery image ${i + 1}`}
                    className="aspect-4/3 w-full object-cover grayscale"
                    width={1200}
                    height={800}
                  />

                  <div className="flex items-center justify-between p-4 text-xs">
                    <span className="font-semibold">
                      {view.name} ·{' '}
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="text-muted-foreground">
                      Preview
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* =========================
                ALBUM LIST
            ========================== */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">
                Event albums
              </h2>

              <span className="text-xs text-muted-foreground">
                {items.length} albums
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((a) => (
                <div
                  key={a.id}
                  className="overflow-hidden rounded-md border bg-card"
                >
                  <Image
                    src={a.image}
                    alt={`${a.name} event photo`}
                    className="aspect-[1.5] w-full object-cover grayscale"
                    width={1200}
                    height={800}
                  />

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="font-display text-base font-bold">
                          {a.name}
                        </h2>

                        <p className="mt-1.5 text-xs text-muted-foreground">
                          {a.event}
                        </p>
                      </div>

                      {/* =========================
                          ALBUM ACTIONS
                      ========================== */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label={`Actions for ${a.name}`}
                          >
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>

                        {/* Portal-rendered menu needs Poppins directly */}
                        <DropdownMenuContent
                          align="end"
                          className={poppins.className}
                        >
                          {/* VIEW ALBUM */}
                          <DropdownMenuItem
                            onSelect={() => setView(a)}
                          >
                            <Eye className="mr-2 size-4" />
                            View album
                          </DropdownMenuItem>

                          {/* EDIT ALBUM */}
                          <DropdownMenuItem
                            onSelect={() => {
                              setEdit(a);
                              setName(a.name);
                            }}
                          >
                            <Pencil className="mr-2 size-4" />
                            Edit album
                          </DropdownMenuItem>

                          <DropdownMenuSeparator />

                          {/* DELETE ALBUM */}
                          <DropdownMenuItem
                            onSelect={() => setDeleting(a)}
                          >
                            <Trash2 className="mr-2 size-4 text-destructive" />
                            Delete album
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
                      <span>{a.date}</span>

                      <span className="flex items-center gap-1.5">
                        <Images className="size-3.5" />
                        {a.photos} photos
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* =========================
            CREATE / EDIT ALBUM
        ========================== */}
        <FormDialog
          open={creating || !!edit}
          onOpenChange={(v) => {
            if (!v) {
              setCreating(false);
              setEdit(null);
            }
          }}
          title={creating ? 'Create album' : 'Edit album'}
          onSave={save}
          saveLabel={
            creating ? 'Create album' : 'Save changes'
          }
        >
          <Field
            label="Album name"
            value={name}
            onChange={setName}
          />

          <div className="space-y-2">
            <label className="text-xs font-semibold">
              Event
            </label>

            <select className="h-10 w-full rounded-md border bg-background px-3 text-sm">
              {events.map((e) => (
                <option key={e.id}>{e.name}</option>
              ))}
            </select>
          </div>

          <Field label="Date" type="date" />

          <Field label="Cover image" type="file" />

          <div className="sm:col-span-2">
            <Field label="Description" />
          </div>
        </FormDialog>

        {/* =========================
            DELETE ALBUM
        ========================== */}
        <ConfirmDelete
          name={deleting?.name ?? null}
          onClose={() => setDeleting(null)}
          onConfirm={() => {
            if (deleting) {
              setItems((v) =>
                v.filter((a) => a.id !== deleting.id)
              );

              setDeleting(null);

              show('Gallery album deleted successfully');
            }
          }}
        />
      </AdminShell>
    </div>
  );
}