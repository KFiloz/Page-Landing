
import "./styles/globals.css";

export const metadata = {
  title: 'Ktronika - Soluciones IoT',
  description: 'Transformamos datos en decisiones inteligentes con IoT.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}









