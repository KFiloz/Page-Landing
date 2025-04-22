import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ktronika - Soluciones IoT",
  description: "Transformamos datos en decisiones inteligentes con IoT.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="relative">
        <Navbar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
