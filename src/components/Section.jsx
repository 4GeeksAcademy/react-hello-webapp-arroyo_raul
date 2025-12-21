import { Character } from "./Character";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const Section = ({ section }) => {

    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {

        const getDataCharacters = async () => {
            const response = await fetch("https://swapi.tech/api/people");
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.log('Error :', response.status, response.statusText);
                return { error: { status: response.status, statusText: response.statusText } };
            }
        }

        const getDataVehicles = async () => {
            const response = await fetch("https://swapi.tech/api/vehicles");
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.log('Error :', response.status, response.statusText);
                return { error: { status: response.status, statusText: response.statusText } };
            }
        }

        const getDataPlanets = async () => {
            const response = await fetch("https://swapi.tech/api/planets");
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                console.log('Error :', response.status, response.statusText);
                return { error: { status: response.status, statusText: response.statusText } };
            }
        }

        if(section === "Characters"){
            getDataCharacters().then(data => {
                dispatch({ type: 'get_characters', payload: { characters: data.results } })
            })
            .catch(e => console.log(e))
        }else if(section === "Vehicles") {
            getDataVehicles().then(data => {
                dispatch({ type: 'get_vehicles', payload: { vehicles: data.results } })
            })
            .catch(e => console.log(e))
        }else if(section === "Planets") {
            getDataPlanets().then(data => {
                dispatch({ type: 'get_planets', payload: { planets: data.results } })
            })
            .catch(e => console.log(e))
        }
    }, []);

    const getTypes = () => {
        if (section === "Characters") {
            if(store.characters.length === 0) return <p>Cargando...</p>;
            return store.characters.map((character) => {
                return <Character name={character.name} />
            });
        } else if (section === "Vehicles") {
            if(store.vehicles.length === 0) return <p>Cargando...</p>;
            return store.vehicles.map((vehicle) => {
                return <Character name={vehicle.name} />
            });
        } else if (section === "Planets") {
            if(store.planets.length === 0) return <p>Cargando...</p>;
            return store.planets.map((planet) => {
                return <Character name={planet.name} />
            });
        }
    }


    return (
        <div className="section-container">
            <h1 className="text-danger">{section}</h1>
            <section id="main" className="my-5">
                <aside id="horizontal-scroll" className="mb-3 gap-4">
                    {getTypes()}
                </aside>
            </section>
        </div>
    );
}