
import HeroHeading from "./HeroHeading";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid min-w-0 grid-cols-1 items-center gap-8 py-8 sm:gap-10 sm:py-14 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:py-16"
    >
      <div className="min-w-0">
        <HeroHeading />
      </div>

      <div className="min-w-0 w-full">
        <ProfileCard />
      </div>
    </section>
  );
}
