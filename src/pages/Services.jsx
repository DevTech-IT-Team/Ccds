import { useParams } from 'react-router-dom';
import Tabs from '../components/ui/Tabs';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import PageHero, { HERO_IMAGES } from '../components/layout/PageHero';
import { siteContent } from '../data/content';
import { ArrowRight } from 'lucide-react';

/* ── shared info card ── */
const InfoCard = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-6 border border-blue-pale shadow-card">
    <h3 className="font-bold text-navy-mid mb-3 text-sm">{title}</h3>
    {children}
  </div>
);

const Tag = ({ children }) => (
  <span className="px-3 py-1 bg-blue-pale text-navy-mid text-xs font-medium rounded-full border border-blue-pale">
    {children}
  </span>
);

const Services = () => {
  const { category } = useParams();
  const services = siteContent.services;

  const defaultTabIndex = category
    ? Math.max(0, services.tabs.findIndex((t) => t.id === category))
    : 0;

  const ColonHydrotherapy = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <InfoCard title="Systems Available">
          <ul className="space-y-2 text-ink-soft text-sm">
            <li className="flex gap-2"><span className="text-blue mt-0.5">•</span>{services.colonHydrotherapy.systems.closed}</li>
            <li className="flex gap-2"><span className="text-blue mt-0.5">•</span>{services.colonHydrotherapy.systems.open}</li>
          </ul>
        </InfoCard>
        <InfoCard title="Session Details">
          <p className="text-ink-soft text-sm leading-relaxed">{services.colonHydrotherapy.description}</p>
        </InfoCard>
      </div>
      <InfoCard title="May Help With">
        <div className="flex flex-wrap gap-2">
          {services.colonHydrotherapy.mayHelpWith.map((item, i) => <Tag key={i}>{item}</Tag>)}
        </div>
      </InfoCard>
      <InfoCard title="Benefits">
        <ul className="grid sm:grid-cols-2 gap-2">
          {services.colonHydrotherapy.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-ink-soft text-sm">
              <span className="text-blue mt-0.5 flex-shrink-0">✓</span>{b}
            </li>
          ))}
        </ul>
      </InfoCard>
      <Accordion items={[
        { title: services.colonHydrotherapy.misconceptions.title, content: services.colonHydrotherapy.misconceptions.items },
        {
          title: services.colonHydrotherapy.contraindications.title,
          content: (
            <div>
              <p className="mb-3 text-ink-soft text-sm">{services.colonHydrotherapy.contraindications.note}</p>
              <div className="flex flex-wrap gap-2">
                {services.colonHydrotherapy.contraindications.items.map((item, i) => <Tag key={i}>{item}</Tag>)}
              </div>
            </div>
          ),
        },
        { title: services.colonHydrotherapy.expectations.title, content: services.colonHydrotherapy.expectations.items },
      ]} />
    </div>
  );

  const IonFootDetox = () => (
    <div className="space-y-5">
      <p className="text-ink-soft leading-relaxed">{services.ionFootDetox.description}</p>
      <div className="grid md:grid-cols-2 gap-5">
        <InfoCard title="Session Details">
          <ul className="space-y-2 text-sm text-ink-soft">
            <li className="flex gap-2"><span className="text-blue">•</span>Duration: {services.ionFootDetox.duration}</li>
            <li className="flex gap-2"><span className="text-blue">•</span>{services.ionFootDetox.effects}</li>
            <li className="flex gap-2"><span className="text-blue">•</span>{services.ionFootDetox.ageLimit}</li>
          </ul>
        </InfoCard>
        <InfoCard title="Equipment">
          <p className="text-ink-soft text-sm leading-relaxed">{services.ionFootDetox.dealerNote}</p>
        </InfoCard>
      </div>
      <InfoCard title={services.ionFootDetox.addOn.title}>
        <p className="text-ink-soft text-sm">{services.ionFootDetox.addOn.description}</p>
      </InfoCard>
    </div>
  );

  const BioCharger = () => (
    <div className="space-y-5">
      <p className="text-ink-soft leading-relaxed">{services.biocharger.description}</p>
      <InfoCard title="How It Works">
        <p className="text-ink-soft text-sm">{services.biocharger.pathways}</p>
      </InfoCard>
      <div className="bg-blue-faint rounded-2xl p-6 border border-blue-pale">
        <p className="text-xs font-semibold text-blue uppercase tracking-wide mb-1">Special Offer</p>
        <p className="text-navy-mid font-bold">{services.biocharger.discount}</p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Button variant="primary" onClick={() => window.open(services.biocharger.videoDemo, '_blank')}>Watch Demo</Button>
        <Button variant="outline" onClick={() => window.open(services.biocharger.faqLink, '_blank')}>FAQ</Button>
      </div>
    </div>
  );

  const LiverCleanse = () => (
    <div className="space-y-5">
      <h3 className="text-xl font-display font-bold text-navy-mid">{services.liverCleanse.title}</h3>
      <p className="text-ink-soft">{services.liverCleanse.protocol}</p>
      <InfoCard title="Program Details">
        <p className="text-ink-soft text-sm mb-3">{services.liverCleanse.program}</p>
        <p className="text-3xl font-display font-bold text-blue">{services.liverCleanse.price}</p>
      </InfoCard>
      <div className="bg-blue-faint rounded-2xl p-5 border border-blue-pale">
        <p className="text-ink-soft text-sm mb-4">{services.liverCleanse.bookingNote}</p>
        <Button variant="primary" onClick={() => window.location.href = siteContent.business.phoneLink}>
          Call to Book
        </Button>
      </div>
    </div>
  );

  const MineralizingSoak = () => (
    <div className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <InfoCard title="Standalone Session">
          <p className="text-2xl font-display font-bold text-blue">{services.mineralizingSoak.standalone}</p>
        </InfoCard>
        <InfoCard title="With Foot Detox">
          <p className="text-2xl font-display font-bold text-blue">{services.mineralizingSoak.combined}</p>
        </InfoCard>
      </div>
      <Button variant="primary" onClick={() => window.open(siteContent.business.bookingUrl, '_blank')}>
        Book Now <ArrowRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );

  const CommunityResources = () => (
    <div className="space-y-5">
      <div className="bg-blue-faint border-l-4 border-blue rounded-r-2xl p-5">
        <p className="text-ink-soft text-sm italic">{services.communityResources.disclaimer}</p>
      </div>
      <h3 className="font-bold text-navy-mid">Referral Resources</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {services.communityResources.referrals.map((r, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-blue-pale shadow-card">
            <p className="font-medium text-navy-mid text-sm">{r.name}</p>
            {r.phone && <p className="text-xs text-ink-soft mt-0.5">{r.phone}</p>}
          </div>
        ))}
      </div>
    </div>
  );

  const tabContentMap = {
    'colon-hydrotherapy':  <ColonHydrotherapy />,
    'ion-foot-detox':      <IonFootDetox />,
    'biocharger':          <BioCharger />,
    'liver-cleanse':       <LiverCleanse />,
    'mineralizing-soak':   <MineralizingSoak />,
    'community-resources': <CommunityResources />,
  };

  const tabsWithContent = services.tabs.map((tab) => ({
    ...tab,
    content: tabContentMap[tab.id],
  }));

  return (
    <div>
      <PageHero
        label="What We Offer"
        title="Our Services"
        subtitle="Explore our complete range of detox and wellness treatments."
        image={HERO_IMAGES.services}
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs tabs={tabsWithContent} defaultTab={defaultTabIndex} />
        </div>
      </section>
    </div>
  );
};

export default Services;
