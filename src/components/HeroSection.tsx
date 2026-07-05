import Window from "./Window";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-[#befcae]">Hi, I&apos;m Ken Gomes.</h1>
      <p className="text-xl text-[#c5fcb6]">
        Product-minded Senior Software Engineer with 6+ years building MVPs and scaling product foundations at high-growth startups.
      </p>
      <p className="text-xl text-[#abe39d]">
        Currently at Okta, building identity and security products used by millions. Previously at Aviatrix, contributing to multi-cloud networking and security — and before that, leading frontend initiatives at OmniRetail across markets in Africa, where I owned everything from design-system work to behavioral analytics and A/B testing that drove real growth.
      </p>
      <p className="text-xl text-[#abe39d]">
        Comfortable across the stack. Work closely with product, design, and growth teams. I care about clean architecture, delightful UX, and making data legible to the humans who need it most.
      </p>
      <Window />
    </div>
  );
}
