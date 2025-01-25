import { Header } from "./components/Header/Header"
import { ImageBox } from "./components/ImageBox/ImageBox"
import { InfoSection } from "./components/InfoSection/InfoSection"

import panaMiguel from './assets/images/El_gatoo.webp'
import funnyCar from './assets/images/gatoChistoso.jpg'
import gatoUno from './assets/images/images1.jpg';
import gatoDos from './assets/images/images.jpg';

export const App = () => {
  return (
    <>
      <Header title="Soy el Header" subtitle="Holi, soy un subtitulo" />
      <InfoSection />
      <ImageBox imageSrc={panaMiguel}/>
      <ImageBox imageSrc={funnyCar}/>
      <ImageBox imageSrc={gatoUno}/>
      <ImageBox imageSrc={gatoDos}/>
      <Header title="Soy el segundo titulo" subtitle="Yo no debería exister porque no deberían haber dos headers" />
     </>

  )
}


/* export default App */

