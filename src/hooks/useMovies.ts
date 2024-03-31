import { useState, useEffect } from 'react';
import { getMovies } from '../API/getMovies';
import { Movie } from '../types';

export const useMovies = (): [Movie[], boolean, Error | null] => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const movieData = await getMovies();
          setMovies(movieData);
          setError(null);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMovies();
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return [movies, loading, error];
  };
