import SideNav from '@/app/ui/sidenav';
import Menu from '@/app/ui/menu';
import { getUserInfo } from '../api/auth/getUserNameServerAction';
import AdminSideNav from '@/app/ui/AdminSideNav';
// import AccountantSideNav from '@/app/ui/sidenav/accountantSideNav';
import WorkerSideNav from '@/app/ui/WorkerSideNav';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const user = await getUserInfo();
    const renderSideNav = () => {

        switch (user.role) {
            case 'admin':
                return <AdminSideNav />;
            // case 'accountant':
            //     return <AccountantSideNav />;
            default:
                return <WorkerSideNav />;
        }
    };
    return (
        <div className="flex h-screen w-screen overflow-hidden">
            {/* Sidebar on the left */}
            <aside className="flex-shrink-0 bg-white border-r shadow-md">
                {renderSideNav()}
                
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
