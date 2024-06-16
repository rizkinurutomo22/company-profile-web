import Image from "next/image";
import Link from "next/link";

export default function ProductsCardFull({ manga }) {
  const { title, author, artist, genre, demographic, published, image } =
    manga.fields;
  const id = manga.sys.id;

  return (
    <>
      <section className="mx-auto max-w-screen-xl">
        <div className="mx-8 mt-8 flex items-center justify-center gap-10 text-start">
          <div className="h-80 max-w-[360px] duration-150 ease-in-out hover:scale-110">
            <Image
              src={`https:${image.fields.file.url}`}
              alt="Manga Image"
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              className="h-full w-full rounded-xl object-contain shadow-lg shadow-cyan-300"
            />
          </div>
          <div>
            <h2 className="mb-4 text-4xl font-semibold">{title}</h2>
            <h3 className="text-lg font-light">
              Author: {author}
              <br />
              Artist: {artist}
              <br />
              Genre: {genre.join(", ")}
              <br />
              Demographic: {demographic}
              <br />
              Published: {published}
            </h3>
            <div className="mt-8">
              <Link
                href={`/products/${id}`}
                className="rounded-md border-2 border-cyan-800 px-4 py-1 font-semibold duration-150 ease-in hover:bg-cyan-600 hover:text-white"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
