# MVP IA – Landing Page AyCode

Ce projet est une landing page moderne pour présenter l’offre **MVP IA** d’AyCode : création rapide de MVP IA et web pour startups et PME ambitieuses.

## Fonctionnalités principales

- Présentation de l’offre MVP IA (création, maintenance, évolutions)
- Témoignages clients
- Section À propos, contact, CGU/CGV, politique de confidentialité
- Design responsive, animations Framer Motion, composants shadcn/ui
- Stack : Next.js 15, React 19, Tailwind CSS, shadcn/ui, Framer Motion

## Démarrage rapide

Installez les dépendances puis lancez le serveur de développement :

```bash
pnpm install
pnpm dev
# ou npm/yarn/bun selon votre gestionnaire
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## Structure du projet

- `src/app/` : pages principales (accueil, à propos, contact, cgu, privacy)
- `src/components/landing/` : sections de la landing page (hero, features, testimonials, pricing, footer)
- `src/components/ui/` : composants UI réutilisables (shadcn/ui)
- `src/hooks/` : hooks personnalisés
- `src/lib/` : utilitaires

## Personnalisation

Modifiez les textes, couleurs, offres et témoignages dans les fichiers de `src/components/landing/` pour adapter la landing à votre activité.

## Déploiement

Déployez facilement sur [Vercel](https://vercel.com/) ou toute plateforme compatible Next.js.

---

© {new Date().getFullYear()} AyCode – MVP IA. Tous droits réservés.
