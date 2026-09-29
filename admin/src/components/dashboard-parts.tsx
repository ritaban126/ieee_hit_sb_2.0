// 'use client';

// import Link from 'next/link';
// import { ArrowUpRight, CalendarDays, MapPin, Users, MoreHorizontal, Eye, Pencil, Trash2 } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
// import type { Event, EventStatus } from '@/types';

// export function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
//   return <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</div><h1 className="font-display text-[29px] font-bold leading-tight sm:text-[34px]">{title}</h1><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>{action}</div>;
// }

// export function StatCard({ label, value, icon: Icon, foot }: { label: string; value: string | number; icon: React.ElementType; foot: string }) {
//   return <div className="relative flex min-h-37.5 flex-col justify-between rounded-md border bg-card p-5 sm:p-6"><div className="flex items-start justify-between"><span className="text-xs font-medium text-muted-foreground">{label}</span><Icon className="size-4.5 text-muted-foreground" strokeWidth={1.7}/></div><div><div className="font-display text-[32px] font-bold leading-none sm:text-[38px]">{value}</div><p className="mt-3 text-[11px] text-muted-foreground">{foot}</p></div></div>;
// }

// export function EventStatusBadge({ status }: { status: EventStatus }) { return <span className="inline-flex items-center gap-1.5 rounded border bg-secondary px-2 py-1 text-[10px] font-semibold text-foreground"><span className={`size-1.5 rounded-full ${status === 'Ongoing' ? 'bg-foreground animate-pulse' : status === 'Cancelled' ? 'border border-foreground' : 'bg-muted-foreground'}`}/>{status}</span>; }


// export function EventRow({ event, onView, onEdit, onDelete }: { event: Event; onView?: () => void; onEdit?: () => void; onDelete?: () => void }) {
//   return <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b px-5 py-4 last:border-b-0 sm:px-6 lg:grid-cols-[minmax(220px,2fr)_minmax(130px,1fr)_minmax(120px,1fr)_100px_95px_36px]">
//     <div className="min-w-0"><div className="truncate text-[13px] font-semibold">{event.name}</div><div className="mt-1 text-[11px] text-muted-foreground">{event.category}</div></div>
//     <div className="hidden items-center gap-2 text-xs text-muted-foreground lg:flex"><CalendarDays className="size-3.5"/>{event.date}</div>
//     <div className="hidden items-center gap-2 truncate text-xs text-muted-foreground lg:flex"><MapPin className="size-3.5 shrink-0"/>{event.location}</div>
//     <div className="hidden lg:block"><EventStatusBadge status={event.status}/></div>
//     <div className="hidden items-center gap-1.5 text-xs text-muted-foreground lg:flex"><Users className="size-3.5"/>{event.registered}</div>
//     <div className="flex items-center gap-2 lg:justify-end"><span className="lg:hidden"><EventStatusBadge status={event.status}/></span>{onView ? <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label={`Actions for ${event.name}`}><MoreHorizontal/></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem onSelect={onView}><Eye/> View event</DropdownMenuItem><DropdownMenuItem onSelect={() => onEdit?.()}><Pencil/> Edit event</DropdownMenuItem><DropdownMenuSeparator/><DropdownMenuItem onSelect={() => onDelete?.()}><Trash2/> Delete event</DropdownMenuItem></DropdownMenuContent></DropdownMenu> : <Button variant="ghost" size="icon" asChild aria-label={`View ${event.name}`}><Link href="/events"><ArrowUpRight/></Link></Button>}</div>
//     <div className="col-span-2 flex gap-4 text-[11px] text-muted-foreground lg:hidden"><span>{event.date}</span><span>{event.location}</span><span>{event.registered} registered</span></div>
//   </div>;
// }







'use client';

import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { ArrowUpRight, CalendarDays, MapPin, Users, MoreHorizontal, Eye, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import type { Event, EventStatus } from '@/types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});


export function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</div><h1 className="font-display text-[29px] font-bold leading-tight sm:text-[34px]">{title}</h1><p className="mt-2 text-sm text-muted-foreground">{description}</p></div>{action}</div>;
}

export function StatCard({ label, value, icon: Icon, foot }: { label: string; value: string | number; icon: React.ElementType; foot: string }) {
  return <div className="relative flex min-h-37.5 flex-col justify-between rounded-md border bg-card p-5 sm:p-6"><div className="flex items-start justify-between"><span className="text-xs font-medium text-muted-foreground">{label}</span><Icon className="size-4.5 text-muted-foreground" strokeWidth={1.7}/></div><div><div className="font-display text-[32px] font-bold leading-none sm:text-[38px]">{value}</div><p className="mt-3 text-[11px] text-muted-foreground">{foot}</p></div></div>;
}


export function EventStatusBadge({ status }: { status: EventStatus }) { return <span className="inline-flex items-center gap-1.5 rounded border bg-secondary px-2 py-1 text-[10px] font-semibold text-foreground"><span className={`size-1.5 rounded-full ${status === 'Ongoing' ? 'bg-foreground animate-pulse' : status === 'Cancelled' ? 'border border-foreground' : 'bg-muted-foreground'}`}/>{status}</span>; }


export function EventRow({ event, onView, onEdit, onDelete }: { event: Event; onView?: () => void; onEdit?: () => void; onDelete?: () => void }) {
  return <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b px-5 py-4 last:border-b-0 sm:px-6 lg:grid-cols-[minmax(220px,2fr)_minmax(130px,1fr)_minmax(120px,1fr)_100px_95px_36px]">
    <div className="min-w-0"><div className="truncate text-[13px] font-semibold">{event.name}</div><div className="mt-1 text-[11px] text-muted-foreground">{event.category}</div></div>
    <div className="hidden items-center gap-2 text-xs text-muted-foreground lg:flex"><CalendarDays className="size-3.5"/>{event.date}</div>
    <div className="hidden items-center gap-2 truncate text-xs text-muted-foreground lg:flex"><MapPin className="size-3.5 shrink-0"/>{event.location}</div>
    <div className="hidden lg:block"><EventStatusBadge status={event.status}/></div>
    <div className="hidden items-center gap-1.5 text-xs text-muted-foreground lg:flex"><Users className="size-3.5"/>{event.registered}</div>
    <div className="flex items-center gap-2 lg:justify-end"><span className="lg:hidden"><EventStatusBadge status={event.status}/></span>{onView ? <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label={`Actions for ${event.name}`}><MoreHorizontal/></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className={poppins.className}><DropdownMenuItem onSelect={onView}><Eye/> View event</DropdownMenuItem><DropdownMenuItem onSelect={() => onEdit?.()}><Pencil/> Edit event</DropdownMenuItem><DropdownMenuSeparator/><DropdownMenuItem onSelect={() => onDelete?.()}><Trash2/> Delete event</DropdownMenuItem></DropdownMenuContent></DropdownMenu> : <Button variant="ghost" size="icon" asChild aria-label={`View ${event.name}`}><Link href="/events"><ArrowUpRight/></Link></Button>}</div>
    <div className="col-span-2 flex gap-4 text-[11px] text-muted-foreground lg:hidden"><span>{event.date}</span><span>{event.location}</span><span>{event.registered} registered</span></div>
  </div>;
}