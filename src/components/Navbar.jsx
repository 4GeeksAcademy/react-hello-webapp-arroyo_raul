import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const lista_favoritos = () => {
		return store.favourites.map(fav => {
			return <li key={fav.uid} className="d-flex justify-content-between align-items-center"><a className="dropdown-item" href="#">{fav.name}</a><i onClick={() => {dispatch({ type: 'del_favourite', payload: { uid: fav.uid } })}} className="fa-solid fa-trash-can px-2 text-danger"></i></li>
		})
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" className="image-nav" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-warning dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{store.favourites.length}
								<span className="visually-hidden">unread messages</span>
							</span>
						</a>

						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{lista_favoritos()}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};