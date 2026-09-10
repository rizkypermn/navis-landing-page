'use client';

import { useRef, useState } from 'react';
import { Link as LinkIcon, Share2, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import './share-post.css';

export default function SharePost() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  async function copyLink(instagram = false) {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setStatus(instagram ? 'Link copied. Paste it into your Instagram message or story.' : 'Article link copied.');
    } catch {
      input.current?.focus();
      input.current?.select();
      setStatus('Select and copy the link below to share it.');
    }
  }
  const encoded = encodeURIComponent(url);
  const social = [
    { name: 'Facebook', icon: 'facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}` },
    { name: 'Instagram', icon: 'instagram', href: null },
    { name: 'LinkedIn', icon: 'linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}` },
    { name: 'X', icon: 'x', href: `https://twitter.com/intent/tweet?url=${encoded}` },
    { name: 'WhatsApp', icon: 'whatsapp', href: `https://wa.me/?text=${encoded}` },
  ];
  return <Dialog onOpenChange={open => {
    if (open) {
      const current = new URL(window.location.href);
      current.hash = '';
      setUrl(current.href);
      setStatus('');
      setCopied(false);
    }
  }}>
    <div className="blog-share"><DialogTrigger><Share2 size={18} aria-hidden="true"/>Share Post</DialogTrigger></div>
    <DialogContent className="navis-share-dialog" showCloseButton={false}>
      <div className="navis-share-header"><DialogTitle>Share Post</DialogTitle><DialogClose className="navis-share-close" aria-label="Close share popup"><X size={28} aria-hidden="true"/></DialogClose></div>
      <DialogDescription className="sr-only">Share this article on social media or copy its link.</DialogDescription>
      <div className="navis-share-layout">
        <img className="navis-share-art" src="/assets/share/illustration.webp" width={700} height={760} alt=""/>
        <div className="navis-share-controls">
          <h2>Share This News</h2>
          <div className="navis-share-social" aria-label="Share destinations">{social.map(item => item.href
            ? <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${item.name}`}><img src={`/assets/share/${item.icon}.webp`} width={28} height={28} alt=""/></a>
            : <button key={item.name} type="button" onClick={() => copyLink(true)} aria-label="Copy link for Instagram" title="Copy link to paste into Instagram"><img src={`/assets/share/${item.icon}.webp`} width={28} height={28} alt=""/></button>)}</div>
          <label htmlFor="navis-share-url">Or Copy this link</label>
          <div className="navis-share-url"><LinkIcon size={24} aria-hidden="true"/><input ref={input} id="navis-share-url" value={url} readOnly onFocus={event => event.currentTarget.select()}/></div>
          <button className="navis-copy-link" type="button" onClick={() => copyLink()}>{copied ? 'Copied!' : 'Copy Link'}</button>
          <p className="navis-share-status" role="status">{status}</p>
        </div>
      </div>
    </DialogContent>
  </Dialog>;
}
