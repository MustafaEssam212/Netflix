
import { IoIosSearch } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { IoIosTrendingUp } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Icon from '../public/icon.webp';
import { IoMdLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";

const Navbar = () => {

    const router = useRouter();

    return(
        <div className="navbar-container">
            <div className="logo"><Link href="/home"><Image src={Icon.src} fill style={{objectFit: 'contain'}} alt="Logo"></Image></Link></div>
            <div className="link"><Link href="#"><IoIosSearch className="Icon search" /></Link></div>
            <div className={router.pathname === '/home' ? "link active" : "link"}><Link href="#"><GrHomeRounded className="Icon" /></Link></div>
            <div className="link"><Link href="#"><TbArrowsShuffle2 className="Icon arrows" /></Link></div>
            <div className="link"><Link href="#"><IoIosTrendingUp className="Icon trend" /></Link></div>
            <div className="link"><Link href="#"><CgScreen className="Icon screen" /></Link></div>
            <div className="link"><Link href="#"><TbTriangleSquareCircle className="Icon tools" /></Link></div>
            <div className="link"><Link href="#"><AiOutlinePlus className="Icon plus" /></Link></div>
            <div onClick={()=> signOut({callbackUrl: '/'})} className="link"><Link href="#"><IoMdLogOut className="Icon logout" /></Link></div>  
        </div>
    )
}


export default Navbar;