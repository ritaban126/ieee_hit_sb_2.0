import type { Event, TeamMember, Banner, GalleryAlbum, Admin } from '@/types';
import roboticsImage from '@/assets/robotics-lab.jpg';
import workshopImage from '@/assets/workshop.jpg';
import hackathonImage from '@/assets/hackathon.jpg';

// In Next.js, importing an image returns a StaticImageData object (not a string).
// The types expect `image: string`, so we use the `.src` URL here.
const robotics = roboticsImage.src;
const workshop = workshopImage.src;
const hackathon = hackathonImage.src;

export const admin: Admin = { name: 'Jhone Doe', email: 'admin@ieee.org', initials: 'JD' };

export const events: Event[] = [
  { id: 1, name: 'AI & Machine Learning Workshop', date: '27 Sep 2026', time: '10:00 AM – 4:00 PM', location: 'Seminar Hall', status: 'Ongoing', registered: 87, category: 'Workshop', description: 'A hands-on introduction to machine learning, real-world applications, and building your first intelligent model.', image: workshop, views: 1204, clicks: 463, payments: 78 },
  { id: 2, name: 'Web Development Workshop', date: '12 Oct 2026', time: '11:00 AM – 3:00 PM', location: 'Computer Lab 2', status: 'Upcoming', registered: 64, category: 'Workshop', description: 'Build modern web experiences with practical hands-on sessions.', image: workshop, views: 834, clicks: 312, payments: 0 },
  { id: 3, name: 'IEEE Innovation Hackathon', date: '24 Oct 2026', time: '9:00 AM – 6:00 PM', location: 'Innovation Centre', status: 'Upcoming', registered: 142, category: 'Hackathon', description: 'A full-day challenge to turn ambitious ideas into working prototypes.', image: hackathon, views: 2018, clicks: 891, payments: 112 },
  { id: 4, name: 'Robotics & Automation Summit', date: '08 Nov 2026', time: '10:00 AM – 2:00 PM', location: 'Auditorium', status: 'Upcoming', registered: 38, category: 'Seminar', description: 'Explore robotics, automation, and the future of intelligent systems.', image: robotics, views: 622, clicks: 271, payments: 0 },
  { id: 5, name: 'Cloud Computing Bootcamp', date: '16 Aug 2026', time: '10:00 AM – 5:00 PM', location: 'Computer Lab 1', status: 'Completed', registered: 118, category: 'Bootcamp', description: 'An immersive introduction to modern cloud infrastructure.', image: workshop, views: 1450, clicks: 521, payments: 102 },
  { id: 6, name: 'Circuit Design Challenge', date: '02 Jul 2026', time: '9:00 AM – 5:00 PM', location: 'Electronics Lab', status: 'Completed', registered: 92, category: 'Competition', description: 'Design and test creative circuits alongside fellow engineers.', image: robotics, views: 980, clicks: 343, payments: 0 },
];

export const team: TeamMember[] = [
  { id: 1, name: 'Priya kumari', position: 'Chairperson', department: 'Computer Science', year: '4th Year', initials: 'PK', email: 'ritaban@ieee.org' },
  { id: 2, name: 'Ananya Sharma', position: 'Vice Chairperson', department: 'Electronics & Communication', year: '4th Year', initials: 'AS', email: 'ananya@ieee.org' },
  { id: 3, name: 'Arjun Mehta', position: 'Technical Lead', department: 'Computer Science', year: '3rd Year', initials: 'AM', email: 'arjun@ieee.org' },
  { id: 4, name: 'Priya Nair', position: 'Event Coordinator', department: 'Electrical Engineering', year: '3rd Year', initials: 'PN', email: 'priya@ieee.org' },
  { id: 5, name: 'Ishaan Gupta', position: 'Design Lead', department: 'Computer Science', year: '3rd Year', initials: 'IG', email: 'ishaan@ieee.org' },
  { id: 6, name: 'Sneha Patel', position: 'Treasurer', department: 'Electronics & Communication', year: '2nd Year', initials: 'SP', email: 'sneha@ieee.org' },
];

export const banner: Banner = {
  eventId: 1,
  label: 'HAPPENING NOW',
  message: 'AI & ML Workshop is live',
  cta: 'Explore event',
  start: '27 Sep 2026, 9:00 AM',
  end: '27 Sep 2026, 5:00 PM',
  active: true,
};

export const albums: GalleryAlbum[] = [
  { id: 1, name: 'Innovation Hackathon 2026', date: '18 May 2026', photos: 42, image: hackathon, event: 'IEEE Innovation Hackathon' },
  { id: 2, name: 'Robotics Lab Sessions', date: '04 Apr 2026', photos: 28, image: robotics, event: 'Robotics & Automation Summit' },
  { id: 3, name: 'Cloud Computing Bootcamp', date: '16 Aug 2026', photos: 36, image: workshop, event: 'Cloud Computing Bootcamp' },
];


// export const performance: EventAnalytics[] = [
//   { eventId: 3, clicks: 891, registrations: 512, payments: 416 },
//   { eventId: 5, clicks: 521, registrations: 318, payments: 259 },
//   { eventId: 1, clicks: 463, registrations: 287, payments: 78 },
//   { eventId: 2, clicks: 312, registrations: 198, payments: 0 },
//   { eventId: 4, clicks: 271, registrations: 164, payments: 0 },
// ];
