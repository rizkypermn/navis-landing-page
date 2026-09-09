'use client';
import assets from './assets.json';
import Sections from './sections';
import Navigation from './navigation';
const hero = assets['1430:829'];
export function Logo() { return <a className="logo" href="#home" aria-label="Navis home"><img src={hero.imgPlayground} width="40" height="40" alt=""/><img src={hero.imgNavis} width="75" height="19" alt="NAVIS"/></a>; }
export function Arrow() { return <img src={hero.imgTypcnArrowRight} width="24" height="24" alt=""/>; }
export default function Home() {
 return <main id="home"><section className="hero" style={{backgroundImage:`radial-gradient(ellipse at 50% 48%, transparent, #0008), url(${hero.imgFrame1410102645})`}}>
 <Navigation/>
 <div className="hero-body"><div><div className="hero-title"><p>Building Indonesia’s marketing data ecosystem</p><h1>Diving deeper than<br/><span>sentiment.<img src={hero.imgProperty1Frame1410102788} width="4" height="65" alt=""/></span></h1></div><div className="hero-actions"><a className="button" href="#contact">Get Started <Arrow/></a><a href="#about">Learn More</a></div></div><p className="hero-description">Global tools are too expensive (USD 15–45K/year) and too generic for local context. Local players lack technological depth. Bathys stands in between — global-class analytical depth, with an authentic understanding of Indonesian language and culture.</p></div>
 </section><Sections/></main>;
}
