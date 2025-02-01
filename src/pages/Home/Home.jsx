import { Header, ImageBox, InfoSection } from '../../components/index' 

import { catImages } from "../../daTa/gatos";


import './Home.css'

const Home = () => {
  return (
    <>
      <Header title="Soy el Header" subtitle="Holi, soy un subtitulo" />

      <div className="bg-azul">
        <div className="container">
          <InfoSection />
        </div>
      </div>

      <div className="container">
        {catImages.map((catImage) => (
          <ImageBox
            key={catImage.id}
            imageSrc={catImage.image}
            alt={catImage.alt}
          />
        ))}
      </div>

      <Header
        title="Soy el segundo titulo"
        subtitle="Yo no debería exister porque no deberían haber dos headers"
      />
    </>
  );
};


export default Home