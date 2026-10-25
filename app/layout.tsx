import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Je joue jeux partage",
  description: "Je joue jeux partage",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
