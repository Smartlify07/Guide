'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-14 py-3 bg-foreground w-full border">
      <h1 className="font-plaster text-4xl">GUIDE</h1>

      <div className="flex items-center font-poppins gap-6 text-sm [&>a]:rounded-full [&>a]:text-foreground [&>a]:px-2.5 [&>a]:py-2 [&>.active]:bg-primary/5 [&>a]:hover:bg-primary/5">
        <Link className={pathname === '/' ? 'active' : ''} href={'/'}>
          Home
        </Link>{' '}
        <Link
          className={pathname === '/materials' ? 'active' : ''}
          href={'/materials'}
        >
          Materials
        </Link>
        <Link className={pathname === '/about' ? 'active' : ''} href={'/about'}>
          About
        </Link>
      </div>

      <Button className="font-poppins rounded-full">Get Started</Button>
    </nav>
  );
};

export default Navbar;
