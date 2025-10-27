import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="px-6 py-20 lg:px-14 font-poppins gap-6">
      <div className="container justify-between flex gap-10 flex-col-reverse lg:flex-row items-center">
        <div className="flex flex-col gap-5 w-full justify-center items-center lg:items-start lg:justify-start lg:w-6/12">
          <header className="grid gap-5 text-center lg:text-left">
            <h1 className="text-foreground text-3xl lg:text-5xl">
              Access research materials to support learning and growth{' '}
              <em className="font-medium">Anytime!</em>
            </h1>
            <p className="text-base lg:w-10/12 text-black/70">
              Discover, purchase, and access cutting-edge research materials.
              Get professional guidance for your academic projects.
            </p>
          </header>

          <div className="flex items-center gap-5">
            <Button className="rounded-full">Get started</Button>
            <Button
              variant="outline"
              className="rounded-full border border-primary"
            >
              Submit Work
            </Button>
          </div>
        </div>

        <div className=" relative w-[300px] h-[300px] max-w-[300px] lg:max-w-[500px] lg:h-[500px] lg:w-6/12">
          <div className="rounded-full relative pb-[100%] w-full max-h-[300px] lg:max-h-[500px] overflow-hidden bg-primary/5">
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
            src={'/lightbulb-1.svg'}
            alt="Lightbulb"
            className="absolute size-[60px] right-[10%] -top-[2%] lg:right-[10%] lg:top-[2%] lg:size-[90px]"
          />
          <div className="rounded-lg flex flex-col items-center justify-center bg-primary/10 absolute top-[50%] lg:top-[30%] lg:-left-[20%] py-2 px-4 translate-y-1/2 border-2 z-10 lg:-rotate-20 text-center">
            <h3 className="text-foreground font-medium text-xs">
              Academic materials at your finger tip!
            </h3>
            <p className="text-foreground/80 text-xs">
              Join others who use this platform
            </p>

            <div className="flex items-center mt-3">
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

              <div>+1</div>
            </div>
          </div>

          <div className="rounded-lg hidden lg:bloack bg-primary/10 absolute bottom-[15%] -right-[5%] py-2 px-4 translate-y-1/2 border-2 z-10 rotate-20 text-center">
            <h3 className="text-foreground font-medium text-xs">
              Academic materials at your finger tip!
            </h3>
            <p className="text-foreground/80 text-xs">
              Join others who use this platform
            </p>

            <div className="flex items-center mt-3">
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

              <div className="rounded-full size-8 ">+1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
