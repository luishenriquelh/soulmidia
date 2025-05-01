"use client";

import Image from "next/image";
import ImageGallery from "../app/components/ImageGallery";

export default function Home() {
  return (
    <div>
      <div className="titulo-left-top">
        ORGANIZE <span className="titulo-left-top-texto">E</span> SIRVA COM
        PROPÓSITO
      </div>

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
          <h1>
          &quot;Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o
  seu santo nome.&quot;
          </h1>
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
