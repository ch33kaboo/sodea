// @ts-ignore

import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <main className="flex flex-col items-center justify-start relative font-sans min-h-screen bg-gray-100 pt-[72px]">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
