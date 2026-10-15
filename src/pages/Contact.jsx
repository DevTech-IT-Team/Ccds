import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import { siteContent } from '../data/content';
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertTriangle, ExternalLink, Loader2, AlertCircle } from 'lucide-react';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[#E2EEEC] bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#38838A]/30 focus:border-[#38838A] text-[#050F2C] placeholder-slate-400 text-sm transition';

const inquirySubjects = [
  'Colon Hydrotherapy',
  'Ion Foot Detox',
  'BioCharger',
  'Detox Classes & Coaching',
  'Becoming a Colon Hydrotherapist',
  'Something Else',
];

const contactMethods = ['Text', 'Phone Call', 'Email'];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const subjectFromUrl = searchParams.get('subject');
  const initialSubject = inquirySubjects.includes(subjectFromUrl)
    ? subjectFromUrl
    : 'Colon Hydrotherapy';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    preferredMethod: 'Text',
    subject: initialSubject,
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (inquirySubjects.includes(subjectFromUrl)) {
      setForm((prev) => ({ ...prev, subject: subjectFromUrl }));
    }

    if (window.location.hash === '#contact-form') {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [subjectFromUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'your_access_key_here') {
      setErrorMessage(
        'Web3Forms access key is not configured. Please add your key to VITE_WEB3FORMS_ACCESS_KEY in the .env file.'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          phone: form.phone,
          email: form.email,
          preferred_contact_method: form.preferredMethod,
          inquiry_subject: form.subject,
          message: form.comment,
          from_name: 'Colorado Colonics Contact Form',
          subject: `New Inquiry: ${form.subject} from ${form.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({
          name: '',
          phone: '',
          email: '',
          preferredMethod: 'Text',
          subject: 'Colon Hydrotherapy',
          comment: '',
        });
      } else {
        setErrorMessage(data.message || 'Something went wrong while sending your message. Please try again.');
      }
    } catch {
      setErrorMessage('Unable to connect to the server. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const hours = siteContent.hours;
  const hoursList = [
    { day: 'Sunday', time: hours.sunday },
    { day: 'Monday', time: hours.monday },
    { day: 'Tuesday', time: hours.tuesday },
    { day: 'Wednesday', time: hours.wednesday },
    { day: 'Thursday', time: hours.thursday },
    { day: 'Friday', time: hours.friday },
    { day: 'Saturday', time: hours.saturday },
  ];

  return (
    <div>
      <PageHero
        label="Get In Touch"
        title="Contact Us"
        subtitle="Have more questions? Please call, leave a voice mail, or text. If you send an email, please allow more time for a response."
        isGradient
      />

      <section className="py-16 md:py-20 bg-[#F9FAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* ── Left: Contact Form (7 cols) ── */}
            <div className="lg:col-span-7">
              <div id="contact-form" className="h-full bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#E2EEEC] shadow-md p-6 sm:p-10">
                
                {/* Cancellation Alert Notice */}
                <div className="mb-8 p-4 rounded-2xl bg-[#FFF8F0] border border-[#FFE6D0] flex items-start gap-3.5">
                  <AlertTriangle className="w-5 h-5 text-[#B36C63] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#7A3F37] font-medium leading-relaxed">
                    <strong className="font-semibold">Cancelling your appointment?</strong> Please call or text. Cancelling appointments via email may result in a cancelation fee.
                  </p>
                </div>

                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#E2EEEC]">
                  <h2 className="text-2xl font-display font-semibold text-[#050F2C]">
                    Send Us a Message
                  </h2>
                  <span className="text-xs text-[#B36C63] font-medium">
                    * Indicates required field
                  </span>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#EAF5F3] flex items-center justify-center border border-[#B2D4D0]">
                      <CheckCircle2 className="w-8 h-8 text-[#38838A]" />
                    </div>
                    <h3 className="font-display font-semibold text-[#050F2C] text-2xl">Message Sent!</h3>
                    <p className="text-slate-600 text-sm max-w-md">
                      Thank you for contacting Colorado Colonics. We will review your message and reach out via your preferred method shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMessage('');
                      }}
                      className="mt-4 px-6 py-2 rounded-full bg-[#38838A] text-white font-medium text-sm hover:bg-[#2A656B] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#050F2C] mb-1.5 uppercase tracking-wide">
                        Name <span className="text-[#B36C63]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>

                    {/* Phone Number & Email Address */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-[#050F2C] mb-1.5 uppercase tracking-wide">
                          Phone Number <span className="text-[#B36C63]">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="(303) 505-0026"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-[#050F2C] mb-1.5 uppercase tracking-wide">
                          Email Address <span className="text-[#B36C63]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    {/* Preferred Method of Contact */}
                    <div>
                      <label className="block text-xs font-semibold text-[#050F2C] mb-2 uppercase tracking-wide">
                        Preferred Method of Contact
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {contactMethods.map((method) => {
                          const isSelected = form.preferredMethod === method;
                          return (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, preferredMethod: method }))}
                              className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                                isSelected
                                  ? 'border-[#38838A] bg-[#EAF5F3] text-[#2A656B] shadow-xs'
                                  : 'border-[#E2EEEC] bg-white text-slate-700 hover:bg-slate-50'
                              }`}
                            >
                              {method}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Inquiry Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-[#050F2C] mb-1.5 uppercase tracking-wide">
                        Inquiry Subject <span className="text-[#B36C63]">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none bg-no-repeat`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2338838A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '1.25em 1.25em',
                        }}
                      >
                        {inquirySubjects.map((sub) => (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Comment */}
                    <div>
                      <label htmlFor="comment" className="block text-xs font-semibold text-[#050F2C] mb-1.5 uppercase tracking-wide">
                        Comment <span className="text-[#B36C63]">*</span>
                      </label>
                      <textarea
                        id="comment"
                        name="comment"
                        required
                        rows={4}
                        value={form.comment}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {/* Error Notice */}
                    {errorMessage && (
                      <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-red-700 font-medium leading-relaxed">
                          {errorMessage}
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-[#38838A] hover:bg-[#2A656B] disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium text-base shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        'Submit'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── Right: Map & Contact Info (5 cols) ── */}
            <div className="lg:col-span-5">
              <div className="h-full bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#E2EEEC] shadow-md p-6 sm:p-8 flex flex-col gap-6">
                
                {/* Location & Interactive Map */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5F3] border border-[#B2D4D0] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#38838A]" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-[#050F2C] text-lg">
                        Our Location
                      </h3>
                      <p className="text-slate-700 text-sm font-medium mt-1">
                        3597 S Pearl St, Suite 101 Englewood, CO 80113
                      </p>
                      <p className="text-xs text-slate-500 mt-1 font-normal">
                        Please Park in the parking lot in front of the building.
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 min-h-[200px] mt-2 rounded-2xl overflow-hidden border border-[#E2EEEC] shadow-xs relative">
                    <iframe
                      title="Colorado Colonics Location Map"
                      src="https://maps.google.com/maps?q=3597+S+Pearl+St,+Suite+101,+Englewood,+CO+80113&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full block"
                    />
                  </div>
                  
                  <div className="mt-3 text-right">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=3597+S+Pearl+St,+Suite+101,+Englewood,+CO+80113"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38838A] hover:text-[#2A656B] transition-colors"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <hr className="border-[#E2EEEC]" />

                {/* Direct Phone & Email */}
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5F3] border border-[#B2D4D0] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#38838A]" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider block font-medium">Phone / Text</span>
                      <a
                        href="tel:3035050026"
                        className="font-display font-semibold text-[#050F2C] text-lg hover:text-[#38838A] transition-colors"
                      >
                        (303) 505-0026
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5F3] border border-[#B2D4D0] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#38838A]" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider block font-medium">Email</span>
                      <a
                        href="mailto:info@ccdc.love"
                        className="font-display font-semibold text-[#38838A] text-lg hover:underline transition-colors"
                      >
                        info@ccdc.love
                      </a>
                    </div>
                  </div>
                </div>

                <hr className="border-[#E2EEEC]" />

                {/* Clinic Hours */}
                <div>
                  <h3 className="font-display font-semibold text-[#050F2C] text-base mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#38838A]" /> Office Hours
                  </h3>
                  <div className="space-y-2">
                    {hoursList.map(({ day, time }, i) => (
                      <div
                        key={i}
                        className="flex justify-between text-xs sm:text-sm py-1 border-b border-[#E2EEEC]/60 last:border-0"
                      >
                        <span className="text-slate-600">{day}</span>
                        <span className="font-medium text-[#050F2C]">{time}</span>
                      </div>
                    ))}
                  </div>
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