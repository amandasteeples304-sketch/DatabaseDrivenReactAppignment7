import { useState, useEffect } from "react";

export default function NeedleSizesForm() {
  const [sizes, setSizes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState("");
  const [formData, setFormData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const rest = await fetch("http://localhost:5173/needlesizes");
      setSizes;
      await rest.json();
    }
    fetchData();
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData, selectedSizes);
    const needleSizesRes = await fetch("http://localhost:5173/needlesizes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const newNeedleSize = await needleSizesRes.json();
    console.log(newNeedleSize[0]);

    await fetch("http://localhost:5173/needlesizes/${newNeedleSize[0].id}", {
      method: "POST",
    });
  }

  return (
    <form
      className="flex flex-col justify-center items-center gap-2 bg-amber-200 p-5 max-w-[50vw]"
      onSubmit={handleSubmit}
    >
      <label htmlFor="">Size</label>
      <input
        name="size"
        onChange={handleChange}
        required
        className="bg-white text-black"
      />
      <label htmlFor="">ideal use</label>
      <input
        name="ideal use"
        onChange={handleChange}
        required
        className="bg-white text-black"
      />
      <button type="submit" className="border-4 w-50">
        Submit new needle size{" "}
      </button>
    </form>
  );
}
