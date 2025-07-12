import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <section
          style={{
            textAlign: "center",
            margin: "2rem 0",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          Une solution proposée par{" "}
          <span style={{ color: "#0070f3" }}>AyCode</span>
        </section>
      </main>
      <Footer />
    </>
  );
}
