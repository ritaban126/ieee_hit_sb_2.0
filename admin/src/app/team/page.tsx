'use client';

import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Plus, MoreHorizontal, Eye, Pencil, Trash2, Mail } from 'lucide-react';
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
import { Field, FormDialog, ConfirmDelete, SearchBox, useMockAction } from '@/components/manage-ui';
import { team as seed } from '@/lib/data';
import type { TeamMember } from '@/types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function TeamPage() {
  const [items, setItems] = useState<TeamMember[]>(seed);
  const [query, setQuery] = useState('');
  const [edit, setEdit] = useState<TeamMember | null>(null);
  const [view, setView] = useState<TeamMember | null>(null);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState<TeamMember | null>(null);
  const [name, setName] = useState('');
  const { show } = useMockAction();

  function save() {
    if (creating) {
      const template = seed[0];
      if (!template) return;
      setItems(v => [
        {
          ...template,
          id: Date.now(),
          name: name || 'New member',
          initials: (name || 'NM')
            .split(' ')
            .map(x => x[0])
            .join('')
            .slice(0, 2),
        },
        ...v,
      ]);
      show('Team member added successfully');
    } else if (edit) {
      setItems(v => v.map(m => (m.id === edit.id ? { ...m, name: name || m.name } : m)));
      show('Team member updated successfully');
    }
    setCreating(false);
    setEdit(null);
  }

  const filteredItems = items.filter(m => m.name.toLowerCase().includes(query.toLowerCase()));

 return (
  <div className={poppins.className}>
    <AdminShell>
      <PageHeading
        eyebrow="People / Team"
        title="Team members"
        description="The people behind the ideas, events, and everything in between."
        action={
          <Button
            onClick={() => {
              setCreating(true);
              setName("");
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add new member
          </Button>
        }
      />

      <div className="mb-6">
        <SearchBox
          value={query}
          onChange={setQuery}
          placeholder="Search members..."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((m, index) => (
          <div
            key={m.id}
            className="rounded-md border bg-card p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-12 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold">
                {m.initials}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={`Actions for ${m.name}`}
                  >
                    <MoreHorizontal className="size-4" />
                  </Button>
                </DropdownMenuTrigger>

                {/* Dropdown menu is portal-rendered, so apply Poppins directly */}
                <DropdownMenuContent
                  align="end"
                  className={poppins.className}
                >
                  <DropdownMenuItem
                    onSelect={() => setView(m)}
                  >
                    <Eye className="mr-2 size-4" />
                    View
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onSelect={() => {
                      setEdit(m);
                      setName(m.name);
                    }}
                  >
                    <Pencil className="mr-2 size-4" />
                    Edit member
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onSelect={() => setDeleting(m)}
                  >
                    <Trash2 className="mr-2 size-4 text-destructive" />
                    Delete member
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {m.position}
            </p>

            <h2 className="mt-2 font-display text-lg font-bold">
              {m.name}
            </h2>

            <p className="mt-1 text-xs text-muted-foreground">
              {m.department}
            </p>

            <div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
              <span>{m.year}</span>
              <Mail className="size-4" />
            </div>
          </div>
        ))}

        {!filteredItems.length && (
          <p className="text-sm text-muted-foreground">
            No team members found.
          </p>
        )}
      </div>

      <p className="mt-5 text-xs text-muted-foreground">
        Showing {items.length} members · Preview data
      </p>

      {/* Create / Edit Dialog */}
      <FormDialog
        open={creating || !!edit}
        onOpenChange={(v) => {
          if (!v) {
            setCreating(false);
            setEdit(null);
          }
        }}
        title={creating ? "Add team member" : "Edit team member"}
        onSave={save}
        saveLabel={creating ? "Add member" : "Save changes"}
      >
        <Field
          label="Full name"
          value={name}
          onChange={setName}
        />

        <Field label="Position" />
        <Field label="Department" />
        <Field label="Year" />
        <Field label="Email" type="email" />
        <Field label="Profile photo" type="file" />
        <Field label="LinkedIn" />
        <Field label="GitHub" />
        <Field label="Display order" type="number" />
        <Field label="Active / Inactive" />

        <div className="sm:col-span-2">
          <Field label="Short bio" />
        </div>
      </FormDialog>

      {/* View Dialog */}
      <FormDialog
        open={!!view}
        onOpenChange={(v) => {
          if (!v) {
            setView(null);
          }
        }}
        title={view?.name ?? "Member"}
        onSave={() => {
          if (view) {
            setEdit(view);
            setName(view.name);
            setView(null);
          }
        }}
        saveLabel="Edit member"
      >
        <p className="text-sm font-semibold">
          {view?.position}
        </p>

        <p className="text-sm text-muted-foreground">
          {view?.department} · {view?.year}
        </p>

        <p className="text-sm text-muted-foreground">
          {view?.email}
        </p>
      </FormDialog>

      {/* Delete Confirmation */}
    <ConfirmDelete
      name={deleting?.name ?? null}
      onClose={() => setDeleting(null)}
      onConfirm={() => {
    if (deleting) {
      setItems((v) =>
        v.filter((m) => m.id !== deleting.id)
      );

      setDeleting(null);

      show("Team member deleted successfully");
    }
  }}
/>
    </AdminShell>
  </div>
);
}