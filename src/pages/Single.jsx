// Import necessary hooks and components from react-router-dom and other libraries.
import { Link, useParams } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import useGlobalReducer from "../hooks/useGlobalReducer";  // Import a custom hook for accessing the global state

// Define and export the Single component which displays individual item details.
export const Single = props => {
  // Access the global state using the custom hook.
  const { store } = useGlobalReducer()

  // Retrieve the 'theId' URL parameter using useParams hook.
  const { theId } = useParams()
  const singleTodo = store.todos.find(todo => todo.id === parseInt(theId));

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
          <h2>Nombre</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam inventore commodi omnis fugiat iusto corrupti repellendus sint alias reprehenderit blanditiis magni at ullam deleniti consectetur, veniam exercitationem rem delectus! Facere!
            Eum officiis minima quod, molestiae asperiores corrupti minus quam at beatae expedita quisquam nostrum qui numquam similique. Inventore praesentium minima corporis aliquid quibusdam consectetur, voluptatem sunt mollitia nobis molestiae voluptatum.
            Unde amet, porro facere illo similique ratione soluta ex pariatur perspiciatis sint animi adipisci asperiores commodi in. Vero, praesentium minima laudantium atque, optio iste recusandae quibusdam aspernatur veritatis placeat adipisci.</p>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="d-flex justify-content-between mt-5">
        <p><b>Car. 1</b></p>
        <p><b>Car. 2</b></p>
        <p><b>Car. 3</b></p>
        <p><b>Car. 4</b></p>
        <p><b>Car. 5</b></p>
        <p><b>Car. 6</b></p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Desc 1</p>
        <p>Desc 2</p>
        <p>Desc 3</p>
        <p>Desc 4</p>
        <p>Desc 5</p>
        <p>Desc 6</p>
      </div>
    </div>
  );
};

// Use PropTypes to validate the props passed to this component, ensuring reliable behavior.
Single.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};
