import SearchAbleLayout from "@/components/searchable-latout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
    </>
  );
}

Home.getLayout = (page:ReactNode) => {
  return <SearchAbleLayout>{page}</SearchAbleLayout>
}