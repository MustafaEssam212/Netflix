
import Carousel from "./Carousel";


const NowPlaying = ({movies}) => {

    

    return(
        <div className="trending-now">
            
            <h3>Now Playing</h3>

            <div className='carousel-container'>


                <Carousel movies={movies} />


            </div>

        </div>
    )
}


export default NowPlaying;