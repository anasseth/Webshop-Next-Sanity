import Navbar from "@/components/ui/navbar";

export default function StoreLayout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
