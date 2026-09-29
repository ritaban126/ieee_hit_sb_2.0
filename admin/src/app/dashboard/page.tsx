'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { CalendarDays, Users, Radio, ArrowUpRight, ArrowRight, MapPin, Clock3 } from 'lucide-react';
import { AdminShell } from '@/components/admin-shell';
import { EventRow, EventStatusBadge, PageHeading, StatCard } from '@/components/dashboard-parts';
import { Button } from '@/components/ui/button';
import { events } from '@/lib/data';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const filters = ['All', 'Ongoing', 'Upcoming', 'Completed'] as const;

export default function DashboardPage() {
  const [filter, setFilter] = useState<typeof filters[number]>('All');
  const current = events[0];

  if (!current) {
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
          eyebrow="Overview / 2026–27"
          title="Dashboard"
          description="A quick look at what's happening across your society."
          action={
            <span className="rounded border bg-card px-3 py-2 text-xs text-muted-foreground">
              Sunday, 27 September 2026
            </span>
          }
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          <StatCard label="Events This Year" value="18" icon={CalendarDays} foot="Across all categories" />
          <StatCard label="Team Members" value="42" icon={Users} foot="Active society members" />
          <StatCard label="Ongoing Events" value="01" icon={Radio} foot="Happening right now" />
          <StatCard label="Upcoming Events" value="03" icon={CalendarDays} foot="On the calendar" />
        </div>

        <div className="mt-9 grid gap-8 xl:grid-cols-[minmax(0,1.65fr)_minmax(310px,1fr)]">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Right now</p>
                <h2 className="mt-1 font-display text-lg font-bold">Ongoing event</h2>
              </div>
              <EventStatusBadge status="Ongoing" />
            </div>
            <div className="overflow-hidden rounded-md border bg-card">
              <div className="relative h-44 overflow-hidden sm:h-52">
                <Image
                  src={current.image ?? ''}
                  alt="Students at a technical workshop"
                  className="h-full w-full object-cover grayscale"
                  width={600}
                  height={400}
                />
                <div className="absolute left-5 top-5 rounded bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground">
                  LIVE TODAY
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg font-bold">{current.name}</h3>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" />
                    {current.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {current.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock3 className="size-3.5" />
                    {current.time}
                  </span>
                </p>
                <div className="mt-6 flex items-center justify-between border-t pt-5">
                  <div>
                    <strong className="font-display text-xl">{current.registered}</strong>
                    <span className="ml-2 text-xs text-muted-foreground">students registered</span>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/events">
                      View event <ArrowUpRight className="ml-1 size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Coming up</p>
              <h2 className="mt-1 font-display text-lg font-bold">On the horizon</h2>
            </div>
            <div className="rounded-md border bg-card">
              {events.filter(e => e.status === 'Upcoming').map((event, index) => (
                <div key={event.id} className="flex gap-4 border-b p-5 last:border-0">
                  <div className="flex size-12 shrink-0 flex-col items-center justify-center rounded border bg-secondary">
                    <b className="text-lg leading-none">{event.date.slice(0, 2)}</b>
                    <span className="mt-0.5 text-[9px] uppercase text-muted-foreground">{event.date.slice(3, 6)}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold leading-snug">{event.name}</div>
                    <p className="mt-1.5 text-[11px] text-muted-foreground">
                      {event.location} · {event.registered} registered
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground">0{index + 1}</span>
                </div>
              ))}
              <Button variant="ghost" className="w-full justify-between rounded-none px-5 text-xs" asChild>
                <Link href="/events">
                  All upcoming events <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
            <div className="mt-5 rounded-md border bg-secondary p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Workspace note</p>
              <p className="mt-2 text-sm font-semibold">Make something worth remembering.</p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">Everything your chapter creates starts here.</p>
            </div>
          </section>
        </div>

        <section className="mt-10">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">The calendar</p>
              <h2 className="mt-1 font-display text-lg font-bold">All events</h2>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/events">
                Manage events <ArrowUpRight className="ml-1 size-3.5" />
              </Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-md border bg-card">
            <div className="flex gap-1 overflow-x-auto border-b p-3 sm:p-4">
              {filters.map(f => (
                <Button
                  key={f}
                  size="sm"
                  variant={filter === f ? 'secondary' : 'ghost'}
                  className="shrink-0 text-xs"
                  onClick={() => setFilter(f)}
                >
                  {f}
                </Button>
              ))}
            </div>
            {events.filter(e => filter === 'All' || e.status === filter).slice(0, 5).map(e => (
              <EventRow key={e.id} event={e} />
            ))}
          </div>
        </section>
      </AdminShell>
    </div>
  );
}