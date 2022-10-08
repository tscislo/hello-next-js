import Link from "next/link";

export const MenuComponent = () => {
    return (<nav>[MENU]: <Link href="/dog-facts-isr">ISR</Link>|
        <Link href="/dog-facts-ssr">SSR</Link>|
        <Link href="/dog-facts-static">Static</Link>
    </nav>)
}