import { AreaSidebar, SidebarNavigation, AreaLibrary } from "./Sidebar.styled";
import ItemsNavigation from "./itemsNavigation/ItemsNavigation";
import Library from "./library/Library";
import CreatePlaylist from "./createPlaylist/CreatePlaylist";
import Cookies from "./cookies/Cookies";
import Logo from "./logo/Logo";
import Language from "./language/Language";

export default function Sidebar() {
  return (
    <AreaSidebar>
      <SidebarNavigation>
        <Logo />
        <ItemsNavigation />
      </SidebarNavigation>

      <AreaLibrary>
        <Library />

        <CreatePlaylist />

        <Cookies />

        <Language />
      </AreaLibrary>
    </AreaSidebar>
  );
}
