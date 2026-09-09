import type { Metadata } from 'next';
import Navigation from '../../navigation';
import { Platforms, Footer } from '../../sections';
import assets from '../../assets.json';
import './nautiq.css';

export const metadata: Metadata = {
  title: 'Nautiq — Social Media Listener | Navis',
  description: 'Listen to what people really say about your brand. Monitor conversations, understand sentiment, and turn social mentions into actionable insights with Nautiq.',
};
const demo = '/?unit=nautiq#contact';
const metrics = assets['1480:4786'];
const features = [
  ['monitoring','Social Media Monitoring','Track mentions, keywords, hashtags and conversations'],
  ['sentiment','Sentiment Analysis','Understand whether conversations are positive, neutral or negative'],
  ['trends','Trend Detection','Spot spikes, emerging topics and changing volume'],
  ['audience','Audience Insights',"Know who’s talking and what they care about"],
  ['competitors','Competitor Monitoring','Compare your brand with competitors in real time'],
  ['recommendations','AI Powered Recommendations','Turn insights into actionable next steps.'],
];
const steps = [
  ['listen','Listen','Collect','Conversations'],
  ['understand','Understand','Analyze','Sentiments'],
  ['analyze','Analyze','Find trends &','key Insights'],
  ['act','Act','Get AI','Recommendations'],
];
const logos = [
  ['Notion',metrics.imgNotion],['Slack',metrics.imgSlack],['Google Drive',metrics.imgGoogleDrive],['Intercom',metrics.imgIntercom],
  ['Jira',metrics.imgJira],['Dropbox',metrics.imgDropbox],['Stripe',metrics.imgStripe],['Zapier',metrics.imgZapier],
];
function Eyebrow({children}: {children: React.ReactNode}) {return <div className="eyebrow"><span/>{children}</div>;}
function Arrow() {return <img src={assets['1430:829'].imgTypcnArrowRight} width="24" height="24" alt=""/>;}
function Person({image,name,role}: {image:string;name:string;role:string}) {return <div className="nautiq-person"><img src={`/assets/nautiq/${image}.webp`} width="44" height="44" alt="" loading="lazy"/><div><p>{name}</p><small>{role}</small></div></div>;}
export default function NautiqPage() {
  return <main className="nautiq-page" id="home">
    <div className="nautiq-top"><Navigation light/><section className="nautiq-hero">
      <div className="nautiq-hero-copy"><p className="nautiq-kicker">Social Media Listener</p><h1>Listen to What<br/>{" "}People <em>Really</em> Say<br/>{" "}About Your Brand</h1><p>Nautiq helps you monitor conversations across social media, understand public sentiment, and turn online mentions into actionable insights.</p><div className="nautiq-actions"><a className="button" href={demo}>Request a Demo <Arrow/></a><a href="#what-is-nautiq">Learn More</a></div></div>
      <img className="nautiq-dashboard" src="/assets/nautiq/hero-dashboard.webp" width="1383" height="1240" alt="Nautiq dashboard showing conversation sentiment, a timeline of mentions, engagement, and AI recommendations." fetchPriority="high"/>
    </section></div>
    <Platforms/>
    <section className="nautiq-introduction" id="what-is-nautiq">
      <div className="nautiq-intro-copy"><Eyebrow>What is Nautiq</Eyebrow><h2>From Social conversations<br/>to business <em>intelligence</em></h2><p>Nautiq collects and analyzes social media mentions to help you understand your audience, spot emerging issues, and make data driven decisions.</p></div>
      <ol className="nautiq-process" aria-label="How Nautiq works">{steps.map(([icon,title,line1,line2],i)=><li key={icon} className={i%2 ? 'step-bottom' : 'step-top'}><div className="process-label"><h3>{title}</h3><p>{line1}<br/>{line2}</p></div><img src={`/assets/nautiq/${icon}.webp`} width="135" height="133" alt="" loading="lazy"/></li>)}</ol>
    </section>
    <section className="nautiq-capabilities" id="capabilities"><img className="nautiq-swoop swoop-left" src={assets['1430:2130'].imgVector183} width="341" height="812" alt=""/><img className="nautiq-swoop swoop-right" src={assets['1430:2130'].imgVector184} width="376" height="718" alt=""/><div className="section-heading"><Eyebrow>Core Capabilities</Eyebrow><h2><em>Everything</em> you need,in <em>one</em> place.</h2><p>From field data collection to campaign execution every Navis business unit reinforces the next, vertically.</p></div><div className="nautiq-feature-grid">{features.map(([icon,title,copy])=><article key={icon}><img src={`/assets/nautiq/${icon}.webp`} width="48" height="52" alt="" loading="lazy"/><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="nautiq-showcase" id="product-showcase"><div className="section-heading"><Eyebrow>Product Showcase</Eyebrow><h2>Everything You Need to <em>Understand</em> the Conversation</h2><p>From Real time mentions to deep sentiment analysis, Nautiq gives you a complete view of what people are saying and what it means for your brand.</p></div><div className="nautiq-laptop-stage"><img src="/assets/nautiq/product-laptop.webp" alt="Nautiq on a laptop: sentiment analysis, social mentions over time, and source-of-mentions analytics." width="2249" height="1227" loading="lazy"/></div></section>
    <section className="nautiq-proof" id="nautiq-results"><div className="nautiq-proof-card"><div className="section-heading"><Eyebrow>Trusted By Leading Companies</Eyebrow><h2>Trusted by Businesses Across <em>Industries</em></h2><p>We listen, we care, and we deliver making every step simple, seamless, and worthwhile.</p></div><div className="nautiq-stat-grid">{[['200+','Companies'],['15+','Industries'],['5M+','Total Mentions Tracked']].map(([value,label])=><div key={label}><strong>{value}</strong><p>{label}</p></div>)}</div><p className="trusted-title">Trusted by Businesses, Proven by Results</p><div className="nautiq-trusted-logos">{logos.map(([name,src])=><img key={name} src={src} width="64" height="64" alt={name} loading="lazy"/>)}</div></div><div className="trial nautiq-trial"><img className="trial-lines" src={metrics.imgLineGradient} width="1700" height="1200" alt=""/><div><h2>Start Listening to what Matters.</h2><p>Discover what people are saying about your brand and turn every conversations into opportunity.</p></div><div className="trial-actions"><a href="#product-showcase">Learn More</a><a className="button" href={demo}>Request Demo <Arrow/></a></div></div></section>
    <section className="nautiq-testimonials"><Eyebrow>Testimonials</Eyebrow><h2>Trusted by teams diving alongside us.</h2><div className="nautiq-quotes"><figure className="nautiq-quote-primary"><span className="quote-mark" aria-hidden="true">“</span><blockquote>Navis Analytics is the only tool that truly understands our slang and local context. Their field research team also gives us the data that explains the 'why' behind every sentiment number — not just an empty chart.</blockquote><figcaption><Person image="rangga" name="Rangga Adiwijaya" role="Head of Brand Insights, national FMCG company"/></figcaption></figure><figure><blockquote>“Their crisis management framework helped us respond to negative issues within hours, not days.”</blockquote><figcaption><Person image="dian" name="Dian Saraswati" role="PR Manager, telecommunications company"/></figcaption></figure><figure><blockquote>“Their 88-city research gave us a depth of data we couldn’t get from an ordinary online survey.”</blockquote><figcaption><Person image="farhan" name="Farhan Hidayat" role="Marketing Director, national retail chain"/></figcaption></figure></div></section>
    <Footer/>
  </main>;
}
