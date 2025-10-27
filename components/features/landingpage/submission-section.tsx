import { Button } from '@/components/ui/button';
import Image from 'next/image';

const SubmissionSection = () => {
  return (
    <section className="px-6 lg:px-14 py-20 bg-primary/3 font-poppins">
      <div className="container flex flex-col-reverse gap-15 lg:gap-10 lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-6 lg:gap-16 lg:w-6/12">
          <header className="grid gap-2">
            <h1 className="text-foreground text-3xl text-center lg:text-5xl/[60px]">
              Worried about perfecting your research or finding the right
              guidance?<em className="font-medium">We’ve got you covered</em>
            </h1>
          </header>

          <div className="flex items-center self-center lg:self-start gap-5 relative lg:w-[300px]">
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
              className="absolute right-14 hidden lg:block -top-10"
            />
          </div>
        </div>

        <div className="lg:w-6/12 relative max-w-[300px] h-[300px] md:max-w-[500px] md:h-[500px]">
          <div className="rounded-full relative pb-[100%] w-full max-h-[300px] md:max-h-[500px] overflow-hidden bg-primary/5">
            <Image
              width={400}
              height={400}
              unoptimized
              src={'/guide-hero-image.png'}
              alt="Guide hero image"
              className="w-full h-full mt-[25%] object-contain"
            />
          </div>
          <Image
            width={90}
            height={90}
            src={'/lightbulb-2.svg'}
            alt="Lightbulb"
            className="absolute size-[60px] right-[10%] -top-[2%] md:right-[10%] md:top-[0%] md:size-[90px]"
          />
          <div className="rounded-lg bg-primary/10 backdrop-blur-md h-fit absolute bottom-[10%] left-[5%] md:top-[30%] md:-left-[15%] py-2 px-4 translate-y-1/2 border-2 z-10 text-center">
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
      </div>
    </section>
  );
};

export default SubmissionSection;
