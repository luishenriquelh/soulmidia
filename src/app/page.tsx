"use client";

import Image from "next/image";
import ImageGallery from "../app/components/ImageGallery";
import TypingEffect from "../app/components/TypingEffect";

import { DM_Sans } from "next/font/google"; // Importando a fonte DM Sans

// Usando a fonte DM Sans
const dmSans = DM_Sans({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <div>
        <div className="titulo-left-top">ORGANIZE <span className="titulo-left-top-texto">E</span> SIRVA COM PROPÓSITO</div>
        
      <div className="layout-container">
        <main className="main-content">
          <header className="header">
            <div className="image-container-logo">
              <div className="image-logo">
                <Image
                  src="/logo_soulmidiag.png"
                  alt="Next.js logo"
                  width={500}
                  height={100}
                  priority
                />
              </div>
            </div>
          </header>

            "Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o
            seu santo nome."

          <div>
            <ImageGallery />
          </div>

          <footer className="footer">
            <p>www.soulmidia.com.br</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
