/* eslint-disable no-useless-catch */
import { Movie } from "../types";

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("http://localhost:3000/movies");
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const movieData: Movie[] = await response.json();
    return movieData;
  } catch (error) {
    throw error;
  }
};
