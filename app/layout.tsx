import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Navis — Diving deeper than sentiment', description: 'Building Indonesia’s marketing data ecosystem. Research, data intelligence, and creative activation.' };
export default function RootLayout({children}: {children: React.ReactNode}) {return <html lang="en"><body>{children}</body></html>;}
