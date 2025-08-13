// components/Layout.tsx
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* iOS-style centered nav */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container h-14 flex items-center justify-center">
          <div className="flex space-x-8 text-gray-700 text-sm font-medium">
            <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="hover:text-blue-500 transition-colors">
              Projects
            </Link>
            <Link href="/experience" className="hover:text-blue-500 transition-colors">
              Experience
            </Link>
            <Link href="/skills" className="hover:text-blue-500 transition-colors">
              Skills
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-500 text-center p-4 mt-10">
        © {new Date().getFullYear()} Darpan Vinodrai
      </footer>
    </div>
  );
}
