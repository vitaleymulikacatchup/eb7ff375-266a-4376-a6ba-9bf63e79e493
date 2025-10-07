"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import StackRoadmapTimeline from '@/components/sections/layouts/roadmap/StackRoadmapTimeline';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

const theme: SiteTheme = {
  styleVariant: "futuristicAndOutOfBox",
  colorTemplate: 2,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759832468719-fc8b0e1e.jpg"
          logoAlt="MemePulse Logo"
          brandName="MemePulse"
          navItems={[{ name: "hero", id: "hero" }, { name: "about", id: "about" }, { name: "how-to-buy", id: "how-to-buy" }, { name: "tokenomics", id: "tokenomics" }, { name: "faq", id: "faq" }, { name: "roadmap", id: "roadmap" }, { name: "footer", id: "footer"}]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SimpleHero
          title="Yo Yo Man"
          description="Experience the future of memecoins with transparency and community engagement."
          primaryButtonText="Buy MemePulse"
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/sleek-futuristic-background-in-16-9-prem-1759832464986-2b0dc7e6.jpg"
          backgroundImageAlt="Sleek futuristic background"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="MemePulse is a futuristic memecoin that aims to bring fun and profitability to the crypto community while emphasizing transparency and usability."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics Overview"
          description="Our token distribution is designed to maximize value for our community while ensuring sustainable growth."
          tokenData={[{ value: "10M", description: "Total Supply" }, { value: "5M", description: "Liquidity" }, { value: "2M", description: "Development Fund" }]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          image="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/minimal-vector-mascot-for-memepulse-wais-1759832467175-4fface53.jpg"
          imageAlt="Minimal vector mascot for MemePulse"
          items={[{ title: "What is MemePulse?", content: "MemePulse is a memecoin with a focus on fun and community." }, { title: "How do I buy MemePulse?", content: "You can buy MemePulse through our official website and supported exchanges." }]}
        />
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <StackRoadmapTimeline
          items={[
            { id: 1, title: "Idea Phase", description: "Research and brainstorming to develop the concept.", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/minimal-vector-mascot-for-memepulse-wais-1759832467175-4fface53.jpg" },
            { id: 2, title: "Token Launch", description: "Launch of the MemePulse token with community engagement.", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/minimal-vector-mascot-for-memepulse-wais-1759832467175-4fface53.jpg" },
            { id: 3, title: "Market Expansion", description: "Strategic partnerships and marketing initiatives to grow the community.", image: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/minimal-vector-mascot-for-memepulse-wais-1759832467175-4fface53.jpg" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759832468719-fc8b0e1e.jpg"
          logoAlt="MemePulse Logo"
          logoText="MemePulse"
          items={[{ label: "Privacy Policy", onClick: () => console.log('Privacy clicked!') }, { label: "Terms of Service", onClick: () => console.log('Terms clicked!') }, { label: "Contact Us", onClick: () => console.log('Contact clicked!') }]}
        />
      </div>
    </SiteThemeProvider>
  );
}
