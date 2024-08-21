
import Image from "next/image";
import SecondSectionPic from '../../public/tv.png'



const SecondSection = () => {





    return(
        <div className="home-second-secion">
            
                <div className="home-second-section-left">
                    <h1>Enjoy on your TV</h1>
                    <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>


                <div className="home-second-seciton-right">
                    <div className="img-container">
                        <Image src={SecondSectionPic.src} fill sizes="40vw" style={{objectFit: 'contain'}} alt="TV"></Image>
                        <div className="video-inner-img">
                            <video autoPlay muted loop>
                                <source src={'/video-tv.m4v'} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                </div>

        </div>
    )
}


export default SecondSection;