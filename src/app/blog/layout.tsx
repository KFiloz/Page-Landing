// src/app/blog/layout.tsx
import type { ReactNode } from "react";
import BlogSidebar from "./components/BlogSidebar";
import BlogHeroSection from "./components/BlogHeroSection";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <BlogHeroSection />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Sidebar izquierdo */}
        <aside className="hidden lg:block lg:col-span-4">
          <BlogSidebar />
        </aside>

        {/* Contenido del blog */}
        <main className="lg:col-span-8 space-y-10 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
