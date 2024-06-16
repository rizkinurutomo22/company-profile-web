import Image from "next/image";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import TestimonyCard from "@/components/TestimonyCard";
import { contentfulClient } from "@/helpers/contentful-client";

async function getManga(id) {
  try {
    const client = contentfulClient();
    const res = await client.getEntry(id);
    return res;
  } catch (error) {
    console.error(error);
  }
}

const options = {
  renderNode: {
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="mb-2">{children}</h4>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
};

export default async function Page({ params }) {
  const manga = await getManga(params.id);

  const {
    title,
    author,
    artist,
    genre,
    demographic,
    published,
    synopsis,
    background,
    image,
    testimony,
    price,
  } = manga.fields;

  return (
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
            <br />
            Price: ${price}
          </h3>
        </div>
      </div>
      <div className="mx-8 max-w-3xl sm:mx-auto">
        <div className="my-6">
          {documentToReactComponents(synopsis, options)}
        </div>
        <div>{documentToReactComponents(background, options)}</div>
      </div>
      <div className="mx-8 mt-8 flex flex-wrap gap-8 sm:flex-nowrap">
        {testimony.map((eachTestimony, index) => (
          <TestimonyCard key={index} testimony={eachTestimony} />
        ))}
      </div>
    </section>
  );
}
