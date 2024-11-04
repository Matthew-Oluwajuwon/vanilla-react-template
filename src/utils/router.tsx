import AppLayout from "@/components/Layout";
import { createBrowserRouter, Link } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-screen flex items-center justify-center bg-primary-bg">
        <Link to="/dashboard" className="text-[#FFFFFF]">Go to Dashboard</Link>
      </div>
    ),
  },
  {
    Component: AppLayout,
    children: [
      {
        path: "/dashboard",
        element: <div>Dashboard</div>,
      },
    ],
  },
]);
