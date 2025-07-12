"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    name: "Julie Martin",
    role: "CEO @ Finwise",
    logo: "/vercel.svg",
    text: "Résultat bluffant : MVP livré en 5 semaines, automatisations IA prêtes à l’emploi. On a gagné 3 mois sur notre roadmap !",
  },
  {
    name: "Amine Benali",
    role: "CTO @ HealthSync",
    logo: "/next.svg",
    text: "Équipe ultra‑pro, dispo, force de proposition. Notre chatbot IA fonctionne dès le 1er jour. Je recommande à 100 %.",
  },
  {
    name: "Sophie Lemoine",
    role: "COO @ DataPulse",
    logo: "/window.svg",
    text: "Maintenance réactive, évolutions mensuelles, zéro stress. On se concentre sur le business, ils gèrent la tech !",
  },
];

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="w-full py-20 bg-muted" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Ils ont lancé leur MVP IA avec nous
        </h2>
        <Carousel opts={{ loop: true, align: "center" }}>
          <CarouselContent className="mx-auto max-w-2xl">
            {testimonials.map((t, i) => (
              <CarouselItem key={t.name} className="px-2">
                <motion.div
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Card className="shadow-lg border-0 bg-background">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Image
                        src={t.logo}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="rounded-full bg-muted"
                      />
                      <div>
                        <div className="font-semibold text-lg">{t.name}</div>
                        <div className="text-muted-foreground text-sm">
                          {t.role}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base md:text-lg font-medium text-center">
                        “{t.text}”
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
