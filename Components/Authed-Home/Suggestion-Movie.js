
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";





const SuggestionMovie = ({ movie }) => {



    return(
        <div className="suggestion-movie">
            <div className="suggestion-movie-img-layer">
                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}original${movie.backdrop_path}`} alt="Movie" fill style={{objectFit: 'cover'}}></Image>
            </div>
       
            <div className="suggestion-movie-layer-on">
                <div className="suggestion-movie-layer-on-info">
                    <h1>{movie.title}</h1>
                    <h2>{movie.overview.length > 335 ? movie.overview.slice(0, 335)+'...' : movie.overview}</h2>
                    <div className="suggestion-btns">
                        <button><FaPlay className="Icon" /> Play</button>
                        <button><FaInfoCircle className="Icon" /> More info</button>
                    </div>
                </div>
            </div>
            <div className="shadow-layer"></div>
        </div>
    )

}


export default SuggestionMovie;