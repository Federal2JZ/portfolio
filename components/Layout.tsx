import Link from "next/link";
export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className ="bg-gray-800 text-white p-4">
                <ul className="flex space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/experience">Experience</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
            <main className="flex-1">{children}</main>
            <footer className="bg-gray-900 text-white text-center p-2">
                © {new Date().getFullYear()} Darpan Vinodrai
            </footer>
        </div>
    );
}