import Image from 'next/image';

const services = [
  {
    id: 1,
    icon: '/book.svg',
    title: 'Research access',
    description:
      'Explore a collection of research papers and academic essays to support learning and scholarly work',
  },

  {
    id: 2,
    icon: '/wallet.svg',

    title: 'Purchase Materials',
    description:
      'Purchase high-quality research materials to enhance your academic work and support your studies',
  },

  {
    id: 3,
    icon: '/pencil.svg',

    title: 'Review & Edit',
    description:
      'Professional review and correction services for your materials',
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 py-20 lg:px-14 font-poppins">
      <div className="container flex flex-col gap-15">
        <header className="grid gap-5 text-center">
          <h1 className="text-foreground text-3xl lg:text-5xl">Our Services</h1>
          <p className="text-base text-black/70">
            Here are services offered for best experience
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl text-center flex flex-col gap-5 p-5 bg-primary/5 border border-primary/50"
            >
              <div className="rounded-full size-10 bg-primary self-center flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title + "'s icon"}
                  unoptimized
                  width={16}
                  height={16}
                />
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-medium">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
