import { array } from "prop-types";
import { Character } from "./Character";

export const Section = ({section}) => {
    return (
        <div className="section-container">
            <h1 className="text-danger">{section}</h1>
            <section id="main" className="my-5">
                <aside id="horizontal-scroll" className="mb-3 gap-4">
                    <Character />
                    <Character />
                    <Character />
                    <Character />
                    <Character />
                    <Character />
                    <Character />
                </aside>
            </section>
        </div>
    );
}