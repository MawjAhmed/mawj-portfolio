
import HeroHeading from "./HeroHeading";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid min-w-0 grid-cols-1 items-center gap-10 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:py-16"
    >
      <HeroHeading />

      <div className="min-w-0 w-full">
        <ProfileCard />
      </div>
    </section>
  );
}
