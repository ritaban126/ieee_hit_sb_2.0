// "use client";
// import type { Metadata } from 'next';
// import Link from 'next/link';
// import { ArrowRight, ShieldCheck } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { ThemeToggle } from '@/components/admin-shell';

// export const metadata: Metadata = {
//   title: 'Sign in — IEEE Admin',
//   description: 'Sign in to the IEEE Technical Society admin dashboard.',
//   openGraph: {
//     title: 'Sign in — IEEE Admin',
//     description: 'Sign in to the IEEE Technical Society admin dashboard.',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary',
//   },
// };

// export default function Login() {
//   return <div className="flex min-h-screen flex-col bg-background"><header className="flex items-center justify-between border-b px-6 py-5 sm:px-10"><div className="font-display text-lg font-extrabold">IEEE<span className="ml-3 font-normal text-muted-foreground">/ ADMIN</span></div><ThemeToggle/></header><main className="flex flex-1 items-center justify-center px-5"><div className="w-full max-w-110 py-20"><div className="mb-10 flex size-14 items-center justify-center rounded-md bg-primary font-display text-sm font-extrabold text-primary-foreground">IEEE</div><p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">IEEE Technical Society</p><h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">Admin Dashboard<span className="text-muted-foreground">.</span></h1><p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">Manage your IEEE Technical Society website from one place.</p><Button size="lg" className="mt-10 h-12 w-full justify-between px-5" asChild><Link href="/dashboard"><span className="flex items-center gap-3"><span className="flex size-6 items-center justify-center rounded-full bg-primary-foreground text-sm font-bold text-primary">G</span>Continue with Google</span><ArrowRight/></Link></Button><p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="size-4"/> Admin access only · Preview sign-in</p></div></main><footer className="border-t px-6 py-5 text-xs text-muted-foreground sm:px-10">© 2026 IEEE Technical Society</footer></div>;
// }




import type { Metadata } from 'next';
import { LoginForm } from './login-form';

export const metadata: Metadata = {
  title: 'Sign in — IEEE Admin',
  description: 'Sign in to the IEEE Technical Society admin dashboard.',
  openGraph: {
    title: 'Sign in — IEEE Admin',
    description: 'Sign in to the IEEE Technical Society admin dashboard.',
  },
};

export default function LoginPage() {
  return <LoginForm />;
}