import { AreaLogo } from "./Logo.styled";
import logoSpotify from "../../../assets/icons/logo-spotify.png";

export default function Logo() {
  return (
    <AreaLogo>
      <a href="">
        <img src={logoSpotify} alt="Logo" />
      </a>
    </AreaLogo>
  );
}
