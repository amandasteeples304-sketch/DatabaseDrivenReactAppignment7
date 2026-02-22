import { useState, useEffect } from "react";
import NeedleTypeCard from "../components/NeedleTypeCard";
export default function NeedleType() {
  const [needleType, setNeedleType] = useState([]);

  console.log(needleType);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/needletype");
      const data = await res.json();
      setNeedleType(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Needle Type</h2>
      <div className="flex flex-row flex-wrap gap-10">
        {needleType.length > 0 ? (
          needleType.map((needleType) => (
            <NeedleTypeCard
              name={needleType.name}
              description={needleType.description}
              image={needleType.image}
              id={needleType.id}
              key={needleType.id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
