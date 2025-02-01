import { Header, Card } from "../../components/index" 

import { catImages } from "../../daTa/gatos"
import './About.css'


const About = () => {
    return (
        <>
            <Header title="Acerca de Nosotros" subtitle="Conoce a nuestro Equipo" />
            <div className="container">
                {
                    catImages.map(catImage => (
                        <Card 
                            key={catImage.id}
                            imageSrc={catImage.image}
                            nombre={catImage.nombre}
                            descripcion={catImage.descripcion}
                            cargo={catImage.cargo}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default About