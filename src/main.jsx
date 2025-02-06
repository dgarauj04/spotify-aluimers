import React, { useState, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/globalStyles/GlobalStyle";
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const ErrorPage = lazy(() => import("./pages/errorPage/ErrorPage"));

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div>Carregando...</div>}></Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
