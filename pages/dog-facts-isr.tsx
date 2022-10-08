import {GetStaticProps, NextPage} from "next";
import {useState} from "react";
import {MenuComponent} from "../shared/menu";

const DogFactsPage: NextPage<{ dogFacts: string[] }> = ({dogFacts}) => {
    const [counter, incCounter] = useState(1);
    setTimeout(() => incCounter(counter + 1), 1000)
    return (<>
            <MenuComponent />
            <h1>Random Dog Facts</h1>
            <p>{counter}</p>
            <ul>
                {dogFacts.map((fact: string) => (
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
        </>
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
        revalidate: 2
    }
}