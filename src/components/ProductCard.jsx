import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ manga }) {
  const { title, genre, demographic, image } = manga.fields;
  const id = manga.sys.id;

  return (
    <div className="mx-20 flex min-w-[310px] flex-1 items-center justify-start gap-3 md:mx-0 md:justify-center">
      <div className="flex h-80 duration-150 ease-in-out hover:scale-105">
        <Image
          src={`https:${image.fields.file.url}`}
          alt="Manga Image"
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
          className="h-full w-full rounded-xl object-contain shadow-lg shadow-cyan-300"
        />
      </div>
      <div className="gap-y-5 text-left">
        <h4 className="text-2xl font-bold">{title}</h4>
        <h5 className="my-2 font-semibold">
          Genre
          <br />
          <span className="font-light">{genre.join(", ")}</span>
        </h5>
        <h5 className="font-semilight mb-4">{demographic}</h5>

        <Link
          href={`/products/${id}`}
          className="rounded-md border-2 border-cyan-800 px-4 py-1 font-semibold duration-150 ease-in hover:bg-cyan-600 hover:text-white"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
