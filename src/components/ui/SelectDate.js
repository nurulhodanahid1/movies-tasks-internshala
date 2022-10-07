import { useDispatch, useSelector } from "react-redux";
import { setYear } from "../../features/filterSlice";

export default function SelectDate() {
    const dispatch = useDispatch();
    const { year } = useSelector(state => state.filters);

    const fullYear = (new Date()).getFullYear();
    const years = Array.from(new Array(200), (val, index) => fullYear - index);

    return (
        <div className="flex justify-center mt-5">
            <select
                 value={year}
                 onChange={(e) => dispatch(setYear(e.target.value))}
                className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
            >
                {
                    years.map((year, index) => {
                        return <option key={`year${index}`} value={year}>{year}</option>
                    })
                }
            </select>
        </div>
    );
}