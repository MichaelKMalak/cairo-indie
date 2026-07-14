
const rules = [
  "You need to move your ass. You need to attend meetups and make shit happen.",
  "1 offline screening every sprint to judge people's hard work and let them judge you. 2 strikes and you're out.",
  "1 weekly online meetup. It'll just take a couple of minutes, no worries. You've to share your progress.",
  "You need to submit something! That's the whole purpose of all of this, you know? 1 short film per sprint. If more than 10 minutes, the deadline could be extended.",
  "Collaborate at least once a year with someone else from the club. We believe in you and that you can be a one-man show, but not now.",
];

const Rules = () => {
  return (
    <section id="rules" className="py-20 md:py-24 bg-[#390c86]/[0.03]">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-gunterz font-bold mb-3 text-[#390c86]">
            Club Rules
          </h2>
          <p className="text-muted-foreground">
            The first rule of Cairo Indie Filmmakers Club is... well, there are actually several rules.
          </p>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-black/5 border-y border-black/5">
          {rules.map((rule, index) => (
            <div key={index} className="flex gap-5 py-5">
              <span className="shrink-0 font-gunterz font-bold text-lg text-[#f52e38] w-8">
                {index + 1}
              </span>
              <p className="text-[15px] leading-relaxed text-foreground/80">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
