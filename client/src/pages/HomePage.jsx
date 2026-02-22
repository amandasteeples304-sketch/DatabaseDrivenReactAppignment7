import { Link } from "react-router";

export default function HomePage() {
  return (
    <div>
      <main>
        <section>
          <h2 className="text-3xl m-10">
            Which ply of yarn with which needle with which size?
          </h2>
          <p>
            Come with us as we reveal that nothing is as confusing as it first
            seems.
          </p>
        </section>

        <section>
          <h2 className="text-3xl m-10">What is ply?</h2>
          <p>
            Ply is how many individual strands have been twisted together to
            create the finished strand.
          </p>
          <Link to="/ply">Learn about the different types of ply</Link>
        </section>

        <section>
          <h2 className="text-3xl m-10">What sized knitting needle?</h2>
          <p>
            Knitting needles come in a variety of width sizes and lengths. The
            length is personal preference, I always buy longer so I can use them
            with different projects. But the width, that is what can make or
            break a piece.
          </p>
          <Link to="/needlesizes">
            Learn about which size is best for which ply
          </Link>
        </section>

        <section>
          <h2 className="text-3xl m-10">What style of knitting needle?</h2>
          <p>
            Knitting needles come in a variety of styles for different projects.
          </p>
          <Link to="/needletypes">
            Learn about which types work well for what project, ply, and size
          </Link>
        </section>

        <section>
          <h2>Add to our database</h2>
          <p>Are we missing any ply, needle sizes, or needle types?</p>
          <Link to=""></Link>
        </section>
      </main>

      <footer>
        <p>Knitting Fundamentals</p>
      </footer>
    </div>
  );
}
