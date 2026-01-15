"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    "/solutions": [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
    ],
    "/how-it-works": [
      { label: "Home", href: "/" },
      { label: "How It Works", href: "/how-it-works" },
    ],
    "/case-studies": [
      { label: "Home", href: "/" },
      { label: "Case Studies", href: "/case-studies" },
    ],
    "/about": [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ],
    "/contact": [
      { label: "Home", href: "/" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const breadcrumbs = breadcrumbMap[pathname] || [];

  if (breadcrumbs.length === 0) return null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://siyasphere.com${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="breadcrumb" className="mb-6">
        <ol className="flex flex-wrap gap-2 text-sm text-gray-400">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link href={item.href} className="text-primary-400 hover:text-primary-300">
                {item.label}
              </Link>
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
