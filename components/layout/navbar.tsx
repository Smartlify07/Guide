'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FaTimes } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="px-6 lg:px-14 py-3 bg-foreground w-full relative border-b">
      <div className="container relative flex items-center justify-between">
        <h1 className="font-plaster text-4xl">GUIDE</h1>

        <div className="hidden md:flex items-center font-poppins gap-6 text-sm [&>a]:rounded-full [&>a]:text-foreground [&>a]:px-2.5 [&>a]:py-2 [&>.active]:bg-primary/5 [&>a]:hover:bg-primary/5">
          <Link className={pathname === '/' ? 'active' : ''} href={'/'}>
            Home
          </Link>{' '}
          <Link
            className={pathname === '/materials' ? 'active' : ''}
            href={'/materials'}
          >
            Materials
          </Link>
          <Link
            className={pathname === '/about' ? 'active' : ''}
            href={'/about'}
          >
            About
          </Link>
        </div>

        <Button className="font-poppins hidden md:block rounded-full">
          Get Started
        </Button>

        <button className="md:hidden" onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <RxHamburgerMenu />}
        </button>
      </div>
      <div
        className={cn(
          '-translate-y-[300px] absolute z-1000 bg-white border-t py-5 w-full left-0 flex flex-col items-center text-center font-poppins gap-6 text-sm [&>a]:rounded-full [&>a]:text-foreground [&>a]:px-2.5 [&>a]:py-2 [&>.active]:bg-primary/5 [&>a]:hover:bg-primary/5',
          isOpen && 'translate-y-3'
        )}
      >
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
        <Button className="font-poppins rounded-full">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
