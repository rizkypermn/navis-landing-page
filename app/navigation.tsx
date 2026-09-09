'use client';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import assets from './assets.json';

const hero = assets['1430:829'];
export default function Navigation({ light = false }: { light?: boolean }) {
  return <header className={`navigation${light ? ' navigation-light' : ''}`}>
    <a className="logo" href="/" aria-label="Navis homepage">{light
      ? <img src="/assets/nautiq/logo-blue.webp" width="117" height="37" alt="NAVIS"/>
      : <><img src={hero.imgPlayground} width="40" height="40" alt=""/><img src={hero.imgNavis} width="75" height="19" alt="NAVIS"/></>}</a>
    <nav aria-label="Main navigation">
      <a href="/#about">About</a>
      <DropdownMenu><DropdownMenuTrigger className="services-menu-trigger">Services <img src={hero.imgChevronDown} width="16" height="16" alt=""/></DropdownMenuTrigger>
        <DropdownMenuContent className="services-menu" sideOffset={14}>
          <DropdownMenuItem render={<a href="/#services"/>}>Research Framework</DropdownMenuItem>
          <DropdownMenuItem render={<a href="/services/nautiq"/>} className={light ? 'current-service' : ''}>Nautiq <small>Data and Intelligence Analytics</small></DropdownMenuItem>
          <DropdownMenuItem render={<a href="/?service=creative#services"/>}>Creative Activation</DropdownMenuItem>
          <DropdownMenuItem render={<a href="/#services"/>}>Explore all services</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <a href="/#why-us">Why Us</a><a href="/#contact">Pricing</a><a href="/#news">News</a><a href="mailto:hello@navis.id?subject=Career%20enquiry">Career</a>
    </nav>
    <span className="language"><img src={hero.imgGroup1} width="16" height="16" alt=""/> EN</span>
    <a href="/#contact" className="button outline nav-contact"><img src={hero.imgRiCustomerServiceFill} width="16" height="16" alt=""/>Contact Us</a>
  </header>;
}
