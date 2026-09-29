export type EventStatus = 'Ongoing' | 'Upcoming' | 'Completed' | 'Cancelled';
export interface Event { id: number; name: string; date: string; time: string; location: string; status: EventStatus; registered: number; category: string; description: string; image?: string; views: number; clicks: number; payments: number; }
export interface TeamMember { id: number; name: string; position: string; department: string; year: string; initials: string; email: string; }
export interface Banner { eventId: number; label: string; message: string; cta: string; start: string; end: string; active: boolean; }
export interface GalleryAlbum { id: number; name: string; date: string; photos: number; image: string; event: string; }
export interface GalleryImage { id: number; albumId: number; src: string; caption: string; }
export interface EventAnalytics { eventId: number; clicks: number; registrations: number; payments: number; }
export interface Admin { name: string; email: string; initials: string; }
