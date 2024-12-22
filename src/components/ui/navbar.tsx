"use client";
import { navRoutes } from "@/constant/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <>
      <div className="mb-8 border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <Link href="/">
            <h1 className="sm:text-xl md:text-4xl font-bold">
              Elegant<span className="text-secondary"> Shop</span>
            </h1>
          </Link>

          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {navRoutes.map((route, idx) => (
              <div key={idx}>
                {pathName == route.href ? (
                  <Link
                    href={route.href}
                    className="text-lg font-semibold text-primary"
                  >
                    {route.name}
                  </Link>
                ) : (
                  <Link
                    href={route.href}
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  >
                    {route.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex divide-x border-r sm:border-l">
            <Button className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
              <ShoppingBag />
              <span className="hidden text-sx font-semibold text-gray-500 sm:block">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
