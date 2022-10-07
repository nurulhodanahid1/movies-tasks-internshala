import { useSelector } from "react-redux";
import SearchedMoviesGrid from "../components/grid/SearchedMoviesGrid";
import { useGetSearchedMoviesQuery } from "../features/api/apiSlice";
import Pagination from "../components/ui/Pagination";

export default function SearchedMovies() {
    const { search, page } = useSelector(state => state.filters);
    const { data } = useGetSearchedMoviesQuery({ search, page });
    return (
        <>
            <SearchedMoviesGrid />
            {
                data?.data?.total_pages && <Pagination totalPages={data.data.total_pages} />
            }
        </>
    );
}