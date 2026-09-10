import PageHero from '../components/layout/PageHero';
import { siteContent } from '../data/content';
import { FileText, AlertCircle, Clock, CheckCircle2, ShieldCheck, Phone, MapPin } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div>
      {/* ── Page Hero ── */}
      <PageHero
        label="Legal & Operational Terms"
        title="Terms & Conditions"
        subtitle="General terms of service, appointment policies, contraindication waivers, and academy enrollment terms."
        isGradient
      />

      {/* ── Main Content ── */}
      <section className="py-20 bg-[#F9FAF6] border-b border-[#E2EEEC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Intro */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-xs space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F9F8] border border-[#E2EEEC] text-xs font-bold text-[#38838A] uppercase tracking-wider">
              <FileText className="w-4 h-4 text-[#B36C63]" />
              <span>Effective Date: July 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C]">
              Terms of Service Agreement
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Welcome to Colorado Colonics. By accessing our website, booking appointments, or enrolling in our Academy certification programs, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>
          </div>

          {/* Section 1: Appointment & Cancellation Policy */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#38838A]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#050F2C]">1. Appointment Booking & Cancellation Policy</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We value your time and the time of our certified hydrotherapists. To maintain seamless scheduling for all clients:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-[#F9FAF6] p-4 rounded-2xl border border-[#E2EEEC]">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm font-medium">
                  <strong>24-Hour Cancellation Notice:</strong> We require at least 24 hours notice for any cancellation or rescheduling of appointments.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#F9FAF6] p-4 rounded-2xl border border-[#E2EEEC]">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm font-medium">
                  <strong>Late Arrival Policy:</strong> Arriving more than 15 minutes late may result in a shortened session or rescheduling to ensure subsequent client sessions remain on schedule.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 2: Health Contraindications & Medical Waiver */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#B36C63]">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#050F2C]">2. Health Contraindications & Medical Disclaimer</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Colon hydrotherapy is a natural wellness therapy. However, specific medical conditions are strict contraindications for treatment:
            </p>
            <div className="p-4 rounded-2xl bg-[#FDF6F5] border border-[#F5E2E0] text-slate-700 text-sm space-y-2">
              <p className="font-bold text-[#B36C63]">Strict Contraindications Include:</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Severe hemorrhoids, abdominal hernia, active Crohn’s disease, ulcerative colitis, recent abdominal surgery, severe anemia, kidney disease, congestive heart failure, or pregnancy.
              </p>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
              * Services provided at Colorado Colonics are not intended to diagnose, treat, cure, or prevent any disease. Always consult your primary physician before beginning any new wellness regimen.
            </p>
          </div>

          {/* Section 3: Academy Certification Terms */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#38838A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#050F2C]">3. Academy Enrollment & Certification Terms</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Students enrolled in the Colorado Colonics Professional Certification Program must complete all digital Athena LMS modules and required clinical practicum hours to earn official certification. Course materials are protected by intellectual property laws.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-[#050F2C] rounded-3xl p-8 sm:p-10 text-white shadow-lg space-y-6">
            <h3 className="text-2xl font-bold font-display text-white">Need Further Clarification?</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              If you have any questions regarding these Terms & Conditions, please contact us directly:
            </p>
            <div className="flex flex-wrap gap-6 pt-2 text-sm text-white/90 font-medium">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D98E84]" />
                <a href={siteContent.business.phoneLink} className="hover:text-[#D98E84] transition-colors">
                  {siteContent.business.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D98E84]" />
                <span>{siteContent.business.address}</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
