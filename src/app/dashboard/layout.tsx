import SideNav from '@/app/ui/sidenav';
import Menu from '@/app/ui/menu';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-screen overflow-hidden">
            {/* Sidebar on the left */}
            <aside className="flex-shrink-0 bg-white border-r shadow-md">
                <SideNav />
            </aside>

            {/* Right-side content */}
            <div className="flex flex-col flex-grow overflow-hidden">
                {/* Top Menu/Header */}
                <Menu />

                {/* Main content area */}
                <main className="flex-grow overflow-auto bg-gray-100 px-6 py-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
