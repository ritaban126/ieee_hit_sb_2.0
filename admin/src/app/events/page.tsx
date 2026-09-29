'use client';

import { useState } from 'react';
// import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { Plus } from 'lucide-react';
import { AdminShell } from '@/components/admin-shell';
import { EventRow, PageHeading, EventStatusBadge } from '@/components/dashboard-parts';
import { Button } from '@/components/ui/button';
import { Field, FormDialog, ConfirmDelete, SearchBox, useMockAction } from '@/components/manage-ui';
import { events as seed } from '@/lib/data';
import type { Event } from '@/types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const filters = ['All', 'Ongoing', 'Upcoming', 'Completed'] as const;


export default function EventsPage() {
  const [items, setItems] = useState<Event[]>(seed);
  const [filter, setFilter] = useState<typeof filters[number]>('All');
  const [query, setQuery] = useState('');
  const [edit, setEdit] = useState<Event | null>(null);
  const [view, setView] = useState<Event | null>(null);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState<Event | null>(null);
  const [name, setName] = useState('');
  const { show } = useMockAction();

  function save() {
    if (creating) {
      const template = seed[1];
      if (!template) return;
      setItems(v => [
        {
          ...template,
          id: Date.now(),
          name: name || 'New event',
          status: 'Upcoming',
          registered: 0,
        },
        ...v,
      ]);
      show('Event created successfully');
    } else if (edit) {
      setItems(v => v.map(e => (e.id === edit.id ? { ...e, name: name || e.name } : e)));
      show('Event updated successfully');
    }
    setCreating(false);
    setEdit(null);
  }

  const filteredItems = items.filter(
    e => (filter === 'All' || e.status === filter) && e.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={poppins.className}>
      <AdminShell>
        <PageHeading
          eyebrow="Content / Events"
          title="Events"
          description="Plan, organize, and keep track of everything happening."
          action={
            <div className="flex items-center gap-3">
              {/* <Link href="/events/analytics" passHref>
                <Button variant="outline" size="sm">
                  View Analytics
                </Button>
              </Link> */}
              <Button
                onClick={() => {
                  setName('');
                  setCreating(true);
                }}
              >
                <Plus className="mr-2 h-4 w-4" /> Create new event
              </Button>
            </div>
          }
        />

        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <SearchBox value={query} onChange={setQuery} placeholder="Search events..." />
          <div className="flex gap-1 overflow-x-auto">
            {filters.map(f => (
              <Button
                key={f}
                size="sm"
                variant={filter === f ? 'secondary' : 'ghost'}
                onClick={() => setFilter(f)}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-md border bg-card">
          <div className="hidden grid-cols-[minmax(220px,2fr)_minmax(130px,1fr)_minmax(120px,1fr)_100px_95px_36px] gap-4 border-b bg-secondary px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground lg:grid">
            <span>Event</span>
            <span>Date</span>
            <span>Location</span>
            <span>Status</span>
            <span>Registered</span>
            <span />
          </div>

          {filteredItems.map(e => (
            <EventRow
              key={e.id}
              event={e}
              onView={() => setView(e)}
              onEdit={() => {
                setEdit(e);
                setName(e.name);
              }}
              onDelete={() => setDeleting(e)}
            />
          ))}

          {!filteredItems.length && (
            <div className="p-12 text-center text-sm text-muted-foreground">No events found.</div>
          )}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">Showing {items.length} events · Preview data</p>

        {/* Create / Edit Dialog */}
        <FormDialog
          open={creating || !!edit}
          onOpenChange={v => {
            if (!v) {
              setCreating(false);
              setEdit(null);
            }
          }}
          title={creating ? 'Create new event' : 'Edit event'}
          description="Event information shown on your website."
          onSave={save}
          saveLabel={creating ? 'Create event' : 'Save changes'}
        >
          <Field label="Event name" value={name} onChange={setName} />
          <Field label="Category" placeholder="Workshop" />
          <div className="sm:col-span-2">
            <Field label="Description" />
          </div>
          <Field label="Event date" type="date" />
          <Field label="Location" />
          <Field label="Start time" type="time" />
          <Field label="End time" type="time" />
          <Field label="Speaker" />
          <Field label="Organizer" />
          <Field label="Registration type" />
          <Field label="Google Form URL" type="url" />
          <Field label="Payment URL" type="url" />
          <Field label="Maximum participants" type="number" />
          <Field label="Event poster" type="file" />
        </FormDialog>

        {/* View Dialog */}
        <FormDialog
          open={!!view}
          onOpenChange={v => {
            if (!v) setView(null);
          }}
          title={view?.name ?? 'Event'}
          description="Event details and registration activity · Preview data"
          onSave={() => {
            if (view) {
              setEdit(view);
              setName(view.name);
              setView(null);
            }
          }}
          saveLabel="Edit event"
        >
          <div className="sm:col-span-2 flex items-center gap-3">
            <EventStatusBadge status={view?.status ?? 'Upcoming'} />
            <span className="text-xs text-muted-foreground">
              {view?.date} · {view?.time} · {view?.location}
            </span>
          </div>
          <p className="sm:col-span-2 text-sm leading-6 text-muted-foreground">{view?.description}</p>
          {[
            ['Banner views', view?.views],
            ['Registration clicks', view?.clicks],
            ['Google Form registrations', view?.registered],
            ['Successful payments', view?.payments],
            ['Final participants', view?.registered],
          ].map(([label, value]) => (
            <div key={label as string} className="border-t pt-3">
              <p className="text-xs text-muted-foreground">{label}</p>
              <strong className="mt-1 block font-display text-xl">{value}</strong>
            </div>
          ))}
        </FormDialog>

        {/* Delete Confirmation */}
        <ConfirmDelete
          name={deleting?.name ?? null}
          onClose={() => setDeleting(null)}
          onConfirm={() => {
            if (deleting) {
              setItems(v => v.filter(e => e.id !== deleting.id));
              setDeleting(null);
              show('Event deleted successfully');
            }
          }}
        />
      </AdminShell>
    </div>
  );
}








