import BlogHero from "./components/BlogHeroSection";
import BlogSidebar from "./components/BlogSidebar";
import BlogPostCard from "./components/BlogPostCard";

const BlogPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-[1200px] mx-auto">
      <BlogHero />

      <div className="flex flex-col md:flex-row gap-12">
        <BlogSidebar />

        <main className="w-full md:w-3/4 space-y-8">
          <BlogPostCard
            title="Cómo optimizar una red LoRaWAN para monitoreo agrícola"
            excerpt="Aprende las mejores prácticas para desplegar sensores IoT en fincas, configurar gateways y enviar datos en tiempo real a la nube..."
            author="Camilo Ortega"
            date="15 de abril de 2025"
          />
          <BlogPostCard
            title="Automatización de procesos en plantas de filtración"
            excerpt="Conoce cómo mejorar la eficiencia y trazabilidad de procesos industriales usando PLCs, SCADA y análisis de datos."
            author="Camilo Ortega"
            date="10 de abril de 2025"
          />
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
