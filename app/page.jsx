import Main from "@/component/main";
import Sidebarcomponent from "@/component/sidebar";
import React from "react";

export default function Page() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebarcomponent />
      <Main />
    </div>
  );
}
