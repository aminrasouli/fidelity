import { QueryObserverOptions } from 'react-query/types/core/types';

export interface UseMovies extends QueryObserverOptions {
	query: string;
	page?: number;
}

export interface MoviesResponseResult {
	id: number;
	title: string;
	overview: string;
	original_language: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
	vote_count: number;
	popularity: number;
	adult: boolean;
}

export interface MoviesResponse {
	results: MoviesResponseResult[];
	total_results?: number;
	page?: number;
	total_pages?: number;
}

export interface MoviesResponseResultTransformed {
	id: number;
	title: string;
	poster?: string | null;
	year?: number | null;
	date: string;
	overview: string;
	lang: string;
	voteAverage: number;
	voteCount: number;
	popularity: number;
	adult: boolean;
}

export interface MoviesResponseTransformed {
	items: MoviesResponseResultTransformed[];
	meta?: {
		page?: number;
		totalCount?: number;
		totalPage?: number;
	};
}
