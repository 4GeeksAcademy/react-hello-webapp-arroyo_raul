import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Section } from "../components/Section.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	return (
		<div className="container mt-5">
			<Section section="Characters"/>
			<Section section="Vehicles" />
			<Section section="Planets" />
		</div>
	);
};