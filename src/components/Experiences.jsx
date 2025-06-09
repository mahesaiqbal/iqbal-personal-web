import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "PT Bank Mandiri (Persero) Tbk.",
    role: "Android Engineer",
    platform: "Android",
    duration: "Nov 2023 - Present",
    description:
      "As an Android Engineer, I helped build and scale the New BDS app for 240+ smart branches across Indonesia by modularizing features, using Coroutines for async tasks, and implementing Hilt in a Single Activity setup—making the app more efficient and easier to maintain. I also improved the Livin’ Merchant POS app by refining its architecture, reducing team dependencies, and boosting stability, which sped up feature delivery. To keep code quality high, I introduced static analysis tools like Detekt and SonarLint and applied obfuscation and shrinking techniques to protect our apps, verifying them with tools like JADX. I cut Gradle build times by 60% through migrating to Kotlin 2.1.10, switching to KSP, and optimizing libraries. On the UI side, I refactored components using Jetpack Compose for a smoother, more reactive experience. I also handled task planning in Jira and regularly took part in code reviews to support quality and team growth.",
  },
  {
    title: "Amar Bank",
    role: "Android Engineer",
    platform: "Android",
    duration: "Feb 2022 - Nov 2023",
    description:
      "At Amar Bank, I worked on both the main digital banking app and the Embedded Banking solution integrated into partner apps—helping expand our digital reach and improve customer access. I used Kotlin with Clean Architecture and modularization, along with Kotlin Flow and Dependency Injection (Dagger2 for Amar Bank, Koin for Embedded Banking) to keep the codebase clean, scalable, and maintainable. I built key features like Deposits, Celengan Savings, e-Statements, biometric login, PIN management, money transfers, In-App Updates, and even Instant App trials to boost functionality and user retention. On the Embedded Banking side, I added features like Direct Debit, account opening, and seamless fund transfers. I also integrated Firebase Remote Config, A/B testing, and analytics to support data-driven decisions. To keep things stable and secure, I enforced code quality with Detekt, added obfuscation and shrinking, and helped bring the crash-free rate to 99%. By improving automation and using AppCenter for APK distribution, we cut QA time by 50%. I also worked closely with Agile teams to ensure solid product delivery and was active in code reviews to keep quality high across the board.",
  },
  {
    title: "Mola TV",
    role: "Android Developer",
    platform: "Android and Android TV",
    duration: "Jun 2020 - Mar 2022",
    description:
      "At Mola TV, I helped build and scale the OTT streaming and subscription platform using Kotlin with MVVM architecture and modularization, which kept the codebase clean, scalable, and easy to maintain. I used Kotlin Flow for async data handling and Koin for Dependency Injection to boost code reusability and streamline collaboration. I integrated ExoPlayer for smooth movie and live content playback, and developed key features like subscription payments, user profile management, parental controls, and content management—boosting both functionality and user engagement. To support quality and performance, I added Detekt for static analysis, applied obfuscation and shrinking for security, and monitored stability using Firebase and New Relic, contributing to a smooth and reliable user experience. Working in Agile teams, I handled task breakdowns in Jira, kept documentation clear, and took part in code reviews to ensure delivery stayed on track and up to standard.",
  },
  {
    title: "Pawoon",
    role: "Android Developer",
    platform: "Android",
    duration: "Oct 2019 - Apr 2020",
    description:
      "At Pawoon, I developed the Point of Sale (POS) app that helped merchants streamline their daily operations and improve transaction accuracy. I worked with both Java and Kotlin using MVVM, modularized features for better maintainability, and implemented Dependency Injection with Dagger2 to keep the codebase clean and scalable. I handled asynchronous data flows with RxJava, which kept the app responsive even during peak transaction times. Key features I built included billing, product catalog, and account management—giving merchants full control over sales and inventory. I also integrated the Midtrans SDK to enable smooth and secure payment processing at checkout, boosting both reliability and customer trust. Within Agile teams, I took charge of breaking down tasks in Jira, delivered features on time, and contributed to code reviews to maintain high standards and support team growth.",
  },
  {
    title: "Popbox Asia Services",
    role: "Android Developer",
    platform: "Android",
    duration: "Oct 2018 - Oct 2019",
    description:
      "At Popbox, I developed and maintained smart locker (Popbox), courier tracking (PopExpress), and merchant POS (PopWarung) apps to streamline logistics and expand merchant capabilities. These apps improved package storage, delivery visibility, and day-to-day business operations across multiple regions. I implemented advanced parcel tracking for better transparency and customer trust, while enhancing features across all three apps to meet shifting business goals and boost engagement. For PopWarung, I built billing and catalog management features with responsive UIs that worked seamlessly in both portrait and landscape modes. I also integrated push notifications and used Firebase Analytics and Crashlytics to monitor performance, resolve issues proactively, and keep the apps stable. Using Trello, I helped break down and manage work clearly to keep the team productive and ensure timely delivery.",
  },
];

function Experiences() {
  return (
    <section id="experiences" className="my-12">
      <h2 className="text-2xl font-bold mb-8 mt-24 text-center">Experiences</h2>
      <div className="columns-1 md:columns-2 gap-4 space-y-4">
        {experiences.map((project, index) => (
          <ExperienceCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Experiences;
