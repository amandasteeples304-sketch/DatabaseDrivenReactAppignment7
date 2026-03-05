import { Link } from "react-router";
export default function Header() {
  return (
    <div className="text-2xl font-mono text-blue-800 bg-cyan-200">
      <h2>Knitting Fundamentals</h2>
      <nav className="flex flex-row gap-5">
        <Link to="/">Home</Link>
        <Link to="/ply">Ply of Yarn</Link>
        <Link to="/needletype">Types of different knitting needles</Link>
        <Link to="needlesizes">Different sizes of knitting needles</Link>
      </nav>
    </div>
  );
}
