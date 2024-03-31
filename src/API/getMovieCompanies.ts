/* eslint-disable no-useless-catch */
import { MovieCompanies } from "../types";

export const getMovieCompanies = async (): Promise<MovieCompanies[]> => {
  try {
    const response = await fetch("http://localhost:3000/movieCompanies");
    if (!response.ok) {
      throw new Error("Failed to fetch movies companies");
    }
    const movieCompanyData: MovieCompanies[] = await response.json();
    return movieCompanyData;
  } catch (error) {
    throw error;
  }
};
