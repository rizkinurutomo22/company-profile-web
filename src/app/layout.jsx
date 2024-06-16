import { Roboto_Condensed } from "next/font/google";

import "./globals.css";
import Logo from "@/components/Logo";
import NavMenu from "@/components/NavMenu";
import OutlineMenu from "@/components/OutlineMenu";

const roboto_condensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: { template: "%s | Mangabanana", default: "Mangabanana" },
  description: "Mangabanana your reliable manga provider.",
  icons: { icon: "./letter-m_5040715.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_condensed.className}>
        <OutlineMenu />
        <header className="sticky border-b-2 border-b-sky-300 pb-1">
          <div className="mx-3 my-1 flex max-w-full items-center justify-between">
            <Logo />
            <NavMenu className="hidden gap-4 sm:flex" />
          </div>
        </header>
        <main className="text-center">{children}</main>
        <footer className="mt-10 text-center">
          <p className="bg-cyan-700 py-2 text-white">
            🌸🍌 © 2024 Mangabanana 🍌🌸
          </p>
        </footer>
      </body>
    </html>
  );
}
