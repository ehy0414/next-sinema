import SearchAbleLayout from "@/components/searchable-latout";
import { useRouter } from "next/router" //Page Router 설정
import { ReactNode } from "react";

export default function Page() {

    const router = useRouter();

    const { q } = router.query; // 구조분해할당 방식
    // const q = router.query.q; 방법 2

    return <h1>{q}</h1>
}

Page.getLayout = (page:ReactNode) => {
    return <SearchAbleLayout>{page}</SearchAbleLayout>
}