import { useState } from "react";
import { Movie, MovieCompanies } from "../../types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./MovieTable.css";

type Props = {
  movies: Movie[];
  movieCompanies: MovieCompanies[];
  setSelectedMovie: (value: Movie) => void;
};

export const MovieTable: React.FC<Props> = ({
  movies,
  movieCompanies,
  setSelectedMovie,
}) => {
  const [rowSelected, setRowSelected] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleMovieSelection = (movie: Movie) => {
    setRowSelected(movie.id === rowSelected ? null : movie.id);
    setSelectedMovie(movie);
  };

  const sortedMovies = [...movies].sort((a, b) => {
    const avgRatingA =
      a.reviews.reduce((acc, cur) => acc + cur, 0) / a.reviews.length;
    const avgRatingB =
      b.reviews.reduce((acc, cur) => acc + cur, 0) / b.reviews.length;

    if (sortOrder === "asc") {
      return avgRatingA - avgRatingB;
    } else {
      return avgRatingB - avgRatingA;
    }
  });

  const handleSortByRating = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <TableContainer className="TableContainer">
      <Table className="Table">
        <TableHead>
          <TableRow>
            <TableCell className="TableHeadCell">Title</TableCell>
            <TableCell className="TableHeadCell" onClick={handleSortByRating}>
              Average Review
            </TableCell>
            <TableCell className="TableHeadCell">Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedMovies.map((movie: Movie) => (
            <TableRow
              key={movie.id}
              onClick={() => handleMovieSelection(movie)}
              className={rowSelected === movie.id ? "SelectedRow" : "TableRow"}
            >
              <TableCell className="TableCell TitleColumn">
                {movie.title}
              </TableCell>
              <TableCell className="TableCell AverageReviewColumn">
                {(
                  movie.reviews.reduce((acc, i) => acc + i, 0) /
                  movie.reviews.length
                ).toFixed(1)}
              </TableCell>
              <TableCell className="TableCell CompanyColumn">
                {
                  movieCompanies.find(
                    (company: MovieCompanies) =>
                      company.id === movie.filmCompanyId
                  )?.name
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
