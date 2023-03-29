import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import cityApi from "./api/cityApi";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./features/auth/pages/LoginPage";
import { Admin } from "./components/layout";
import { PrivateRoute } from "./components/common";
function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => console.log(res));
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin></Admin>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
