import { contentfulClient } from "@/helpers/contentful-client";
import ProductsCardFull from "@/components/ProductsCardFull";

async function getMangas() {
  try {
    const client = contentfulClient();
    const res = await client.getEntries();
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Products() {
  const mangas = await getMangas();

  return (
    <>
      <h2 className="mt-6 text-3xl font-semibold text-cyan-700">Products</h2>
      <div>
        <ul className="flex flex-wrap items-center gap-y-5">
          {mangas.map((manga) => (
            <ProductsCardFull key={manga.sys.id} manga={manga} />
          ))}
        </ul>
      </div>
    </>
  );
}
