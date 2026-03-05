import { Link } from "react-router";
export default function PlyCard({ name, description, image, id }) {
  console.log(image);
  return (
    <>
      <Link to={`/ply/${id}`} />
      <div class="relative grid h-160 w-full max-w-md flex-col items-end justify-center overflow-hidden rounded-xl bg-cyan-200 bg-clip-border text-center">
        <div
          class={`absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent bg-[url('${image}')] bg-cover bg-clip-border bg-center text-cyan-300 shadow-none`}
        >
          <div class="absolute inset-0 w-full h-full bg-linear-to-t from-cyan-300/80 via-cyan-200/50"></div>
        </div>
        <div class="relative p-6 px-6 py-14 md:px-12">
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-normal tracking-normal text-blue-800 antialiased">
            {name}
          </h2>
          <div>
            <h1 class="mb-6 block font-sans text-4xl font-medium leading-normal tracking-normal text-blue-800 antialiased">
              {description}
            </h1>
            <img src={image} />
          </div>
        </div>
      </div>
    </>
  );
}
