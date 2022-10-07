import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch, setPage } from "../../features/filterSlice";

export default function Search() {
    const dispatch = useDispatch();
    const { search } = useSelector(state => state.filters);
    const [input, setInput] = useState(search);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setPage(1));
        dispatch(setSearch(input));
        navigate("/searched");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </form>
    );
}