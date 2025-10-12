import type { Metadata } from "next";
import { Merriweather, Lato } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import AuthProvider from "./components/AuthProvider";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
  variable: "--font-merriweather",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Verba Viva",
  description: "Un espacio para escritores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${merriweather.variable} ${lato.variable} antialiased`}
      >
        <AuthProvider>
          <div className="flex min-h-screen bg-fondo">
            <Sidebar />
            <main className="flex-1 min-w-0">
              <div className="p-4 lg:p-8">
                {children}
              </div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
