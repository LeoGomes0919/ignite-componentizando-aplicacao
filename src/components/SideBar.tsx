import { Button } from '../components/Button';

interface SideBarProps {
  handleClickButton(id: number): void;
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  return (
    <Button
      id={String(props.id)}
      title={props.title}
      iconName={props.name}
      onClick={() => props.handleClickButton(props.id)}
      selected={props.selectedGenreId === props.id}
    />
  );
}