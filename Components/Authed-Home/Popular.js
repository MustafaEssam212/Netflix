
import Carousel from "./Carousel";


const Popular = ({movies}) => {



    return(
        <div className="trending-now">
            
            <h3>Popular</h3>

            <div className='carousel-container'>


                <Carousel movies={movies} />


            </div>

        </div>
    )
}


export default Popular;