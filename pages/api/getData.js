
    import { redirect } from "next/navigation";

    export default async function getData(req, res){

        const handleError = () => {
            redirect('/')
        }
        
        try {

            // Index [0]
            const promiseOfGettingSuggestionMovie = new Promise( async (resolve, reject) => {
                const fetchMoviesList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&sort_by=popularity.desc`);
                const dataOfMovies = await fetchMoviesList.json();
                if(fetchMoviesList.ok){
                    const getRandomIndex = Math.floor(Math.random() * dataOfMovies.results.length);
                    const pickingRandomMovie = dataOfMovies.results[getRandomIndex];
                    resolve(pickingRandomMovie)

                }else{
                    reject('An Error Occurred')
                }
            })
            
            // Index [1]
            const promiseOfGettingTrendingMovies = new Promise(async (resolve, reject) => {
                const fetchTrendingMovies = await fetch(`${process.env.NEXT_PUBLIC_API_URL}trending/movie/day?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
                const dataOfTrendingMovies = await fetchTrendingMovies.json();
                if(fetchTrendingMovies.ok){
                    resolve(dataOfTrendingMovies.results)
                }else{
                    reject('An Error Occurred')
                }
            })

            // Index [2]
            const promiseOfGettingNowPlayingMovies = new Promise(async (resolve, reject) => {
                const gettingNowPlayingMovies = await fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/now_playing?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
                const dataOfNowPlayingMovies = await gettingNowPlayingMovies.json();
                if(gettingNowPlayingMovies.ok){
                    resolve(dataOfNowPlayingMovies.results)
                }else{
                    reject('An Error Occurred')
                }
            })


            // Index [3]
            const promiseOfGettingTopRatedMovies = new Promise(async (resolve, reject) => {
                const gettingTopRatedMovies = await fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/top_rated?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
                const dataOfTopRatedMovies = await gettingTopRatedMovies.json();
                if(gettingTopRatedMovies.ok){
                    resolve(dataOfTopRatedMovies.results)
                }else{
                    reject('An Error Occurred')
                }
            })


            // Index [4]
            const promiseOfGettingPopularMovies = new Promise(async (resolve, reject) => {
                const gettingPopularMovies = await fetch(`${process.env.NEXT_PUBLIC_API_URL}movie/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
                const dataOfPopularMovies = await gettingPopularMovies.json();
                if(gettingPopularMovies.ok){
                    resolve(dataOfPopularMovies.results)
                }else{
                    reject('An Error Occurred')
                }
            })
            

            Promise.all([promiseOfGettingSuggestionMovie, promiseOfGettingTrendingMovies, promiseOfGettingNowPlayingMovies, promiseOfGettingTopRatedMovies, promiseOfGettingPopularMovies]).then((values) => {
                const result = {
                    suggestionMovie: values[0],
                    trendingMovies: values[1],
                    nowPlayingMovies: values[2],
                    topRatedMovies: values[3],
                    popularMovies: values[4]
                }

                res.status(200).send(result);
            }).catch((error) => {
                handleError()
            })
            
        } catch (error) {
            handleError()
        }

    }



export const config = {
    api: {
        externalResolver: true
    }
}