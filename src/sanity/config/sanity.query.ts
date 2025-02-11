import { groq } from "next-sanity";
import SanityClient from "./sanity.client";

export async function GetHeroImages() {
    return SanityClient.fetch(
        groq`
        *[_type=="heroImage"][0]{
            "imageOne": imageOne.asset->url,
            "imageTwo": imageTwo.asset->url
        }
        `
    )
}

export async function GetProductBySlug (slug: string) {
    return SanityClient.fetch(
        groq`
        [_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }
        `
    )
}

export async function GetNewestProducts() {
    return SanityClient.fetch(
        groq`
        *[_type=="product"]{
            _id,
            name,
            "slug":slug.current,
            price,
            "categoryName": category->name,
            "imageURL":images[0].asset->url
        }
        `
    )
}