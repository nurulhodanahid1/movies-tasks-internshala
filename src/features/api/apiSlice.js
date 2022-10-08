import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: "https://movie-task.vercel.app/api"
	}),
	tagTypes: ['movies', 'movie', 'seaerchd'],
	endpoints: (builder) => ({

		getMovies: builder.query({
			query: ({ year, page }) => {
				let queryString = "";
				if (page) queryString += `page=${page}`
				return {
					url: `/popular?${queryString}`
				};

			},
			providesTags: (result, error, arg) => [{ type: "movies", id: arg.page }],
		}),

		getMovie: builder.query({
			query: ({ movieId }) => `/movie?movieId=${movieId}`,
			providesTags: (result, error, arg) => [{ type: "movie", id: arg.movieId }],
		}),

		getSearchedMovies: builder.query({
			query: ({ search, page }) => {
				let queryString = "";
				if(page) queryString += `page=${page}`;
				if(search) queryString += `&query=${search}`;
				return {
					url: `/search?${queryString}`
				};

			},
			providesTags: (result, error, arg) =>  [{ type: "searched", id: arg.page }]
		}),

	})
})

export const {
	useGetMoviesQuery,
	useGetMovieQuery,
	useGetSearchedMoviesQuery
} = apiSlice