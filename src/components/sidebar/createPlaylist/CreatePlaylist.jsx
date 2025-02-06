import {
  SectionPlaylist,
  PlaylistContent,
  Text,
  PlaylistButton,
} from "./CreatePlaylist.styled";

export default function CreatePlaylist() {
  return (
    <SectionPlaylist>
      <PlaylistContent>
        <Text className="title">Crie sua primeira playlist</Text>
        <Text className="subtitle">É fácil, vamos te ajudar.</Text>
        <PlaylistButton>
          <span>Criar playlist</span>
        </PlaylistButton>
      </PlaylistContent>
    </SectionPlaylist>
  );
}
