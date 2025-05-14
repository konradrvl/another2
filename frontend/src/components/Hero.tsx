interface HeroProps {
  ideasSection: HTMLElement | null;
}

const Hero = ({ ideasSection }: HeroProps) => {
  const onScrollToIdeas = () => {
    if (ideasSection) {
      ideasSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-6 py-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Spielideen für jedes Alter
            </h1>
            <p className="text-base-content/70 text-lg md:text-xl">
              Kreative, altersgerechte Aktivitäten für dein Kind - drinnen und draußen, zu jeder Jahreszeit
            </p>
            <div className="flex justify-center">
              <button onClick={onScrollToIdeas} className="btn btn-primary btn-lg text-white">
                Ideen entdecken
              </button>
            </div>
    </section>
  );
};

export default Hero; 