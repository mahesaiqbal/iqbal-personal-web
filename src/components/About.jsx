import myPhoto from "../assets/Iqbal.jpeg";

function About() {
  return (
    <section
      id="about"
      className="my-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
    >
      <img
        src={myPhoto}
        alt="Profile"
        className="rounded-full aspect-square object-cover w-56 h-56"
      />
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-zinc-400 text-justify" style={{ textIndent: '1.3rem' }}>
          As an Android Engineer with 6+ years of hands-on experience in Android
          development, I'm passionate about crafting and building a
          high-quality, scalable, readable, and user-friendly app. My expertise
          in Kotlin, Jetpack Compose, Clean Architecture, and other tech stacks
          allows me to make great Android apps that prioritize both performance
          and security. I have successfully reduced app load times, improved
          crash rates, reduced complex development to increase productivity, and
          delivered features that delight users.
        </p>
      </div>
    </section>
  );
}

export default About;
