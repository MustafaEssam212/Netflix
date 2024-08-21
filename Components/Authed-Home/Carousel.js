
import ReactSimplyCarousel from 'react-simply-carousel';
import { useState } from 'react';



const Carousel = ({movies}) => {

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return(

        <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        containerProps={{
            style: {
                width: '100%',
            }
        }}
        itemsListProps={{
            style: {
                display: 'flex',
                gap: '7px', // Adjust this value to set the gap between slides
            }
        }}
        itemsToShow={8}
        itemsToScroll={2}
        forwardBtnProps={{
         show: false
        }}
        backwardBtnProps={{
         show: false
        }}

        speed={200}
        easing="linear"
    >
        {
            movies.map((e, key) => {
                return(
                    <div key={key} style={{backgroundImage: `url('${process.env.NEXT_PUBLIC_IMAGE_URL}w185${e.poster_path}')`}} className='slide'>
    
                    </div>
                )
            })
        }

    </ReactSimplyCarousel>


    )
}


export default Carousel;