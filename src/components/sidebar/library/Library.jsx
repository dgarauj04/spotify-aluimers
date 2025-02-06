import {
  LibraryContent,
  LibraryButton,
  SpanIcon,
  SpanTexto,
} from "./Library.styled";
import { FaBook } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function Biblioteca() {
  return (
    <LibraryContent>
      <LibraryButton>
        <SpanIcon>
          <FaBook />
        </SpanIcon>
        <SpanTexto>Sua biblioteca</SpanTexto>
      </LibraryButton>
      <SpanIcon className="fa-plus">
        <FaPlus />
      </SpanIcon>
    </LibraryContent>
  );
}
