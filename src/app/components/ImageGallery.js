import Image from "next/image"; // Importa o componente de imagem do Next.js

const ImageGallery = () => {
  return (
    <div className="image-container">
      <div className="image-item">
        <a
          href="https://play.google.com/store/search?q=soulmidia&c=apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/app_android.png"
            alt="Imagem 1"
            width={300}
            height={200}
          />
        </a>
      </div>
      <div className="image-item">
        <a
          href="https://play.google.com/store/search?q=soulmidia&c=apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/app_ios.png" alt="Imagem 2" width={300} height={200} />
        </a>
      </div>
    </div>
  );
};

export default ImageGallery;
