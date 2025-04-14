import "./globals.css";

export const metadata = {
  title: "Ktronika - Soluciones IoT",
  description: "Transformamos datos en decisiones inteligentes con IoT.",
  icons: {
    icon: "/favicon.ico", // ubicación recomendada
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}





