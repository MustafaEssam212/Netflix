
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    return <>
    
        {router.pathname !== '/home' && <footer>

<p>&copy; Copyright saved to Mustafa Essam ❤️</p>

</footer>}
    
    </>
}

export default Footer;