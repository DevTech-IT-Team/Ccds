import PageHero from '../components/layout/PageHero';
import { siteContent } from '../data/content';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* ── Page Hero ── */}
      <PageHero
        label="Legal & Data Protection"
        title="Privacy Policy"
        subtitle="How Colorado Colonics collects, protects, and handles your personal health information."
        isGradient
      />

      {/* ── Main Content ── */}
      <section className="py-20 bg-[#F9FAF6] border-b border-[#E2EEEC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Effective Date & Intro */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-xs space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F9F8] border border-[#E2EEEC] text-xs font-bold text-[#38838A] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#B36C63]" />
              <span>Effective Date: July 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#050F2C]">
              Your Privacy Matters to Us
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              At Colorado Colonics and Detox Center (CCDC), we respect your privacy and are committed to protecting the personal and health information you share with us. This Privacy Policy explains our data practices regarding collection, usage, and security across our website, online scheduling systems, and clinical services.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#38838A]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#050F2C]">1. Information We Collect</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We collect information to provide high-quality, personalized hydrotherapy and wellness care. The types of data we collect include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 bg-[#F9FAF6] p-4 rounded-2xl border border-[#E2EEEC]">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm font-medium">
                  <strong>Personal Identifiers:</strong> Name, email address, phone number, physical address, and emergency contact details.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#F9FAF6] p-4 rounded-2xl border border-[#E2EEEC]">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm font-medium">
                  <strong>Health Intake & Intake Forms:</strong> Medical history, contraindication screenings, lifestyle habits, and practitioner notes required for safe colon hydrotherapy.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#F9FAF6] p-4 rounded-2xl border border-[#E2EEEC]">
                <CheckCircle2 className="w-5 h-5 text-[#38838A] flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm font-medium">
                  <strong>Appointment & Payment Data:</strong> Scheduling history, billing address, and transaction records (processed securely via encrypted third-party payment gateways).
                </span>
              </li>
            </ul>
          </div>

          {/* Section 2: How We Use Your Information */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#38838A]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#050F2C]">2. How We Use Your Information</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We strictly utilize your data for clinical, operational, and customer support purposes:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#F9FAF6] border border-[#E2EEEC]">
                <h4 className="font-bold text-[#050F2C] text-sm mb-1">Clinical Safety</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Evaluation of medical eligibility and contraindications prior to hydrotherapy sessions.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F9FAF6] border border-[#E2EEEC]">
                <h4 className="font-bold text-[#050F2C] text-sm mb-1">Appointment Management</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Sending booking confirmations, appointment reminders, and follow-up care instructions.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F9FAF6] border border-[#E2EEEC]">
                <h4 className="font-bold text-[#050F2C] text-sm mb-1">Educational & Academy Services</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Managing course enrollments and Athena LMS student accounts for our professional certification program.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F9FAF6] border border-[#E2EEEC]">
                <h4 className="font-bold text-[#050F2C] text-sm mb-1">Legal & Regulatory Compliance</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Fulfilling local health department regulations, accounting standards, and legal requirements.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Data Security & Confidentiality */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EEEC] shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#38838A]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#050F2C]">3. Data Security & Confidentiality</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We employ strict administrative, technical, and physical safeguards to maintain the confidentiality of your records:
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We <strong>NEVER</strong> sell, rent, or trade your personal or health data to third-party advertisers. Information is only shared with HIPAA-compliant scheduling platforms, laboratory partners (if applicable), or when required by law enforcement under valid court orders.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-[#050F2C] rounded-3xl p-8 sm:p-10 text-white shadow-lg space-y-6">
            <h3 className="text-2xl font-bold font-display text-white">Questions About Your Privacy?</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              If you have any questions regarding this Privacy Policy or wish to request data deletion/access, please contact our team:
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

export default PrivacyPolicy;
