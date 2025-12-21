import { useState } from "react";

export const Character = ({name}) => {
    const [favorito, setFavorito] = useState(false);
    
    const añadirFavorito = () => {
        if (!favorito) {
            setFavorito(true);
        } else {
            setFavorito(false);
        }
    }

    const corazon = favorito ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>;

    return (
        <div className="card" style={{ width: "300px" }}>
            <img src="..." className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                    <button type="button" onClick={añadirFavorito} className="btn btn-outline-warning">{corazon}</button>
                </div>
            </div>
        </div>
    );
};