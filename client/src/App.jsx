import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Ply from "./pages/Ply";
import NeedleSizes from "./pages/NeedleSizes";
import NeedleType from "./pages/NeedleType";
export default function App() {
  return (
    <div className="w-full mx-64 mt-5">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ply" element={<Ply />} />
        <Route path="/needletype" element={<NeedleType />} />
        <Route path="needlesize" element={<NeedleSizes />} />
      </Routes>
    </div>
  );
}
