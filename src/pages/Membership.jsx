import { useEffect } from 'react';
import MembershipTopBanner from '../components/membership/MembershipTopBanner';
import MembershipHero from '../components/membership/MembershipHero';
import MembershipPlans from '../components/membership/MembershipPlans';
import MembershipSessionLength from '../components/membership/MembershipSessionLength';
import MembershipBenefits from '../components/membership/MembershipBenefits';
import MembershipEligibility from '../components/membership/MembershipEligibility';
import MembershipSteps from '../components/membership/MembershipSteps';
import MembershipPolicies from '../components/membership/MembershipPolicies';
import MembershipCTA from '../components/membership/MembershipCTA';

const Membership = () => {
  useEffect(() => {
    document.title = 'Membership | Colorado Colonics';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF8F5]">
      {/* ── Top Announcement Strip (Directly below header) ── */}
      <MembershipTopBanner />

      {/* ── 1. Hero Section ── */}
      <MembershipHero />

      {/* ── 2. Membership Plans (Essential & Unlimited) ── */}
      <MembershipPlans />

      {/* ── 3. Session Length Comparison (30m vs 50m) ── */}
      <MembershipSessionLength />

      {/* ── 4. Included Wellness Benefits (BioCharger & Foot Detox) ── */}
      <MembershipBenefits />

      {/* ── 5. Eligibility Criteria ── */}
      <MembershipEligibility />

      {/* ── 6. Three-Step Process ── */}
      <MembershipSteps />

      {/* ── 7. Terms & Policies Accordion ── */}
      <MembershipPolicies />

      {/* ── 8. Final Call to Action ── */}
      <MembershipCTA />
    </div>
  );
};

export default Membership;
