import ButtonLogo from "./ButtonLogo";

export default function SidebarHead() {
  const ChatAILogo = "/ChatAI-s-logo.png";
  const SidebarLogo = "/icons8-sidebar-50.png";
  return (
    <div className="flex justify-between">
      <ButtonLogo logo={ChatAILogo} cursor="cursor-pointer" />
      <ButtonLogo logo={SidebarLogo} cursor="cursor-w-resize" />
    </div>
  );
}
