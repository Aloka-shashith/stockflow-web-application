import React from "react";
import TopNav from "../components/top-nav/TopNav";

function AuthLayout({ children }) {
  return (
    <div className="bg-orange-200">
      <TopNav />
      <div className="flex min-h-screen items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
