import { Link } from "react-router";
export default function NeedleTypeCard({ name, description, image, id }) {
  console.log(image);
  return (
    <>
      <Link to={`/needletype/${id}`} />
      <div className="relative grid h-160 w-full max-w-md flex-col items-end justify-center overflow-hidden rounded-xl bg-cyan-200 bg-clip-border text-center">
        <div
          className={`absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-[url('${image}')] bg-cover bg-clip-border bg-center text-white shadow-none`}
        >
          <div className="absolute inset-0 w-full h-full bg-linear-to-t from-cyan-300/80 via-cyan-200/50"></div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12">
          <h2 className="mb-6 block font-sans text-4xl font-medium leading-normal tracking-normal text-blue-800 antialiased">
            {name}
          </h2>
          <div>
            <h1 className="mb-6 block font-sans text-4xl font-medium leading-normal tracking-normal text-white antialiased">
              {description}
            </h1>
            <img src={image} />
          </div>
        </div>
      </div>
    </>
  );
}
