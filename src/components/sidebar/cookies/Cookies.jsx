import { AreaCookies, CookiesLink } from "./Cookies.styled";
import { BiSolidCookie } from "react-icons/bi";

export default function Cookies() {
  return (
    <AreaCookies>
      <CookiesLink href="">
        <BiSolidCookie />
        Cookies
      </CookiesLink>
    </AreaCookies>
  );
}
