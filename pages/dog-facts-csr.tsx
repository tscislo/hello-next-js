import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MainComponent } from "../shared/main.component";

const DogFactsPage: NextPage = () => {
    const [dogFacts, setDogFacts] = useState([]);
    const controller = new AbortController();
    const signal = controller.signal;

    useEffect(() => {
        fetch('https://api.allorigins.win/raw?url=https://dog-api.kinduff.com/api/facts?number=5', {signal})
            .then((response) => response.json())
            .then(res => setDogFacts(res.facts))
            .catch(() => [])
        return () => {
            controller.abort();
        }
    }, []);


    return (<MainComponent>
            <h1>Random Dog Facts (Client Side Rendering)</h1>
            <ul>
                {dogFacts && dogFacts?.map((fact: string) => (
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
        </MainComponent>
    )
}
export default DogFactsPage;

