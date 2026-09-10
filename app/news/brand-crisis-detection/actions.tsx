'use client';

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ContactCard({ articleTitle }: { articleTitle: string }) {
  const [draft, setDraft] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = `Name: ${fields.get('name')}\nCompany: ${fields.get('company')}\nEmail: ${fields.get('email')}\n\nI would like to learn more about ${articleTitle}.\nArticle: ${window.location.href}`;
    const url = `mailto:hello@navis.id?subject=${encodeURIComponent(`Navis enquiry — ${articleTitle}`)}&body=${encodeURIComponent(body)}`;
    setDraft(url);
    window.location.href = url;
  }
  return <aside className="blog-contact" aria-labelledby="blog-contact-title">
    <h2 id="blog-contact-title">Get in touch</h2>
    <p>Our friendly team would love to hear from you.</p>
    <form onSubmit={submit}>
      <label htmlFor="blog-name">Full Name<Input id="blog-name" name="name" placeholder="Full Name" autoComplete="name" required maxLength={120}/></label>
      <label htmlFor="blog-company">Company<Input id="blog-company" name="company" placeholder="Brand / Company" autoComplete="organization" required maxLength={160}/></label>
      <label htmlFor="blog-email">Email<Input id="blog-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required maxLength={254}/></label>
      <Button className="button" type="submit">Send Request <ArrowRight size={18} aria-hidden="true"/></Button>
      <small>Opens a draft in your email app.</small>
      {draft && <p role="status">Your draft is ready. Review and send it in your email app. <a href={draft}>Open email draft</a></p>}
    </form>
  </aside>;
}

