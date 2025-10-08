import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Nayla SR",
  description: "Portfólio de Desenvolvedora Full-Stack, Nayla SR.",
  verification: {
    google: 'Kj4nw-4AdhSZq0NFjIFaIM-D59xYB9ieoEsOuW_aJn0', 
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
