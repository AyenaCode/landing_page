"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion, useReducedMotion } from "motion/react";
import { Zap, Bot, TrendingUp, LifeBuoy } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "MVP ultra‑rapide",
    desc: "Produit fonctionnel en quelques semaines. Gagnez un temps précieux sur le marché.",
  },
  {
    icon: Bot,
    title: "IA intégrée",
    desc: "Automatisation et chatbots prêts à l’emploi pour booster votre productivité.",
  },
  {
    icon: TrendingUp,
    title: "Scalabilité native",
    desc: "Architecture pensée pour grandir avec votre business, sans limites.",
  },
  {
    icon: LifeBuoy,
    title: "Support continu",
    desc: "Maintenance et évolutions mensuelles pour une sérénité totale.",
  },
];

export function Features() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="w-full py-20 bg-background" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi choisir notre offre&nbsp;?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              whileHover={{
                y: shouldReduceMotion ? 0 : -8,
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
              }}
            >
              <Card className="h-full shadow-md hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-col items-center gap-4">
                  <f.icon className="size-10 text-primary mb-2" aria-hidden />
                  <CardTitle className="text-xl text-center">
                    {f.title}
                  </CardTitle>
                  <CardDescription className="text-center text-base">
                    {f.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
