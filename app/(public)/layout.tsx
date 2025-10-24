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
    </main>
  );
}
