import { Link, NavLink, Route, Routes } from "react-router-dom";

// use your existing pages (keep names as in your tree)
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Pharmacy from "./pages/Pharmacy.jsx";
import Admin from "./pages/Admin.jsx";
import User from "./pages/User.jsx";

export default function App() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-gradient-to-r from-brand-500 to-teal-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-white/90 text-brand-600 grid place-items-center font-bold">
            M
          </div>
          <div className="font-semibold tracking-tight text-lg">MediRadar</div>
        </Link>

        <nav className="ml-auto flex items-center gap-1">
          <TopNav to="/">Home</TopNav>
          <TopNav to="/pharmacy">Pharmacy</TopNav>
          <TopNav to="/user">User</TopNav>
          <Link to="/login" className="px-3 py-2 rounded-xl text-sm hover:bg-white/10">
            Sign in
          </Link>
          <Link to="/user" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-white text-brand-700 hover:bg-white/90">
            Start
          </Link>
        </nav>
      </div>
    </header>
  );
}

function TopNav({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-xl text-sm ${isActive ? "bg-white/20" : "hover:bg-white/10"}`
      }
    >
      {children}
    </NavLink>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center gap-3">
        <span>© {new Date().getFullYear()} MediRadar</span>
        <span className="hidden sm:inline">•</span>
        <span className="text-slate-500">Find medicine availability fast.</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="inline-flex items-center rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">PWA</span>
          <span className="inline-flex items-center rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">Secure</span>
        </div>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white shadow-soft rounded-2xl border border-slate-100">
        <div className="p-6 sm:p-8 text-center">
          <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
          <p className="text-slate-600 mb-6">The page you’re looking for doesn’t exist.</p>
          <Link to="/" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
