import Image from 'next/image';
import Logo from '../../images/Logo.svg';
import AppHeaderStyles from "./AppHeader.module.scss"

export default function AppHeader() {
    return (
        <header className={AppHeaderStyles.header_container}>
            <div className={AppHeaderStyles.logo_container}>
            <Image
                src={Logo}
                alt="Logo"
                priority={true}
            />
            </div>
        </header>
    );
}
