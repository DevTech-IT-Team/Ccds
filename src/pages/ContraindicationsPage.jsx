import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/layout/PageHero';
import { ArrowLeft } from 'lucide-react';

const colonItems = [
  { title: "ABDOMINAL HERNIA", desc: "The part of an internal organ that pushes through an opening in the organ’s wall." },
  { title: "ABDOMINAL SURGERY", desc: "After recent abdominal surgery - since the administering of this procedure initiates peristalsis and the use of the abdominal muscles - this procedure may aggravate sutures and the healing of the incision. A minimum of 12 weeks should pass after surgery and must be prescribed by physician." },
  { title: "ABNORMAL DISTENSION/MASSES", desc: "Distension – Bloating or swelling of the abdomen." },
  { title: "ACUTE LIVER FAILURE", desc: "A disorder that is sudden and severe but lasts only a short time." },
  { title: "ANEMIA", desc: "Not enough red blood, red blood cells, or hemoglobin in the body." },
  { title: "ANEURYSM", desc: "A bulging out of part of the wall of a blood vessel." },
  { title: "CARCINOMA", desc: "Cancer of any type." },
  { title: "CARDIAC CONDITION", desc: "Cardiac surgery or heart condition such as uncontrolled hypertension of congestive heart failure, or other heart conditions." },
  { title: "CROHN’S DISEASE", desc: "Causes inflammation in the small intestine. The inflammation can cause pain and can make the intestines empty frequently, resulting in diarrhea." },
  { title: "COLITIS", desc: "Irritation of the colon." },
  { title: "DIALYSIS PATIENTS", desc: "Filtering of the blood to assist the kidneys." },
  { title: "DIVERTICULITIS", desc: "Inflammation or infection of small pouches in the colon called diverticula that develop along the walls of the colon." },
  { title: "DIVERTICULOSIS", desc: "A condition in which a small, bulging pouches develop in the digestive tract." },
  { title: "FISSURES/FISTULAS", desc: "An anal fissure is a narrow tear that extends from the muscles that control the anus (sphincters) up into the anal canal. These tears usually develop when anal tissue is damaged during a hard bowel movement or when higher-than-normal tension develops in the anal sphincters." },
  { title: "HEMORRHAGING", desc: "When a client/user has a flow of bright red from the rectum/anus." },
  { title: "HEMORRHOIDECTOMY", desc: "A surgical procedure to remove hemorrhoids. A Doctor’s Release should be obtained a minimum of 12 weeks after removal of hemorrhoids." },
  { title: "INTESTINAL PERFORATION", desc: "A hole/rupture." },
  { title: "LUPUS", desc: "An autoimmune disease in which a person’s immune system attacks various organs or cells of the body. Lupus Patients have been noted to have colon perforations occur from the disease and the use of colonic irrigation/enemas can irritate the colon/bowel further." },
  { title: "PREGNANCY", desc: "Colonic irrigation/enemas are contraindicated during the first and the last trimester of pregnancy. May be prescribed by OB/GYN Physician as an enema prior to childbirth." },
  { title: "RECTAL SURGERY", desc: "After recent rectal surgery. Must be prescribed after a minimum of 12 weeks." },
  { title: "RENAL INSUFFICIENCIES", desc: "A surgical procedure to remove hemorrhoids. Insufficient excretion of wastes by the kidneys. A Doctor’s Release should be obtained a minimum of 12 weeks after removal of hemorrhoids." }
];

const ColonHydrotherapyContent = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-[#FFF8F6] p-6 sm:p-8 rounded-3xl border border-[#FBE8E6]">
      <p className="font-bold text-[#050F2C] mb-4 text-lg">
        <span className="text-[#B36C63]">Contraindication:</span> a condition which makes a particular treatment or procedure potentially inadvisable.
      </p>
      <h3 className="text-[#B36C63] font-bold text-xl mb-3 tracking-wide">MEDICAL DIAGNOSIS CONCERNS</h3>
      <p className="text-slate-700 font-medium leading-relaxed">
        Please call us with questions at <a href="tel:3035050026" className="text-[#38838A] font-bold hover:underline">(303) 505-0026</a>. We are happy to answer your questions and if necessary refer you to a qualified healthcare professional.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
      {colonItems.map(item => (
        <div key={item.title} className="bg-white p-6 rounded-2xl border border-[#E2EEEC] shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-[#38838A] mb-3 text-[15px]">{item.title}</h4>
          <p className="text-sm text-slate-600 leading-[1.7] font-medium">{item.desc}</p>
        </div>
      ))}
    </div>
    
    <div className="bg-[#F4F9F8] p-6 sm:p-8 rounded-3xl border border-[#E2EEEC] mt-8">
      <h4 className="font-bold text-[#38838A] mb-4 text-xl tracking-wide">PRESCRIPTION MEDICATION CONCERNS</h4>
      <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
        If a Physician has ever diagnosed you with any intestinal conditions, or if you have been on any medications which may weaken your intestinal walls, you should obtain a doctor’s release or a prescription for a colon hydrotherapy session. If you are currently taking medication for any condition diagnosed by a Physician, you should check with your Physician to ensure the medication will not interfere with the additional water intake and absorption through the rectum.
      </p>
    </div>
  </div>
);

const BiochargerContent = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-[#FFF8F6] p-6 sm:p-8 rounded-3xl border border-[#FBE8E6]">
      <p className="font-bold text-[#050F2C] mb-4 text-lg">
        <span className="text-[#B36C63]">Contraindication:</span> a condition which makes a particular treatment or procedure potentially inadvisable.
      </p>
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-[#B36C63] font-bold text-xl tracking-wide">IMPORTANT NOTE</h3>
      </div>
      <p className="text-slate-700 font-medium leading-relaxed">
        Because no controlled tests or studies have been run on these populations in conjunction with the BioCharger, the below items need to be followed and observed. For more information, please visit the <a href="https://biocharger.com/faq/#" target="_blank" rel="noopener noreferrer" className="text-[#38838A] font-bold hover:underline">BioCharger FAQ</a>.
      </p>
    </div>

    <div className="grid gap-4 sm:gap-6">
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2EEEC] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
        <div className="mt-1 min-w-[24px]">
          <div className="w-6 h-6 rounded-full bg-[#B36C63]/10 flex items-center justify-center">
             <span className="w-2.5 h-2.5 rounded-full bg-[#B36C63]"></span>
          </div>
        </div>
        <div>
          <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-medium">
            Individuals with <span className="font-bold text-[#050F2C]">cardiac pacemakers, defibrillators and insulin pumps</span> (that cannot be turned off or removed) MUST sit at least 6 feet away from your BioCharger.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2EEEC] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
        <div className="mt-1 min-w-[24px]">
          <div className="w-6 h-6 rounded-full bg-[#38838A]/10 flex items-center justify-center">
             <span className="w-2.5 h-2.5 rounded-full bg-[#38838A]"></span>
          </div>
        </div>
        <div>
          <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-medium">
            For individuals that are known to have <span className="font-bold text-[#050F2C]">photosensitivity</span> (I.E. Photo-convulsive Response, Epilepsy, Migraines caused by Photosensitivity), we recommend using the BioCharger without the plasma tubes installed, since the strobing nature potentially could cause an episode. An additional option is to wear a suitable eye mask (a sleeping mask that shuts out all light) during the session. As everyone is unique, we advise seeking advice on what triggers an episode and taking this into consideration prior to making the decision to use the BioCharger in this case.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2EEEC] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
        <div className="mt-1 min-w-[24px]">
          <div className="w-6 h-6 rounded-full bg-[#B36C63]/10 flex items-center justify-center">
             <span className="w-2.5 h-2.5 rounded-full bg-[#B36C63]"></span>
          </div>
        </div>
        <div>
          <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-medium">
            <span className="font-bold text-[#050F2C]">Women who are pregnant</span> and individuals with <span className="font-bold text-[#050F2C]">metal plating in their heads or near brain tissue</span> should NOT use the BioCharger.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2EEEC] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
        <div className="mt-1 min-w-[24px]">
          <div className="w-6 h-6 rounded-full bg-[#38838A]/10 flex items-center justify-center">
             <span className="w-2.5 h-2.5 rounded-full bg-[#38838A]"></span>
          </div>
        </div>
        <div>
          <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-medium">
            <span className="font-bold text-[#050F2C]">Children under the age of eighteen (18) years old</span> MUST be supervised by a parent or guardian during a BioCharger NG session.
          </p>
        </div>
      </div>
      
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2EEEC] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
        <div className="mt-1 min-w-[24px]">
          <div className="w-6 h-6 rounded-full bg-[#B36C63]/10 flex items-center justify-center">
             <span className="w-2.5 h-2.5 rounded-full bg-[#B36C63]"></span>
          </div>
        </div>
        <div>
          <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-medium">
            Individuals with <span className="font-bold text-[#050F2C]">chemotherapy ports that are metal-based</span> should NOT use the BioCharger within 6 feet radius from the unit. Outside of that range reduces the intensity enough to allow usage, even with a port installed.
          </p>
        </div>
      </div>

    </div>
  </div>
);

const ionFootDetoxItems = [
  "Pacemaker/Electrical Appliance",
  "Organ Transplant",
  "Seizures or Epilepsy",
  "Medication for the Heartbeat",
  "Open Wounds on the Feet",
  "Pregnant/Breast-feeding"
];

const IonFootDetoxContent = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-[#FFF8F6] p-6 sm:p-8 rounded-3xl border border-[#FBE8E6]">
      <p className="font-bold text-[#050F2C] mb-4 text-lg">
        <span className="text-[#B36C63]">Contraindication:</span> a condition which makes a particular treatment or procedure potentially inadvisable.
      </p>
      <h3 className="text-[#B36C63] font-bold text-xl mb-3 tracking-wide">MEDICAL CONCERNS</h3>
      <p className="text-slate-700 font-medium leading-relaxed">
        Please call us with questions at <a href="tel:3035050026" className="text-[#38838A] font-bold hover:underline">(303) 505-0026</a>. We are happy to answer your questions and if necessary refer you to a qualified healthcare professional.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
      {ionFootDetoxItems.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl border border-[#E2EEEC] shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#38838A]/10 flex items-center justify-center flex-shrink-0">
             <span className="w-2.5 h-2.5 rounded-full bg-[#38838A]"></span>
          </div>
          <h4 className="font-bold text-[#050F2C] text-[16px]">{item}</h4>
        </div>
      ))}
    </div>
  </div>
);

const PlaceholderContent = ({ title }) => (
  <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-sm border border-[#E2EEEC]">
    <h2 className="text-2xl font-bold font-display text-[#050F2C] mb-6">
      Content Coming Soon
    </h2>
    <p className="text-[#050F2C]/80 leading-relaxed font-medium">
      This is a placeholder page. The actual content for the {title} will be placed here from top to bottom.
    </p>
  </div>
);

const ContraindicationsPage = () => {
  const { service } = useParams();

  const getTitle = () => {
    switch(service) {
      case 'colon-hydrotherapy':
        return 'Colon Hydrotherapy Contraindications';
      case 'ion-foot-detox':
        return 'Ion Foot Detox Contraindications';
      case 'biocharger':
        return 'Biocharger Contraindications';
      default:
        return 'Contraindications';
    }
  };

  return (
    <div>
      <PageHero
        label="Safety First"
        title={getTitle()}
        subtitle="Please review the following information carefully."
        isGradient
      />

      <section className="py-16 bg-[#F9FAF6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-[#38838A] font-bold hover:text-[#2A656B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
          </div>

          {service === 'colon-hydrotherapy' ? (
            <ColonHydrotherapyContent />
          ) : service === 'biocharger' ? (
            <BiochargerContent />
          ) : service === 'ion-foot-detox' ? (
            <IonFootDetoxContent />
          ) : (
            <PlaceholderContent title={getTitle()} />
          )}

        </div>
      </section>
    </div>
  );
};

export default ContraindicationsPage;
