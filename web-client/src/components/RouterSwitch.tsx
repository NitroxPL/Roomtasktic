import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
//import { useUserContext } from "src/context";
import { Home } from "src/views";

const RedirectToDefault = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);

  return null;
};

export const RouterSwitch = () => {
  return (
    <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path="*" element={<RedirectToDefault />} />
    </Routes>
  );
};
