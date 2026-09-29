'use client';

import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Megaphone, ArrowUpRight, CalendarDays, Link2, Pencil } from 'lucide-react';
import { AdminShell } from '@/components/admin-shell';
import { PageHeading } from '@/components/dashboard-parts';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Field, FormDialog, useMockAction } from '@/components/manage-ui';
import { banner, events } from '@/lib/data';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function BannersPage() {
  const [active, setActive] = useState(banner.active);
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState(banner.label);
  const [message, setMessage] = useState(banner.message);
  const [cta, setCta] = useState(banner.cta);
  const [selected, setSelected] = useState(banner.eventId);
  const { show } = useMockAction();

  const event = events.find(e => e.id === selected) ?? events[0];

  if (!event) {
    return (
      <div className={poppins.className}>
        <AdminShell>
          <p>No events found.</p>
        </AdminShell>
      </div>
    );
  }

  return (
    <div className={poppins.className}>
      <AdminShell>
        <PageHeading
          eyebrow="Content / Announcement"
          title="Event banner"
          description="The thin announcement strip shown on your website."
          action={
            <Button onClick={() => setOpen(true)}>
              <Pencil className="mr-2 h-4 w-4" /> Update banner
            </Button>
          }
        />

        <div className="max-w-275">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-bold">Preview</h2>
            <span className="text-xs text-muted-foreground">Website appearance</span>
          </div>

          <div className="rounded-md border bg-card p-4 sm:p-6">
            <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 bg-inverse px-4 py-3 text-inverse-foreground sm:px-6">
              <div className="flex flex-wrap items-center gap-3">
                <Megaphone className="size-4" />
                <span className="border-r border-current pr-3 text-[10px] font-bold uppercase tracking-[0.15em]">
                  {label}
                </span>
                <span className="text-xs font-semibold sm:text-sm">{message}</span>
              </div>
              <span className="flex items-center gap-2 text-xs font-semibold">
                {cta}
                <ArrowUpRight className="size-3.5" />
              </span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              This is a visual preview. Changes here are not published to a website.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {(
              [
                ['Connected event', event.name, Link2],
                ['Status', active ? 'Active' : 'Inactive', Megaphone],
                ['Starts', banner.start, CalendarDays],
                ['Ends', banner.end, CalendarDays],
              ] as const
            ).map(([heading, value, Icon]) => (
              <div key={String(heading)} className="min-h-32 rounded-md border bg-card p-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{heading as string}</span>
                  <Icon className="size-4" />
                </div>
                <p className="mt-6 text-sm font-semibold">{value as string}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t pt-6">
            <div>
              <h3 className="text-sm font-semibold">Show announcement</h3>
              <p className="mt-1 text-xs text-muted-foreground">Toggle the banner on or off in this preview.</p>
            </div>
            <Switch
              checked={active}
              onCheckedChange={v => {
                setActive(v);
                show(v ? 'Banner activated' : 'Banner deactivated');
              }}
              aria-label="Show announcement"
            />
          </div>
        </div>

        <FormDialog
          open={open}
          onOpenChange={setOpen}
          title="Update event banner"
          description="Connect this announcement to an event."
          onSave={() => {
            setOpen(false);
            show('Banner updated successfully');
          }}
        >
          <div className="space-y-2">
            <label className="text-xs font-semibold">Select event</label>
            <select
              className="h-10 w-full rounded-md border bg-background px-3 text-sm"
              value={selected}
              onChange={e => setSelected(Number(e.target.value))}
            >
              {events.map(e => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <Field label="Small label" value={label} onChange={setLabel} />
          <div className="sm:col-span-2">
            <Field label="Message" value={message} onChange={setMessage} />
          </div>
          <Field label="Button text" value={cta} onChange={setCta} />
          <Field label="Button URL" type="url" />
          <Field label="Start date/time" type="datetime-local" />
          <Field label="End date/time" type="datetime-local" />
        </FormDialog>
      </AdminShell>
    </div>
  );
}