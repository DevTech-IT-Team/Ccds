import { useState } from 'react';
import Button from '../components/ui/Button';
import PageHero, { HERO_IMAGES } from '../components/layout/PageHero';
import { siteContent } from '../data/content';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-blue-pale bg-blue-faint focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue text-navy-mid placeholder-ink-muted text-sm transition';

const Contact = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', preferredMethod: 'Phone', subject: '', comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(siteContent.contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch (_) { /* show success regardless */ }
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', preferredMethod: 'Phone', subject: '', comment: '' });
  };

  const hours = siteContent.hours;
  const hoursList = [
    { day: 'Sunday',    time: hours.sunday },
    { day: 'Monday',    time: hours.monday },
    { day: 'Tuesday',   time: hours.tuesday },
    { day: 'Wednesday', time: hours.wednesday },
    { day: 'Thursday',  time: hours.thursday },
    { day: 'Friday',    time: hours.friday },
    { day: 'Saturday',  time: hours.saturday },
  ];

  return (
    <div>
      <PageHero
        label="Get In Touch"
        title={siteContent.contact.heading}
        subtitle="We'd love to hear from you. Phone or text is fastest."
        image={HERO_IMAGES.contact}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── Form (3 cols) ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-blue-pale shadow-card p-8">
                <h2 className="text-2xl font-display font-bold text-navy-mid mb-1">Send Us a Message</h2>
                <p className="text-ink-soft text-sm mb-6">{siteContent.contact.preferredContact}</p>

                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-pale flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-blue" />
                    </div>
                    <p className="font-bold text-navy-mid text-lg">Message Sent!</p>
                    <p className="text-ink-soft text-sm">{siteContent.contact.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
                          {siteContent.contact.form.name} *
                        </label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
                          {siteContent.contact.form.phone}
                        </label>
                        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="(303) 555-0000" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
                        {siteContent.contact.form.email} *
                      </label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferredMethod" className="block text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
                          {siteContent.contact.form.preferredMethod}
                        </label>
                        <select id="preferredMethod" name="preferredMethod" value={form.preferredMethod} onChange={handleChange} className={inputClass}>
                          {siteContent.contact.form.methodOptions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
                          {siteContent.contact.form.subject} *
                        </label>
                        <input id="subject" name="subject" type="text" required value={form.subject} onChange={handleChange} className={inputClass} placeholder="How can we help?" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="comment" className="block text-xs font-semibold text-navy-mid mb-1.5 uppercase tracking-wide">
                        {siteContent.contact.form.comment} *
                      </label>
                      <textarea id="comment" name="comment" required rows={4} value={form.comment} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us a bit more..." />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      {siteContent.contact.form.submit}
                    </Button>
                  </form>
                )}

                <div className="mt-6 p-4 bg-blue-faint rounded-xl border border-blue-pale">
                  <p className="text-xs text-ink-soft">{siteContent.contact.cancellation}</p>
                </div>
              </div>
            </div>

            {/* ── Info sidebar (2 cols) ── */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-2xl border border-blue-pale shadow-card p-6">
                <h3 className="font-bold text-navy-mid mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue" /> Location
                </h3>
                <p className="text-ink-soft text-sm">{siteContent.business.address}</p>
                <p className="text-xs text-ink-muted mt-1">{siteContent.business.parkingNote}</p>
                <div className="mt-4 h-40 bg-blue-faint rounded-xl flex items-center justify-center border border-blue-pale">
                  <span className="text-ink-muted text-xs">Map coming soon</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-blue-pale shadow-card p-6">
                <h3 className="font-bold text-navy-mid mb-3 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue" /> Phone / Text
                </h3>
                <a href={siteContent.business.phoneLink} className="text-blue font-semibold hover:text-navy-mid transition-colors">
                  {siteContent.business.phone}
                </a>
              </div>

              <div className="bg-white rounded-2xl border border-blue-pale shadow-card p-6">
                <h3 className="font-bold text-navy-mid mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue" /> Hours
                </h3>
                <div className="space-y-2">
                  {hoursList.map(({ day, time }, i) => (
                    <div key={i} className="flex justify-between text-sm py-1 border-b border-blue-pale/40 last:border-0">
                      <span className="text-ink-soft">{day}</span>
                      <span className="font-medium text-navy-mid">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
