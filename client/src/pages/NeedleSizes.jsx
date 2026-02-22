import { useState, useEffect } from "react";
import NeedleSizesCard from "../components/NeedleSizesCard";
export default function NeedleSizes() {
  const [needleSizes, setNeedleSizes] = useState([]);

  console.log(needleSizes);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/needlesizes");
      const data = await res.json();
      setNeedleSizes(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Needle Sizes</h2>
      <div className="flex flex-row flex-wrap gap-10">
        {needleSizes.length > 0 ? (
          needleSizes.map((needleSizes) => (
            <NeedleSizesCard
              name={needleSizes.name}
              description={needleSizes.description}
              id={needleSizes.id}
              key={needleSizes.id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
