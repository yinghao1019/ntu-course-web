import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <header className="w-full h-12 text-center py-10 bg-neutral-100">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between h-12">
                        <div className="logo">
                            <Link href="/" className="text-2xl font-bold">Travel</Link>
                        </div>
                        <nav>
                            <ul className="flex gap-4">
                                <li><Link href={"/"} className="text-blue-500 hover:text-blue-700">首頁</Link></li>
                                <li><Link href={"/faq"} className="text-blue-500 hover:text-blue-700">常見問題</Link></li>
                                <li><Link href={"/about"} className="text-blue-500 hover:text-blue-700">關於本站</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    )
}