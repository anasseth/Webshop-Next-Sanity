import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GetNewestProducts } from "@/sanity/config/sanity.query";
import { Button } from "./button";

export default async function NewestCollection() {
  const latestProductData: any = await GetNewestProducts();

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Newest Products
            </h2>
            <Link
              href="/all"
              className="text-primary flex items-center gap-x-1"
            >
              See All{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {latestProductData.map((product: any) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageURL}
                    alt="Product Image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
                <Button
                  className="snipcart-add-item"
                  data-item-id={product._id}
                  data-item-price={product.price}
                  // data-item-url={`/product/${product.slug}`}
                  data-item-description={product.description}
                  data-item-image={product.imageURL}
                  data-item-name={product.name}
                >
                  Add to cart
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
