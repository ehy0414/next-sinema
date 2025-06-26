import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

export default function SearchAbleLayout({
    children,
}:{
    children:ReactNode
}){
    const [search,setSearch] = useState("");
    const router = useRouter();

    const q = router.query.q as string;

    useEffect(() => {
        setSearch(q || "");
    }, [q]);

    const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmit = () => {
        if(!search || q === search) return;
        router.push(`/search?q=${search}`);
    };

    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            onSubmit();
        }
    }

    return(
        <div className="">
            <div className="flex items-center gap-4">
                <input  className="bg-black border-[rgb(80,80,80)] border-[1px] p-[12px] w-[670px] text-[12px] rounded-lg"
                        value={search} 
                        onChange={onChangeSearch} 
                        placeholder="검색어를 입력하세요 ..."
                        onKeyDown={onKeyDown}
                />
                <button className="rounded-lg bg-[rgb(80,80,80)] py-[12px] px-[24px] text-[12px]"
                        onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    )
}