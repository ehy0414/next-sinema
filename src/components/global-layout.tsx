import Link from "next/link";
import { ReactNode } from "react";

export default function GlobalLayout({children,} : { children: ReactNode;}) {

    return(
        <div className="bg-black text-white ">
            <div className="max-w-[800px] px-[20px] mx-auto min-h-[100vh]">
                <header className="text-[rgb(229,9,20)] text-[20px] py-[20px] ">
                <Link href={"/"}>ONEBITE CINEMA</Link>
                </header>
                <main>{children}</main>
            </div>
        </div>
    )
}