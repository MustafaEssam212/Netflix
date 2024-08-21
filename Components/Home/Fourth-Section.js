
import Image from "next/image";
import DevicesPic from '../../public/device-pile.png';


const FourthSection = () => {






    return(
        <div className="home-fourth-section">
            <div className="home-fourth-section-left">
                <h1>Watch everywhere</h1>
                <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
            </div>
            <div className="home-fourth-section-right">
                    <div className="img-container">
                        <Image priority={false} loading="lazy" sizes="40vw" src={DevicesPic.src} fill style={{objectFit: 'contain'}} alt="Devices"></Image>
                        <div className="video-inner-img">
                            <video autoPlay muted loop>
                                <source src={'/video-devices.m4v'} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default FourthSection;