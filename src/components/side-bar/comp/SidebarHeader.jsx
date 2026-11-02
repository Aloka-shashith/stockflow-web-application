import React from "react";
import { BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SidebarHeader() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="flex hover:cursor-pointer pt-5 pb-5 items-center justify-center gap-1"
        onClick={() => navigate("/")}
      >
        <BarChart3 className="items-center justify-center size-9 p-2 text-white bg-orange-400 rounded-sm" />
        <p className="items-center justify-center text-2xl font-bold">
          StockFlow
        </p>
      </div>
    </div>
  );
}

export default SidebarHeader;
