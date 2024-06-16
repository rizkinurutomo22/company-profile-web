import Link from "next/link";

export default function SeeMore({ href }) {
  return (
    <div className="mt-4">
      <Link
        href={href}
        className="text-sky-500 underline duration-100 ease-in hover:text-sky-800"
      >
        See more...
      </Link>
    </div>
  );
}
