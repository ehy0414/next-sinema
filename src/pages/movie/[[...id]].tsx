import { useRouter } from "next/router"

export default function Page() {
    const router = useRouter();
    const id = router.query.id;

    return(
        <>
            {id} 영화 상세페이지
        </>
    )
}