import Image from "next/image";
import KidsPic from '../../public/kids.png'

const FifthSection = () => {
    return(
        <div className="home-fifth-section">

            <div className="home-fifth-section-left">
                <Image sizes="40vw" src={KidsPic.src} fill style={{objectFit: 'contain'}} alt="Kids"></Image>
            </div>

            <div className="home-fifth-section-right">
                <h1>Create profiles for kids</h1>
                <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
            </div>

        </div>
    )
}


export default FifthSection;