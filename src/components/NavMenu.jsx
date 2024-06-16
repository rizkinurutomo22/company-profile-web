import Link from "next/link";

export default function NavMenu({ className }) {
  const pageMenus = [
    { id: 1, name: "About Us", link: "/about" },
    { id: 2, name: "Products", link: "/products" },
    { id: 3, name: "Teams", link: "/teams" },
  ];

  return (
    <nav>
      <ul className={className}>
        {pageMenus.map((menu) => (
          <li key={menu.id}>
            <Link
              href={menu.link}
              className="rounded-xl border-2 border-cyan-500 px-2 py-1 text-cyan-500 shadow-md shadow-cyan-700 duration-100 ease-in hover:bg-cyan-200 hover:text-white"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
