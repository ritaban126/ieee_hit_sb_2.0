'use client';

import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Save, Building2, Link2, UserRound } from 'lucide-react';
import { AdminShell } from '@/components/admin-shell';
import { PageHeading } from '@/components/dashboard-parts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMockAction } from '@/components/manage-ui';
import { admin } from '@/lib/data';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

function SettingField({ label, initial, type = 'text' }: { label: string; initial?: string; type?: string }) {
  const [value, setValue] = useState(initial ?? '');
  return (
    <div className="space-y-2">
      <Label className="text-xs font-semibold">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={label}
        className="h-10"
      />
    </div>
  );
}

export default function SettingsPage() {
  const { show } = useMockAction();

  return (
    <div className={poppins.className}>
      <AdminShell>
        <PageHeading
          eyebrow="Workspace / Preferences"
          title="Settings"
          description="Keep your society's details in one place."
        />

        <div className="max-w-215 space-y-8">
          <section className="border-t pt-6">
            <div className="mb-6 flex items-center gap-3">
              <Building2 className="size-5" />
              <div>
                <h2 className="font-display text-lg font-bold">Club information</h2>
                <p className="text-xs text-muted-foreground">The details shown across your society website.</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <SettingField label="Club name" initial="IEEE Technical Society" />
              <SettingField label="Contact email" initial="hello@ieee.org" type="email" />
              <div className="sm:col-span-2">
                <SettingField
                  label="Description"
                  initial="A student community for technology, innovation, and engineering."
                />
              </div>
              <SettingField label="Club logo" type="file" />
            </div>
          </section>

          <section className="border-t pt-6">
            <div className="mb-6 flex items-center gap-3">
              <Link2 className="size-5" />
              <div>
                <h2 className="font-display text-lg font-bold">Social links</h2>
                <p className="text-xs text-muted-foreground">Where your community can find you.</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <SettingField label="Instagram" initial="https://instagram.com/ieee" />
              <SettingField label="LinkedIn" initial="https://linkedin.com/company/ieee" />
              <SettingField label="GitHub" initial="https://github.com/ieee" />
            </div>
          </section>

          <section className="border-t pt-6">
            <div className="mb-6 flex items-center gap-3">
              <UserRound className="size-5" />
              <div>
                <h2 className="font-display text-lg font-bold">Admin profile</h2>
                <p className="text-xs text-muted-foreground">Your workspace identity.</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <SettingField label="Admin name" initial={admin.name} />
              <SettingField label="Admin email" initial={admin.email} type="email" />
            </div>
          </section>

          <div className="flex justify-end border-t pt-6">
            <Button onClick={() => show('Settings saved in this preview')}>
              <Save className="mr-2 h-4 w-4" /> Save changes
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Changes are visible in this preview only and are not saved to a database.
          </p>
        </div>
      </AdminShell>
    </div>
  );
}