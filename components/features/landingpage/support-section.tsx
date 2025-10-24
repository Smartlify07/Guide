import { Button } from '@/components/ui/button';

const SupportSection = () => {
  return (
    <section className="py-20 font-poppins flex flex-col gap-5 items-center justify-center px-14">
      <header className="grid  text-center justify-items-center gap-5 lg:w-7/12">
        <h1 className="text-5xl/[60px] tracking-[0%] text-center">
          Supporting Your Learning{' '}
          <span className="text-primary">Every Step of the Way</span>
        </h1>
        <p className="text-foreground/10">
          Your go-to place for reliable resources that help you gather knowledge
          and succeed.
        </p>
      </header>

      <Button
        className="rounded-full capitalize border-primary"
        variant={'outline'}
      >
        See materials
      </Button>
    </section>
  );
};

export default SupportSection;
