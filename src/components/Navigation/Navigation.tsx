import NavigationStyles from "./Navigation.module.scss"
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className={NavigationStyles.nav_container}>
            <ul className={NavigationStyles.nav_list}>
                <li>
                    <Link href="/categories" className={NavigationStyles.nav_item}>
                        Categories
                    </Link>
                    </li>
                    <li>

                    <Link href="/regions" className={NavigationStyles.nav_item}>
                        Regions
                    </Link>
                    </li>
                    <li>

                    <Link href="/random" className={NavigationStyles.nav_item}>
                        Random recipe
                    </Link>
                    </li>

                
            </ul>
        </nav>
    );
}