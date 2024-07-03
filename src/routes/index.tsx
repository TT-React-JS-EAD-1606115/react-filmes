import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../page/Home";
import { Details } from "../page/Details";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
