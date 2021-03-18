import { MovieCard } from '../components/MovieCard';

interface ContentProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function Content(props: ContentProps) {
  return (
    <MovieCard
      title={props.title}
      poster={props.poster}
      runtime={props.runtime}
      rating={props.rating}
    />
  );
}