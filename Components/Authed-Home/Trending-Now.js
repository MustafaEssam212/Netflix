
import Carousel from "./Carousel";


const TrendingNow = ({movies}) => {



    return(
        <div className="trending-now">
            
            <h3>Trending Now</h3>

            <div className='carousel-container'>


                <Carousel movies={movies} />


            </div>

        </div>
    )
}


export default TrendingNow;