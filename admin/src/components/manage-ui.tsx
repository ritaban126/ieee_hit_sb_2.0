'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { Plus, Search, X, ArrowRight, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

// Modals render inside a portal (outside the page layout), so the font
// is applied directly on the dialog content instead of relying on inheritance.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export { Plus, Search, X, ArrowRight, Trash2 };


// SearchBox                                                                  

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export function SearchBox({ value, onChange, placeholder }: SearchBoxProps) {
  return (
    <div className="relative w-full sm:max-w-75">
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-10 bg-card pl-9"
      />
    </div>
  );
}


// SectionHeader                                                              */

type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeader({ title, description, action }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="font-display text-lg font-bold">{title}</h2>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}


// Field                                                                      */

type FieldProps = {
  label: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (value: string) => void;
};

export function Field({ label, value, placeholder, type = 'text', onChange }: FieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-xs font-semibold">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder ?? label}
        className="h-10"
      />
    </div>
  );
}


// FormDialog                                                                 */

type FormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  onSave: () => void;
  saveLabel?: string;
};

export function FormDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  onSave,
  saveLabel = 'Save changes',
}: FormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`${poppins.className} max-h-[88vh] max-w-160 overflow-y-auto sm:max-w-160`}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description ?? 'Update the information below.'}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-4 sm:grid-cols-2">{children}</div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={onSave}>{saveLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}


// ConfirmDelete                                                              */

type ConfirmDeleteProps = {
  name: string | null;
  onClose: () => void;
  onConfirm: () => void;
};

export function ConfirmDelete({ name, onClose, onConfirm }: ConfirmDeleteProps) {
  return (
    <AlertDialog
      open={Boolean(name)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <AlertDialogContent className={poppins.className}>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {name}?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}


// useMockAction                                                              */


export function useMockAction() {
  const [feedback, setFeedback] = useState('');

  function show(text: string) {
    setFeedback(text);
    toast.success(text);
    setTimeout(() => setFeedback(''), 3500);
  }

  return { feedback, show };
}
