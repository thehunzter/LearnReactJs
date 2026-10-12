
import { myData } from "../../data.js";
import MainContent from "./MainContent.tsx";

export default function MainContents() {
    return (
        <section id="core-concepts">
            <ul>
                {myData.map((concept) => (
                    <MainContent key={concept.title} {...concept} />
                ))}
            </ul>
        </section>
    )
}