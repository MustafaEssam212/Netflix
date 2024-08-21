
import Image from "next/image";
import Logo from '../public/Logonetflix.png'
import { IoLanguage } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";


const Header = () => {

    const router = useRouter();

    return(
        <header>
            
            <Link href="/" title="Netflix" className="logo"><Image src={Logo.src} fill sizes="(min-width: 680px) 150px, calc(97.86vw - 496px)" style={{objectFit: 'contain'}} alt="Logo"></Image></Link>

            <div className="header-right">
                <div className="dropmenu">
                    <p className="dropmenu-exist"><IoLanguage className="language" /> English <MdOutlineKeyboardArrowDown className="arrow" /></p>
                </div>
                <button onClick={()=> router.push('/login')}>Sign In</button>
            </div>

        </header>
    )
}


export default Header;