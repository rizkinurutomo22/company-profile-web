import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1>
        <Image
          src={"/letter-m_5040715.png"}
          alt="Mangabanana Logo"
          width={40}
          height={40}
          className="duration-100 ease-in hover:scale-110"
        />
      </h1>
    </Link>
  );
}
