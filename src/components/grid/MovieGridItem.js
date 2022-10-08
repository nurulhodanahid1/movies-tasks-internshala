import { Link } from "react-router-dom";

export default function MovieGridItem({ movie = {} }) {
    const { id, poster_path, title, release_date } = movie;

    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
            <Link to={`movies/${id}`}>
                <div className="w-full flex flex-col">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                        className="w-full h-auto"
                        alt={title}
                    />
                    <div className="flex flex-row mt-2 gap-2">
                        <div clas="flex flex-col">
                            <p className="text-slate-800 text-sm font-semibold">
                                {title} ({release_date})
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}