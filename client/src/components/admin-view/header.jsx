import { LogOut, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/store/auth-slice';
function AdminHeader({ setOpenSidebar }) {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutUser());
  }
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background border-b'>
      <Button
        className='lg:hidden sm:block'
        onClick={() => setOpenSidebar(true)}
      >
        <Menu />
        <span className='sr-only'>Toggle Menu</span>
      </Button>
      <div className='flex flex-1 justify-end'>
        <Button
          className='inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow'
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}
export default AdminHeader;
