import { Route, Routes } from "react-router";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="w-full mx-64 mt-5">
      <Header />
      <Routes>
        <Route path="/" element={<p>This is the home page</p>} />
        <Route path="/ply" element={<p>Ply of Yarn</p>} />
        <Route
          path="/needletype"
          element={<p>Different types of knitting needles</p>}
        />
        <Route
          path="needlesize"
          element={<p>Different sizes of knitting needles</p>}
        />
      </Routes>
    </div>
  );
}
