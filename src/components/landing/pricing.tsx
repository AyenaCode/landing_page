"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "motion/react";
const offers = [
  {
    name: "MVP IA clé en main",
    price: "1 200 €",
    desc: "Livraison en 6–8 semaines. MVP complet, IA intégrée, prêt à scaler.",
    cta: "Choisir cette offre",
    id: "mvp",
  },
  {
    name: "Maintenance & évolutions",
    price: "300 €/mois",
    desc: "Support, maintenance, évolutions continues. Sérénité garantie.",
    cta: "Choisir cette offre",
    id: "maintenance",
  },
];

export function Pricing() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="w-full py-20 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nos offres
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {offers.map((o, i) => (
            <motion.div
              key={o.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: shouldReduceMotion ? 0 : -8,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
              }}
            >
              <Card className="h-full shadow-md hover:shadow-xl transition-shadow border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{o.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-extrabold text-primary mb-2">
                    {o.price}
                  </div>
                  <div className="text-base text-muted-foreground mb-4">
                    {o.desc}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild size="lg" className="w-full">
                    <a href="#contact" aria-label={o.cta}>
                      {o.cta}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
