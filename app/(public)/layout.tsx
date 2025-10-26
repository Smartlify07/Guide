import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
