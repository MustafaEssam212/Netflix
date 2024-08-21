import Navbar from "@/Components/Navbar";
import SuggestionMovie from "@/Components/Authed-Home/Suggestion-Movie";
import TrendingNow from "@/Components/Authed-Home/Trending-Now";
import NowPlaying from "@/Components/Authed-Home/Now-Playing";
import TopRated from "@/Components/Authed-Home/Top-Rated";
import Popular from "@/Components/Authed-Home/Popular";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {

    const session = await getSession(context);

    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const res = await fetch(`http://localhost:3000/api/getData`);
    const data = await res.json();

 
    return {
        props: {
            movies: data 
        }
    };
}


const Home = ({movies}) => {

    return(
        <div className="home-page-container">
            
            <Navbar />

            <div className="home-page-content">
                <SuggestionMovie movie={movies.suggestionMovie} />
                <TrendingNow movies={movies.trendingMovies} />
                <NowPlaying movies={movies.nowPlayingMovies}  />
                <TopRated movies={movies.topRatedMovies} />
                <Popular movies={movies.popularMovies} />
            </div>

        </div>
    )
}


export default Home;