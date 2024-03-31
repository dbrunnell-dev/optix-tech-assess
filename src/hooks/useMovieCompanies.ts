import { useState, useEffect } from 'react';
import { getMovieCompanies } from '../API/getMovieCompanies';
import { MovieCompanies } from '../types';

export const useMovieCompanies = (): [MovieCompanies[], boolean, Error | null] => {
    const [movieCompanies, setMovieCompanies] = useState<MovieCompanies[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchMovieCompanies = async () => {
        setLoading(true);
        try {
          const movieCompanyData = await getMovieCompanies();
          setMovieCompanies(movieCompanyData);
          setError(null);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMovieCompanies();
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return [movieCompanies, loading, error];
  };
