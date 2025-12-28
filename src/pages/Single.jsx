// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state
import { useEffect, useState } from "react";

// Define and export the Single component which displays individual item details.
export const Single = () => {
  // Access the global state using the custom hook.
  const { store, dispatch } = useGlobalReducer()

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { uid, type } = useParams()

  useEffect(() => {
    const individualData = async () => {
      const response = await fetch(`https://swapi.tech/api/${type}/${uid}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.log('Error: ', response.status, response.statusText);
        return { error: { status: response.status, statusText: response.statusText } }
      }
    }

    individualData().then(data => {
      dispatch({ type: 'get_individual', payload: { individual: data.result } })
    })
      .catch(e => console.log(e))

    console.log("Valores individuales :", store.individual);
    console.log(`Link fetch: https://swapi.tech/api/${type}/${uid}`);
  }, [])

  const mostrarValores = () => {
    if (type === "people") {
      return <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Gender</span>
          <span>{store.individual?.properties?.gender}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Skin Color</span>
          <span>{store.individual?.properties?.skin_color}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Hair Color</span>
          <span>{store.individual?.properties?.hair_color}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Height</span>
          <span>{store.individual?.properties?.height}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Eye Color</span>
          <span>{store.individual?.properties?.eye_color}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Birth Year</span>
          <span>{store.individual?.properties?.birth_year}</span>
        </div>
      </div>
    } else if (type === "vehicles") {
      return <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Model</span>
          <span>{store.individual?.properties?.model}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Max Athmospheric Speed</span>
          <span>{store.individual?.properties?.max_atmosphering_speed}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Cost in Credits</span>
          <span>{store.individual?.properties?.cost_in_credits}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Length</span>
          <span>{store.individual?.properties?.length}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Crew</span>
          <span>{store.individual?.properties?.crew}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Passengers</span>
          <span>{store.individual?.properties?.passengers}</span>
        </div>
      </div>
    } else if (type === "planets") {
      return <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Climate</span>
          <span>{store.individual?.properties?.climate}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Diameter</span>
          <span>{store.individual?.properties?.diameter}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Gravity</span>
          <span>{store.individual?.properties?.gravity}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Orbital Period</span>
          <span>{store.individual?.properties?.orbital_period}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Population</span>
          <span>{store.individual?.properties?.population}</span>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold text-danger">Terrain</span>
          <span>{store.individual?.properties?.terrain}</span>
        </div>
      </div>
    }
  }
  return (
    <div className="text-center mt-5 container">
      <div className="d-flex gap-5 mt-5">
        <div className="d-flex flex-column w-100">
          <Link to="/" className="text-link">
            <p className="text-start atras rounded-circle"><i className="fa-solid fa-arrow-left"></i></p>
          </Link>
          <img src="https://imagenes.hobbyconsolas.com/files/image_640_360/uploads/imagenes/2023/04/25/69010497f41bb.jpeg" className="img-fluid" />
        </div>
        <div className="text-center w-75">
          <h2>{store.individual?.properties?.name}</h2>
          <p>{store.individual?.description}</p>
        </div>
      </div>
      <hr className="mt-5" />
      {mostrarValores()}
    </div>
  );
};
