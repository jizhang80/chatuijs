"use client";

import MenuItem from "./MenuItem";
import ChatsList from "./ChatsList";

export default function SidebarBody() {
  return (
    <div className="pt-8 ps-2">
      <MenuItem logo="/icons8-write-24.png" name="New chat" />
      <MenuItem logo="/icons8-search-30.png" name="Search chats" />
      <MenuItem logo="/icons8-library-50.png" name="Library" />
      <ChatsList />
    </div>
  );
}
