import SidebarHead from "./SidebarHead";
import SidebarBody from "./SidebarBody";

export default function Sidebar() {
  return (
    <div id="sidebar" className="w-64 bg-gray-100 h-screen p-2">
      <SidebarHead />
      <SidebarBody />
    </div>
  );
}
