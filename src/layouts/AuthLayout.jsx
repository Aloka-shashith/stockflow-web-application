import React from "react";

function AuthLayout({ children }) {
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
