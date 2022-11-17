import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { MainComponent } from "../shared/main.component";

const DogFactsPage: NextPage<{ dogFacts: string[] }> = ({dogFacts}) => {
    const [counter, incCounter] = useState(1);
    setTimeout(() => incCounter(counter + 1), 1000)
    return (<MainComponent>
            <h1>Random Dog Facts (Incremental Static Site Generation)</h1>
            <p>Client side counter: {counter}</p>
            <ul>
                {dogFacts.map((fact: string) => (
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
        </MainComponent>
    )
}
export default DogFactsPage;

export const getStaticProps: GetStaticProps = async () => {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://dog-api.kinduff.com/api/facts?number=5')
    const dogFacts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            dogFacts: dogFacts.facts
        },
        revalidate: 10 // In seconds
    }
}
