import {NextPage} from "next";
import {MenuComponent} from "../shared/menu";

const DogFactsPage: NextPage<{ dogFacts: string[] }> = ({dogFacts}) => {
    return (<>
            <MenuComponent />
            <h1>Random Dog Facts (SSR)</h1>
            <ul>
                {dogFacts.map((fact: string) => (
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
        </>
    )
}
export default DogFactsPage;

export async function getServerSideProps() {
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
    }
}