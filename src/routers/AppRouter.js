import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistroUsuarios from "../components/RegistroUsuarios";
import Login from "../components/Login";
import { PanelRutasPrivadas } from "./PanelRutasPrivadas";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // console.log(user);
      setUser(user);
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/registro"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <RegistroUsuarios />
            </PublicRoute>
          }
        />
        <Route
          path="/iniciarsesion"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <PanelRutasPrivadas user={user} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
