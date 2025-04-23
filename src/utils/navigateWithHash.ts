// src/utils/navigateWithHash.ts

'use client';

import { useRouter } from 'next/navigation';

export const useNavigateWithHash = () => {
  const router = useRouter();

  const navigateToSection = (hash: string) => {
    if (window.location.pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500); // Tiempo suficiente para que la home cargue
    } else {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return navigateToSection;
};
