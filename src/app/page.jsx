import Image from "next/image";

import ProductCard from "@/components/ProductCard";
import SeeMore from "@/components/SeeMore";
import TestimonyCard from "@/components/TestimonyCard";
import { contentfulClient } from "@/helpers/contentful-client";

async function getMangas() {
  try {
    const client = contentfulClient();
    const res = await client.getEntries({ content_type: "mangaBlog" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

async function getManga() {
  try {
    const client = contentfulClient();
    const res = await client.getEntry({ content_type: "mangaBlog" });
    return res;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const mangas = await getMangas();
  const mangaTestimonies = await getManga();

  const mangaTestimony = mangaTestimonies.fields.testimony;

  return (
    <>
      <section className="mx-auto max-w-screen-xl">
        <div className="h-[360px]">
          <Image
            src={"/j1QB9M.jpg"}
            alt="Blue Sky"
            width={3840}
            height={2160}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-0 top-[53px] h-[360px] w-full bg-slate-300/30">
          <h2 className="mt-32 text-5xl font-extrabold text-cyan-900">
            Mangabanana
            <br />
            <span className="text-3xl font-normal">
              Ink, Dreams, & Endless Adventures 📚
            </span>
          </h2>
        </div>
      </section>
      <section className="mx-auto my-6 max-w-screen-xl border-b-2 border-b-sky-200 pb-4">
        <div className="mx-auto max-w-[960px]">
          <h3 className="mb-4 text-3xl font-semibold text-cyan-700">
            Company Overview
          </h3>
          <p>
            Mangabanana specializes in selling manga, catering to enthusiasts of
            Japanese comic books and graphic novels. <br />
            The company operates through both physical retail outlets and an
            online platform, ensuring broad accessibility and convenience for
            its customers.
            <br />
            Mangabanana aims to be a one-stop-shop for all manga needs,
            distinguished by its comprehensive catalog, customer-centric
            approach, and community engagement. <br />
            The company positions itself as a cultural hub for manga lovers,
            providing not just products but also an immersive experience.
          </p>
          <SeeMore href={"/about"} />
        </div>
      </section>
      <section className="mx-auto my-6 max-w-screen-xl border-b-2 border-b-sky-200 pb-4">
        <h3 className="mb-4 text-3xl font-semibold text-cyan-700">Products</h3>
        <div className="flex flex-wrap gap-x-6 gap-y-6">
          {mangas.map((manga) => (
            <ProductCard key={manga.sys.id} manga={manga} />
          ))}
        </div>
        <SeeMore href={"/products"} />
      </section>
      <section className="max-w-screen-xl">
        <h3 className="mb-4 text-3xl font-semibold text-cyan-700">Testimony</h3>
        <div className="mx-10 flex flex-wrap gap-10 md:flex-nowrap">
          {mangaTestimony.map((testimony, index) => (
            <TestimonyCard key={index} testimony={testimony} />
          ))}
        </div>
      </section>
    </>
  );
}
