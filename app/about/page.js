import Link from "next/link"

export default function About() {
    return (
        <>
            <header className="text-center py-10 bg-neutral-100">
                <h2 className="font-bold text-2xl">關於本站</h2>
                <ul>
                    <li><Link href={"/"} className="text-blue-500">回到首頁</Link></li>
                </ul>
            </header>

        </>

    )
}

