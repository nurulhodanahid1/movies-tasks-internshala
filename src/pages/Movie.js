import { useNavigate, useParams } from "react-router-dom";
import Error from "../components/ui/Error";
import Loader from "../components/ui/Loader";
import { useGetMovieQuery } from "../features/api/apiSlice";

export default function Movie() {
    const { movieId } = useParams();
    const { data, isLoading, isError } = useGetMovieQuery({ movieId });

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    const { poster_path, overview, title, spoken_languages, release_date, vote_average, vote_count, genres } = data?.data || {};

    // decide what to render
    let content = null;
    if (isLoading) content = <Loader message="Loading..." />

    if (!isLoading && isError)
        content = <Error message="There was an error occured!!" />

    if (!isLoading && !isError && !data?.data?.id) {
        content = <Error message="No vidoes found!" />
    }

    if (!isLoading && !isError && data?.data?.id) {
        content =
            <>
                <div className='w-full text-gray-600 bg-slate-900'>
                    <div className='w-full h-[175vh] relative'>
                        <div className='absolute top-0 left-0 w-full h-[175vh] bg-black/70 z-10' />
                        <img
                            className='absolute w-full h-[175vh] z-1'
                            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                            alt={title}
                        />
                        <div className='absolute top-[47%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
                            <h2 className='py-2 text-green-500 md:text-6xl text-4xl font-bold'>{title}</h2>
                            <h3 className="text-slate-200 md:text-2xl text-xl font-semibold pb-2"><span className="text-blue-500">Released date:</span> {release_date}</h3>
                            <h3 className="text-slate-200 md:text-2xl text-xl font-semibold pb-2"><span className="text-blue-500">IMDB:</span> {vote_average} ({vote_count} votes)</h3>
                            {
                                spoken_languages && <ul className="text-slate-200 md:text-2xl text-xl font-semibold pb-2">
                                    <span className="text-blue-500">Languages:</span>
                                    {
                                        spoken_languages.map((lan, index) => <li className="inline-block px-1" key={index}>{lan.name},</li>)
                                    }
                                </ul>
                            }
                            {
                                genres && <ul className="text-slate-200 md:text-2xl text-xl font-semibold pb-2">
                                    <span className="text-blue-500">Genres:</span>
                                    {
                                        genres.map((gen, index) => <li className="inline-block px-1" key={index}>{gen.name},</li>)
                                    }
                                </ul>
                            }
                            <h3 className="text-slate-200 md:text-2xl text-xl font-semibold pb-2"><span className="text-blue-500">Plot:</span> {overview}</h3>
                            <button className="mt-5 text-slate-100 bg-blue-500 px-5 py-2 rounded-full font-bold hover:bg-blue-600">Download</button>
                        </div>
                    </div>
                </div>
                <button onClick={goBack}
                    className="underline md:ml-4 mt-4 ml-2 text-slate-900 text-2xl font-semibold">
                    Go Back
                </button>
            </>
    }

    return (
        <section className="pb-20">
            <div className="mx-auto max-w-full pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    );
}