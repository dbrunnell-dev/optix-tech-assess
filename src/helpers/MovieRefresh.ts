import { useEffect } from "react";

type Props = {
  refreshInterval: number;
  onRefresh: () => void;
};

export const MovieRefresh: React.FC<Props> = ({
  refreshInterval,
  onRefresh,
}) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      onRefresh();

      // extension for if we wanted to refresh both. CON - Coupling together
      //   const intervalId = setInterval(() => {
      //     onRefresh.forEach(refreshFunc => refreshFunc());
      //   }, refreshInterval);
    }, refreshInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [onRefresh, refreshInterval]);
  return null;
};
