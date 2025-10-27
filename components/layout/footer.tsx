import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { IoMailUnread } from 'react-icons/io5';

const links = [
  {
    label: 'Home',
    href: '/home',
  },
  { label: 'Materials', href: '/materials' },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Submit Work',
    href: '/submit-work',
  },
];
const contactLinks = [
  { content: '+234 803 045 2014', icon: FaPhone },
  {
    content: 'favourolu@gmail.com',
    icon: IoMailUnread,
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary/3 py-20 px-14 font-poppins">
      <div className="grid gap-10 lg:gap-0 lg:grid-cols-2 container">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl lg:text-5xl font-plaster">GUIDE</h1>
          <p className="text-black/60">
            Professional academic platform for research access, guidance, and
            scholarly excellence.
          </p>
          <div className="flex items-center gap-4 [&>div]:text-gray-400 [&>div]:text-2xl [&>div]:rounded-full [&>div]:flex [&>div]:items-center [&>div]:justify-center">
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaLinkedin />
            </div>
            <div>
              <FaFacebook />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 mt-15">
            <h3 className="text-black text-lg font-medium">Quick Links</h3>

            <ul className="flex flex-col gap-2.5">
              {links.map((link, i) => (
                <Link
                  className="text-black/60 text-sm"
                  key={i}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:justify-self-end">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-black font-medium text-lg">Contacts</h3>

            {contactLinks.map((link, i) => (
              <div key={i} className="flex items-center text-black/60 gap-2">
                <link.icon size={14} />
                <p className="text-sm">{link.content}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-t-black/60 pt-2.5 w-[212px]">
            <p className="text-black/60 text-left lg:text-center text-sm">
              © 2025 <span className="font-plaster">GUIDE</span> All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
