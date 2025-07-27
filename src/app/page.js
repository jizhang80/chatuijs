import Image from "next/image";
import MainPage from "@/components/MainPage";
import Sidebar from "@/components/Sidebar";
import { UserProvider } from "@/providers/UserContext";

export default function Home() {
  return (
    <UserProvider>
      <MainPage />
    </UserProvider>
  );
}
