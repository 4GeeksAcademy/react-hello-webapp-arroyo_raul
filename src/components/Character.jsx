import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Character = ({ name, uid }) => {
    const [favorito, setFavorito] = useState(false);
    const { store, dispatch } = useGlobalReducer();

    const item = {
        uid: uid,
        name: name
    };

    const añadirFavorito = () => {
        if (!favorito) {
            setFavorito(true);
            dispatch({ type: 'add_favourite', payload: { item: item } })
        } else {
            setFavorito(false);
            dispatch({ type: 'del_favourite', payload: { uid: uid } })
        }
    }

    const es_favorito = () => {
        for (let i = 0; i < store.favourites.length; i++) {
            if (store.favourites[i].uid === uid) {
                return <i className="fa-solid fa-heart text-danger"></i>;
            }
        }
        return <i className="fa-regular fa-heart text-warning"></i>;
    }

    return (
        <div className="card" style={{ width: "300px" }}>
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <span onClick={añadirFavorito}>{es_favorito()}</span>
                </div>
                <Link to={`/details/${uid}`} className="text-decoration-none text-dark">
                    <h2 className="d-flex justify-content-center align-items-center p-3">{name}</h2>
                </Link>
            </div>
        </div>
    );
};