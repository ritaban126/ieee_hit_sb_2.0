// import { createFileRoute, Navigate } from '@tanstack/react-router';
// export const Route = createFileRoute('/')({ head: () => ({ meta: [{ title: 'IEEE Technical Society — Admin' }, { name: 'description', content: 'IEEE Technical Society administration workspace.' }, { property: 'og:title', content: 'IEEE Technical Society — Admin' }, { property: 'og:description', content: 'IEEE Technical Society administration workspace.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] }), component: () => <Navigate to="/dashboard"/> });



import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/dashboard');
}
