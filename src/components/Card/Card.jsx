import { ImageBox } from "../ImageBox/ImageBox"
import './Card.css'

//eslint-disable-next-line
export const Card = ({imageSrc, alt, nombre, descripcion, cargo}) => {
    return (
        <div className="card">
            <div className="card__header">
                <ImageBox imageSrc={imageSrc} alt={alt} />
                <h3>{nombre}</h3>
            </div>

            <div className="card__body">
                <p><span>Cargo: </span>{cargo}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}