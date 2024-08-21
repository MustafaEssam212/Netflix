import { kanitFont } from "@/utils/fonts"
import Footer from "@/Components/Footer";

const Layout = ({children}) => {
    return(
        <div className={kanitFont.className}>
            {children}
            <Footer />
        </div>
    )
}


export default Layout;