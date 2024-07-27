import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CetiesProvider } from "./Contexts/CetiesContext";
import { AuthProvider } from "./Contexts/fakeAuthContext";
import ProtectedRout from "./pages/ProtectedRout";
import { lazy, Suspense } from "react";
import "./App.css";

import CityList from "./Component/CityList";
import CountryList from "./Component/CountryList";
import City from "./Component/City";
import Form from "./Component/Form";
import FullSpinner from "./Component/FullSpinner";

const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <AuthProvider>
      <CetiesProvider>
        <BrowserRouter>
          <Suspense fallback={<FullSpinner />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Notfound />} />
              <Route
                path="app"
                element={
                  <ProtectedRout>
                    {" "}
                    <AppLayout />{" "}
                  </ProtectedRout>
                }
              >
                <Route index element={<Navigate replace to="ceties" />} />
                <Route path="ceties" element={<CityList />} />
                <Route path="ceties/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CetiesProvider>
    </AuthProvider>
  );
}

export default App;
