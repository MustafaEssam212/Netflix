
import Image from "next/image";
import ThirdPic from '../../public/mobile-0819.jpg';
import Poster from '../../public/boxshot.png';

const ThirdSection = () => {
    return(
        <div className="home-third-section">
            

            <div className="third-section-left">

                <div className="img-container">
                    <Image src={ThirdPic.src} fill sizes="40vw" style={{objectFit: 'contain'}} alt="Mobile" loading="lazy"></Image>
                </div>


                <div className="layer-on-img">
                        <div className="layer-on-img-left">
                            <div className="inner-layer-img"><Image src={Poster.src} loading="lazy" fill sizes="(min-width: 1060px) calc(4.07vw - 9px), (min-width: 920px) calc(5.83vw - 28px), (min-width: 840px) calc(20vw - 155px), calc(20vw - 156px)" alt="Poster" style={{objectFit: 'contain'}}></Image></div>

                            <div className="inner-layer-details">
                                <p>Stranger Things</p>
                                <p>Downloading...</p>
                            </div>
                        </div>
                        <div className="layer-on-img-right"><div className="gif-container"></div></div>
                </div>

            </div>


            <div className="third-section-right">
                
                <h1>Download your shows to watch offline</h1>
                <h2>Save your favorites easily and always have something to watch.</h2>

            </div>


        </div>
    )
}


export default ThirdSection;