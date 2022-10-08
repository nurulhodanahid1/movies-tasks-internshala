import { useSelector } from "react-redux";
import MovieGrid from "../components/grid/MovieGrid";
import Pagination from "../components/ui/Pagination";
import SelectDate from "../components/ui/SelectDate";
import { useGetMoviesQuery } from "../features/api/apiSlice";

export default function Home() {
    const { year, page, search } = useSelector(state => state.filters);
    const { data } = useGetMoviesQuery({ year, page, search });
    return (
        <>
            <SelectDate />
            <MovieGrid />
            {
                data?.data?.total_pages && <Pagination totalPages={500} />
            }
        </>
    );
}