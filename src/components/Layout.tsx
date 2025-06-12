import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
