
import Carousel from "./Carousel";


const TopRated = ({movies}) => {



    return(
        <div className="trending-now">
            
            <h3>Top Rated</h3>

            <div className='carousel-container'>


                <Carousel movies={movies} />


            </div>

        </div>
    )
}


export default TopRated;