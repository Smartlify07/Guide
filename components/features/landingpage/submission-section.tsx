import { Button } from '@/components/ui/button';
import Image from 'next/image';

const SubmissionSection = () => {
  return (
    <section className="px-14 flex py-20 justify-between bg-primary/3 font-poppins items-center gap-6">
      <div className="grid gap-16 w-6/12">
        <header className="grid gap-2">
          <h1 className="text-foreground text-5xl/[60px]">
            Worried about perfecting your research or finding the right
            guidance?<em className="font-medium">We’ve got you covered</em>
          </h1>
        </header>

        <div className="flex items-center gap-5 relative w-[300px]">
          <Button
            variant={'outline'}
            className="bg-transparent border-primary hover:bg-primary hover:text-white rounded-full"
          >
            Submit Work
          </Button>

          <Image
            width={100}
            height={100}
            src={'/spiral-arrow.svg'}
            alt="spiral-arrow"
            className="absolute right-14 -top-10"
          />
        </div>
      </div>

      <div className="w-6/12 relative max-w-[500px] h-[500px] ">
        <div className="rounded-full relative pb-[100%] w-full max-h-[500px] overflow-hidden bg-primary/5">
          <Image
            width={400}
            height={400}
            unoptimized
            src={'/guide-hero-image.png'}
            alt="Guide hero image"
            className="w-full h-full mt-[10%] object-contain"
          />
        </div>
        <div className="rounded-lg bg-primary/10 absolute top-[30%] -left-[15%] py-2 px-4 translate-y-1/2 border-2 z-10 text-center">
          <h3 className="text-foreground font-medium text-xs">
            Look no further, let’s help you review{' '}
          </h3>
          <p className="text-foreground/80 text-xs">
            Join others who use this platform
          </p>

          <div className="flex items-center justify-center mt-3">
            <Image
              width={32}
              height={32}
              unoptimized
              src={'/woman-in-blue-shirt.jpg'}
              alt="woman in a blue shirt"
              className="rounded-full size-8 object-cover bg-primary/10 z-10"
            />
            <Image
              width={32}
              height={32}
              unoptimized
              src={'/woman-in-a-suit.jpg'}
              alt="woman in a suit"
              className="rounded-full size-8 -ml-4 object-cover bg-primary/10 z-10"
            />
            <Image
              unoptimized
              width={32}
              height={32}
              src={'/woman-in-orange-shirt.png'}
              alt="woman in an orange shirt"
              className="rounded-full size-8 -ml-2 object-cover bg-primary/10 z-10"
            />
            <Image
              unoptimized
              width={32}
              height={32}
              src={'/woman-in-a-suit.jpg'}
              alt="woman in a suit"
              className="rounded-full size-8 -ml-2 object-cover bg-primary/10 z-10"
            />
            <Image
              unoptimized
              width={32}
              height={32}
              src={'/woman-in-blue-shirt.jpg'}
              alt="woman in a blue shirt"
              className="rounded-full size-8 -ml-2 object-cover bg-primary/10 z-10"
            />

            <div className="self-center">+1</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionSection;
