import React from "react";
import Main from "@/component/main";
import Sidebarcomponent from "@/component/sidebar";
export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebarcomponent />
      <Main />
    </div>
  );
}
