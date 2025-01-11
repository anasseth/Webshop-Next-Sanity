"use client";
import SanityConfig from "@/sanity/config/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function SanityStudio() {
  return <NextStudio config={SanityConfig} />;
}
