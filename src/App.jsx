import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { PageSkeleton } from "./components/ui/Skeleton";

/** Lazy imports για να δείξουμε όμορφο skeleton μέχρι να φορτώσουν */
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const UserPage = lazy(() => import("./pages/User"));
const PharmacyPage = lazy(() => import("./pages/Pharmacy"));
const AdminPage = lazy(() => import("./pages/Admin"));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <Suspense fallback={<PageSkeleton />}>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/pharmacy" element={<PharmacyPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}
