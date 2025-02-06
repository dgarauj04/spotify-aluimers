import { IoGlobeSharp } from "react-icons/io5";
import { AreaLanguage, LanguageButton, LanguageSpan } from "./Language.styled";

export default function Language() {
  return (
    <AreaLanguage>
      <LanguageButton>
        <IoGlobeSharp />
        <LanguageSpan>Português do Brasil</LanguageSpan>
      </LanguageButton>
    </AreaLanguage>
  );
}
