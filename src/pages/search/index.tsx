import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter();

    const q = router.query.q;

    return(
        <>
            검색결과 : {q}
        </>
    )
}