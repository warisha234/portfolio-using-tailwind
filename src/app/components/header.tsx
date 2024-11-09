import Link from "next/link";
import Image from "next/image";
import Logo from "../public/maiiiin.webp";

export default function Header() {
    return (
        <div>
            <div className="bg-gradient-to-r from-purple-900 to-pink-400 text-pink-200 flex font-bold font-sans justify-between items-center p-2">
                <div className="logo flex items-center">
                    <Image src={Logo} alt="logo" width={80} height={60} />
                    <h1 className="ml-4 text-xl">Warisha Turab</h1>
                </div>
                <h1 id="navbar-hading" className="text-xl text-gray-900 italic font-semibold text-shadow-lg">
                    Consistency leads to success
                </h1>
                <ul className="flex justify-center items-center gap-6">
                    <li className="hover:bg-white/10 rounded px-2 py-1">
                    <Link href={"/"}>
                        <li>Home</li>
                    </Link>

                    </li>
                    <li className="hover:bg-white/10 rounded px-2 py-1">
                    <Link href={"/about-me"}>
                        <li>About me</li>
                    </Link>
                    </li>
                   
                    <li className="hover:bg-white/10 rounded px-2 py-1">
                    <Link href={"/contact-us"}>
                        <li>Contact me</li>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
