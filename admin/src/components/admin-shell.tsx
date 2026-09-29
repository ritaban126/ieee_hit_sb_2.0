// 'use client';

// import { useSyncExternalStore } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { LayoutDashboard, CalendarDays, Users, Megaphone, Images, Settings, ExternalLink, LogOut, Menu, Moon, Sun, ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
// import { admin } from '@/lib/data';
// import type { ReactNode } from 'react';
// import { Poppins } from 'next/font/google';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
//   display: 'swap',
// });

// const nav = [
//   { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
//   { to: '/events', label: 'Events', icon: CalendarDays },
//   { to: '/team', label: 'Team Members', icon: Users },
//   { to: '/banners', label: 'Banners', icon: Megaphone },
//   { to: '/gallery', label: 'Gallery', icon: Images },
//   // { to: '/analytics', label: 'Analytics', icon: BarChart3 },
//   { to: '/settings', label: 'Settings', icon: Settings },
// ] as const;


// // Theme state lives on <html class="dark">. useSyncExternalStore reads it safely:
// // the server always renders "light", then the browser re-syncs with the real value,
// // so there is no hydration mismatch.
// function subscribeTheme(callback: () => void) {
//   const observer = new MutationObserver(callback);
//   observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
//   return () => observer.disconnect();
// }
// const getThemeSnapshot = () => document.documentElement.classList.contains('dark');
// const getThemeServerSnapshot = () => false;

// export function ThemeToggle() {
//   const dark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
//   function toggle() {
//     const next = !dark;
//     document.documentElement.classList.toggle('dark', next);
//     localStorage.setItem('ieee-theme', next ? 'dark' : 'light');
//   }
//   return <Button variant="ghost" size="icon" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Light mode' : 'Dark mode'} onClick={toggle}>{dark ? <Sun /> : <Moon />}</Button>;
// }


// function Navigation({ mobile = false }: { mobile?: boolean }) {
//   const path = usePathname();
//   return <div className="flex h-full flex-col">
//     <div className="flex h-19.5 items-center gap-3 border-b px-6">
//       <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-[11px] font-extrabold">IEEE</div>
//       <div className="min-w-0"><div className="font-display text-sm font-bold leading-tight">IEEE</div><div className="text-[11px] text-muted-foreground">TECHNICAL SOCIETY</div></div>
//     </div>
//     <div className="px-4 pt-9"><p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Workspace</p><nav className="space-y-1">{nav.map(({ to, label, icon: Icon }) => {
//       const item = <Link href={to} className={`flex h-10 items-center gap-3 rounded-md px-3 text-[13px] font-medium transition-colors ${path === to ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}><Icon className="size-4.25" strokeWidth={1.8}/>{label}</Link>;
//       return <div key={to}>{mobile ? <SheetClose asChild>{item}</SheetClose> : item}</div>;
//     })}</nav></div>
//     <div className="mt-auto border-t p-4 space-y-1"><Link href="/" className="flex h-10 items-center gap-3 rounded-md px-3 text-[13px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><ExternalLink className="size-4.25"/>View Website</Link><Link href="/login" className="flex h-10 items-center gap-3 rounded-md px-3 text-[13px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><LogOut className="size-4.25"/>Logout</Link></div>
//   </div>;
// }


// export function AdminShell({ children }: { children: ReactNode }) {
//   return <div className="min-h-screen bg-background text-foreground">
//     <aside className="fixed inset-y-0 left-0 z-30 hidden w-58 border-r bg-card lg:block"><Navigation/></aside>
//     <div className="lg:pl-58">
//       <header className="sticky top-0 z-20 flex h-19.5 items-center justify-between border-b bg-card px-5 sm:px-8 lg:px-10">
//         <div className="flex items-center gap-3">
//           <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu/></Button></SheetTrigger><SheetContent side="left" className="w-65 p-0"><SheetTitle className="sr-only">Navigation</SheetTitle><Navigation mobile/></SheetContent></Sheet>
//           <div className="lg:hidden font-display text-sm font-bold">IEEE <span className="font-normal text-muted-foreground">/ Admin</span></div>
//           <div className="hidden items-center gap-2 text-xs text-muted-foreground lg:flex"><span className="size-1.5 rounded-full bg-foreground"/>IEEE HIT Student Branch <span className="mx-2 text-border">/</span> Admin Workspace</div>
//         </div>
//         <div className="flex items-center gap-3"><span className="hidden text-xs text-muted-foreground sm:block">Academic year 2026–27</span><div className="mx-1 h-5 w-px bg-border"/><ThemeToggle/>
//           <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="h-10 gap-2 px-1 sm:px-2"><div className="flex size-8 items-center justify-center rounded-full bg-secondary text-[10px] font-bold">{admin.initials}</div><span className="hidden text-xs font-semibold sm:inline">{admin.name}</span><ChevronDown className="size-3 text-muted-foreground"/></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className={`${poppins.className} w-44`}><DropdownMenuItem asChild><Link href="/settings">Profile & settings</Link></DropdownMenuItem><DropdownMenuSeparator/><DropdownMenuItem asChild><Link href="/login">Logout</Link></DropdownMenuItem></DropdownMenuContent></DropdownMenu>
//         </div>
//       </header>
//       <main className="mx-auto w-full max-w-375 px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pt-10">{children}</main>
//     </div>
//   </div>;
// }





'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, CalendarDays, Users, Megaphone, Images, Settings, ExternalLink, LogOut, Menu, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { admin } from '@/lib/data';
import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/events', label: 'Events', icon: CalendarDays },
  { to: '/team', label: 'Team Members', icon: Users },
  { to: '/banners', label: 'Banners', icon: Megaphone },
  { to: '/gallery', label: 'Gallery', icon: Images },
  // { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: Settings },
] as const;

// Theme state lives on <html class="dark">. useSyncExternalStore reads it safely:
// the server always renders "light", then the browser re-syncs with the real value,
// so there is no hydration mismatch.
function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}
const getThemeSnapshot = () => document.documentElement.classList.contains('dark');
const getThemeServerSnapshot = () => false;

export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('ieee-theme', next ? 'dark' : 'light');
  }
  return <Button variant="ghost" size="icon" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Light mode' : 'Dark mode'} onClick={toggle}>{dark ? <Sun /> : <Moon />}</Button>;
}

function Navigation({ mobile = false }: { mobile?: boolean }) {
  const path = usePathname();
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-19.5 items-center gap-3 border-b px-6">
        {/* Fixed Image Container with explicit width, height, and display properties */}
        <div className="relative w-10 h-10 shrink-0 flex items-center justify-center overflow-hidden">
          <Image 
            src="/Ieeelogo.png" 
            alt="IEEE HIT SB" 
            fill 
            sizes="40px"
            priority 
            className="object-contain"
          />
        </div>
        <div className="min-w-0 flex flex-col justify-center leading-tight">
          <div className="font-display text-sm font-bold tracking-wide">IEEE HIT SB</div>
          <div className="text-[9px] text-muted-foreground tracking-wide mt-0.5">Advancing Technology for Humanity.</div>
        </div>
      </div>
      <div className="px-4 pt-9">
        <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Workspace</p>
        <nav className="space-y-1">
          {nav.map(({ to, label, icon: Icon }) => {
            const item = (
              <Link 
                href={to} 
                className={`flex h-10 items-center gap-3 rounded-md px-3 text-[13px] font-medium transition-colors ${path === to ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}
              >
                <Icon className="size-4.25" strokeWidth={1.8}/>
                {label}
              </Link>
            );
            return <div key={to}>{mobile ? <SheetClose asChild>{item}</SheetClose> : item}</div>;
          })}
        </nav>
      </div>
      <div className="mt-auto border-t p-4 space-y-1">
        <Link href="/" className="flex h-10 items-center gap-3 rounded-md px-3 text-[13px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
          <ExternalLink className="size-4.25"/>
          View Website
        </Link>
        <Link href="/login" className="flex h-10 items-center gap-3 rounded-md px-3 text-[13px] font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
          <LogOut className="size-4.25"/>
          Logout
        </Link>
      </div>
    </div>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-58 border-r bg-card lg:block"><Navigation/></aside>
      <div className="lg:pl-58">
        <header className="sticky top-0 z-20 flex h-19.5 items-center justify-between border-b bg-card px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu/></Button></SheetTrigger><SheetContent side="left" className="w-65 p-0"><SheetTitle className="sr-only">Navigation</SheetTitle><Navigation mobile/></SheetContent></Sheet>
            <div className="lg:hidden font-display text-sm font-bold">IEEE <span className="font-normal text-muted-foreground">/ Admin</span></div>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground lg:flex"><span className="size-1.5 rounded-full bg-foreground"/>IEEE HIT Student Branch <span className="mx-2 text-border">/</span> Admin Workspace</div>
          </div>
          <div className="flex items-center gap-3"><span className="hidden text-xs text-muted-foreground sm:block">Academic year 2026–27</span><div className="mx-1 h-5 w-px bg-border"/><ThemeToggle/>
            <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="h-10 gap-2 px-1 sm:px-2"><div className="flex size-8 items-center justify-center rounded-full bg-secondary text-[10px] font-bold">{admin.initials}</div><span className="hidden text-xs font-semibold sm:inline">{admin.name}</span><ChevronDown className="size-3 text-muted-foreground"/></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className={`${poppins.className} w-44`}><DropdownMenuItem asChild><Link href="/settings">Profile & settings</Link></DropdownMenuItem><DropdownMenuSeparator/><DropdownMenuItem asChild><Link href="/login">Logout</Link></DropdownMenuItem></DropdownMenuContent></DropdownMenu>
          </div>
        </header>
        <main className="mx-auto w-full max-w-375 px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pt-10">{children}</main>
      </div>
    </div>
  );
}