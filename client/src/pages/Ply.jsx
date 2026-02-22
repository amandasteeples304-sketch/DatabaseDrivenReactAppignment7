import { useState, useEffect } from "react";
import PlyCard from "../components/PlyCard";
export default function Ply() {
  const [ply, setPly] = useState([]);

  console.log(ply);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/ply");
      const data = await res.json();
      setPly(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Ply</h2>
      <div className="flex flex-row flex-wrap gap-10">
        {ply.length > 0 ? (
          ply.map((ply) => (
            <PlyCard
              name={ply.name}
              description={ply.description}
              image={ply.image}
              id={ply.id}
              key={ply.id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
