import { Button } from '@/components/ui/button';
import Image from 'next/image';

const AboutFounderSection = () => {
  return (
    <section className="py-20 px-14 font-poppins flex flex-col items-center gap-10">
      <header>
        <h1 className="text-5xl text-center text-foreground">About Founder</h1>
      </header>
      <div className="rounded-lg bg-primary/5 py-6 px-6 grid gap-6 self-center w-1/2">
        <article className="text-black/80 font-medium">
          Deputy Coordinator, Chaplain, and Academic Representative to the
          Proprietor – Glorious Vision University (GVU), Lagos Campus Dr.
          Vincent Olanrewaju Olatubi is a dedicated theologian, scholar, and
          academic leader with a deep passion for education, ministry, and
          institutional development.
        </article>
        <div className="flex items-center gap-4">
          <div className="rounded-full size-14 flex items-center justify-center overflow-hidden bg-[rgba(246,189,0,0.3)]">
            <Image
              unoptimized
              width={32}
              height={32}
              className="w-22 h-22 mt-4 object-cover"
              src="/Olatubis-avatar.png"
              alt="Dr. V.0 Olatubi's avatar"
            />
          </div>
          <div className="grid gap-0">
            <h3 className="text-foreground font-medium text-base">
              Dr. Vincent Olanrewaju Olatubi PhD.
            </h3>
            <p className="text-black/60 text-sm">Founder of Guide</p>
          </div>
        </div>
      </div>

      <Button
        variant={'outline'}
        className="bg-transparent border-primary hover:bg-primary hover:text-white rounded-full"
      >
        Learn More
      </Button>
    </section>
  );
};

export default AboutFounderSection;
