"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          <span className="text-primary">Arrête de perdre du temps</span> :
          <br />
          <span className="text-accent">
            Lance ton MVP IA en 6&nbsp;semaines, sans te ruiner
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8">
          ROI immédiat, rapidité d’exécution, expertise IA sur-mesure.
          <br />
          Passe de l’idée au produit en un temps record, sans compromis sur la
          qualité.
        </p>
        <Button
          asChild
          size="lg"
          className="px-8 py-5 text-lg font-semibold animate-pulse shadow-lg"
        >
          <a href="#pricing" aria-label="Démarrer mon projet">
            Démarrer mon projet <ArrowRight className="ml-2 inline-block" />
          </a>
        </Button>
      </motion.div>
      <div className="mt-12 flex justify-center">
        <Image
          src="/globe.svg"
          alt="Illustration MVP IA"
          width={320}
          height={220}
          priority
          className="drop-shadow-xl"
        />
      </div>
    </section>
  );
}
