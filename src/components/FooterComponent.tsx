// Footer.tsx

type FooterLink = {
  title: string;
  href: string;
};

export default function Footer({ links }: { links: FooterLink[] }) {
  return (
    <div className="flex flex-col md:flex-row justify-center px-8 py-6 bg-white shadow-t-md gap-y-4">

      <ul className="flex flex-wrap justify-center space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-gray-800 hover:text-blue-600 transition"
              target="blank"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
