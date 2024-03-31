import Typography from "@mui/material/Typography";
import "./MovieCounter.css";

type Props = {
  count: number;
};

export const MovieCounter: React.FC<Props> = ({ count }) => {
  return (
    <div className="MoviesCounterDisplayContainer">
      <Typography variant="body1" className="MoviesCounterDisplayText">
        Total movies displayed: {count}
      </Typography>
    </div>
  );
};
