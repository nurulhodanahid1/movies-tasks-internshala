import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../features/api/apiSlice";
import Loader from "../ui/Loader";
import Error from "../ui/Error";
import MovieGridItem from "./MovieGridItem";

export default function VideGrid() {
    const { year, rating, page, search } = useSelector(state => state.filters);
    const { data, isLoading, isError } = useGetMoviesQuery({ year, rating, page, search });

    // decide what to render
    let content = null;

    if (isLoading) {
        content = <Loader message="Loading..." />
    }

    if (!isLoading && isError) {
        content = <Error message="There was an error occured!" />;
    }

    if (!isLoading && !isError && data?.data?.results.length === 0) {
        content = <Error message="No Movies found!" />;
    }

    if (!isLoading && !isError && data?.data?.results.length > 0) {
        content = data.data.results.map((movie) => <MovieGridItem key={movie.id} movie={movie} />);
    }


    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {content}
                </div>
            </section>
        </section>
    );
}