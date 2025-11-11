"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Target, Palette, TrendingUp, Code } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="gradientBars"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Solutions", id: "feature" },
            { name: "Services", id: "product" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="DreamyStudio"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Transform Your Vision Into Reality"
          description="We create dreamy solutions that elevate your brand and captivate your audience. From strategy to execution, we bring your boldest ideas to life."
          tag="Creative Agency"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Journey",
              href: "contact"
            },
            {
              text: "View Our Work",
              href: "product"
            }
          ]}
          imageSrc="https://pixabay.com/get/gcb27fb1b21a23b31c1772b2ed3323e0c1ee7b25325695ddac6af58481a1063810754a5347020d7f9c541dc3a65b506f8d486961439a68ab97cf33ee50729a749_1280.jpg"
          imageAlt="Dreamy creative background"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Dreamy Solutions That Deliver Results"
          description="We combine creativity with strategy to create solutions that not only look beautiful but drive measurable business outcomes and tangible ROI for your company."
          features={[
            {
              title: "Brand Strategy",
              description: "We dive deep into your brand's essence to create data-driven strategies that increase brand recognition by 150% and boost customer engagement by 80% within 6 months.",
              icon: Target
            },
            {
              title: "Creative Design",
              description: "Our award-winning designers craft stunning visuals that deliver 3x higher conversion rates and 250% more social engagement compared to industry standards.",
              icon: Palette
            },
            {
              title: "Digital Marketing",
              description: "Our targeted campaigns generate an average 320% ROI and help businesses achieve 2.5x more leads while reducing customer acquisition costs by 40%.",
              icon: TrendingUp
            },
            {
              title: "Web Development",
              description: "We build lightning-fast, conversion-optimized websites that load 5x faster than average, resulting in 35% lower bounce rates and 60% higher user engagement.",
              icon: Code
            }
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Dream Solutions"
          description="Explore our curated collection of services designed to transform your brand and elevate your business to new heights."
          products={[
            {
              id: "1",
              brand: "DreamyStudio",
              name: "Complete Brand Identity",
              price: "$4,500",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://pixabay.com/get/ga4e4fc9165976bf3354c9a3d9129e94ea923d5eff59d6184b4d984058e15da3d9fa12bea220c72be1df72cfa71542fc2ac7d84958b6612717c436079d7b66ef0_1280.jpg",
              imageAlt: "Brand identity package"
            },
            {
              id: "2",
              brand: "DreamyStudio",
              name: "Premium Website Design",
              price: "$8,900",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://pixabay.com/get/g3e82d4a522057c1d2e5776366400f3d90a22a0d75ebde0bdd427d5fbc64145249a94f0796d210e0d84959fa3f78b8d4eef057f07aec366e0bd0544ce79abd4a0_1280.jpg",
              imageAlt: "Website design mockup"
            },
            {
              id: "3",
              brand: "DreamyStudio",
              name: "Marketing Campaign Suite",
              price: "$6,200",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://pixabay.com/get/g48b7508b1059cf9e6c6a540c9daee2b99ae5432a222741234546d78d0f3d10b5ef520beb5e5ebf0d74b99b99b636cc9db002d983666d77ea22eb4fb9cf69779e_1280.jpg",
              imageAlt: "Marketing materials"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from the amazing clients we've had the pleasure of working with."
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Founder & CEO",
              testimonial: "DreamyStudio transformed our brand completely. Their creative vision and strategic approach helped us increase our market presence by 300%. Simply incredible work.",
              imageSrc: "https://pixabay.com/get/gda068b5cd9034212da3f6da5ac36fdcfe74e436043c425e692ddc97e5ab94beadeb4af88c85fae40a1bf807f1cead80e0634014173ff01ada4971cf49348433a_1280.png",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Creative Director",
              testimonial: "Working with this team was like having our dreams visualized perfectly. They understood our vision and brought it to life in ways we never imagined possible.",
              imageSrc: "https://pixabay.com/get/g69cc216039c1a6c0d8b05c461379ed80f0712d7b96e4b92e7be604c4d79dc0a60fc591f950636f2330ac4e602182c479d2e4b148f1619b82fd5bd160abb8352f_1280.jpg",
              imageAlt: "Marcus Rodriguez portrait"
            },
            {
              id: "3",
              name: "Emily Foster",
              role: "Marketing Manager",
              testimonial: "The attention to detail and creative excellence is unmatched. Our new brand identity has received countless compliments from customers and competitors alike.",
              imageSrc: "https://pixabay.com/get/g964df51f72f7c692392d2dfc9b0de0b638a14fa72f58976c4a9e61a3ab91a91e0bfdcaebd2f1a30f56733cc283dd7612a11f329dd48a13e92fea087cd7225e35_1280.jpg",
              imageAlt: "Emily Foster portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Startup Founder",
              testimonial: "From strategy to execution, DreamyStudio exceeded every expectation. They're not just a creative agency - they're true partners in success.",
              imageSrc: "https://pixabay.com/get/g52715b79ef11a28bfdfecfc2cf1c21d713dfd71619a5995ce46a20abc378e124f67ba7f3cdb1723ab2a0c8c66a0303c18ca53f4b6bfa4e34d5a6072b13f89159_1280.jpg",
              imageAlt: "David Kim portrait"
            },
            {
              id: "5",
              name: "Sophia Martinez",
              role: "Brand Manager",
              testimonial: "The dreamy solutions they created for us weren't just beautiful - they drove real business results. Our engagement increased by 250% in just three months.",
              imageSrc: "https://pixabay.com/get/g9b18ac2b930667535e787f2ae87e24f656e28e22e0dbb3cf4ee4044423eb8bcb38c7a6c869a9b16beb4f798c65252c25309e85023afd251c07fb1075483ab897_1280.jpg",
              imageAlt: "Sophia Martinez portrait"
            }
          ]}
          textboxLayout="default"
          animationType="opacity"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about working with DreamyStudio and our creative process."
          faqs={[
            {
              id: "1",
              title: "What makes DreamyStudio different from other agencies?",
              content: "We combine strategic thinking with creative excellence to deliver solutions that are not only visually stunning but also drive real business results. Our dreamy approach means we don't just follow trends - we create them."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary depending on scope and complexity. Brand identity projects typically take 4-6 weeks, website design 6-8 weeks, and comprehensive marketing campaigns 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
            },
            {
              id: "3",
              title: "Do you work with businesses of all sizes?",
              content: "Yes! We work with startups, small businesses, and established enterprises. Our dreamy solutions are scalable and tailored to fit your specific needs and budget."
            },
            {
              id: "4",
              title: "What's included in your brand strategy service?",
              content: "Our brand strategy includes market research, competitor analysis, brand positioning, messaging framework, visual identity guidelines, and a comprehensive brand book that serves as your roadmap to success."
            },
            {
              id: "5",
              title: "Can you help with ongoing marketing after project completion?",
              content: "Absolutely! Many of our clients choose to work with us on an ongoing basis for marketing support, content creation, and brand evolution. We offer flexible retainer packages to suit different needs."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Let's Create Together"
          title="Ready to Transform Your Brand?"
          description="Join hundreds of businesses who have elevated their brand with our dreamy solutions. Let's discuss how we can bring your vision to life."
          imageSrc="https://pixabay.com/get/g89bf5e5272b9059f03f6183ef8e02f723da47089add63c97fe3e09e520643962537b55a027f5d42727796c28778d9b13327a912899374d157e1a5860dd01a9b4_1280.jpg"
          imageAlt="Creative agency team workspace"
          inputPlaceholder="Enter your email address"
          buttonText="Start Your Journey"
          termsText="By signing up, you agree to receive updates about our dreamy solutions and creative insights."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="DreamyStudio"
          columns={[
            {
              items: [
                { label: "Solutions", href: "feature" },
                { label: "Services", href: "product" },
                { label: "About Us", href: "about" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Terms of Service", href: "https://example.com/terms" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}