import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Livin' Merchant",
    associatedWith: "PT Bank Mandiri (Persero) Tbk.",
    platform: "Android",
    description: "Livin' Merchant is an entrepreneurial app that can help your sales. Starting from recording sales, checking product stock to disbursing sales money, everything can be done in just one application. Practical!",
    techStacks: ["Xamarin (MAUI Framework)", "Kotlin", "Coroutines", "Micro Front-End", "Modularization", "Clean Architecture", "SharedPreferences", "Firebase Analytics", "Firebase Crashlytics", "Hilt", "Dagger"],
    googlePlayUrl: "https://play.google.com/store/apps/details?id=id.bmri.livinmerchant",
    appStoreUrl: "",
    duration: "Mar 2025 - Present"
  },
  {
    name: "New BDS (Branch Delivery System)",
    associatedWith: "PT Bank Mandiri (Persero) Tbk.",
    platform: "Android (Tablet version)",
    description: "This app to carry out banking transactions for customers through smart branches spread across several regions in Indonesia.",
    techStacks: ["Kotlin", "Coroutines", "Modularization", "Clean Architecture", "SharedPreferences", "Retrofit", "Hilt", "Jetpack Compose", "Detekt"],
    googlePlayUrl: "",
    appStoreUrl: "",
    duration: "Nov 2023 - Present"
  },
  {
    name: "Dompetku iOS",
    associatedWith: "Personal's Project",
    platform: "iOS",
    description: "Dompetku is a personal finance recording application that can record incoming and outgoing money in one app.",
    techStacks: ["Swift", "SwiftUI", "VIPER", "Clean Architecture", "Realm", "Combine", "UserDefault"],
    googlePlayUrl: "",
    appStoreUrl: "",
    duration: "Jun 2023 - Present"
  },
  {
    name: "Dompetku Android",
    associatedWith: "Personal's Project",
    platform: "Android",
    description: "Dompetku is a personal finance recording application that can record incoming and outgoing money in one app.",
    techStacks: ["Kotlin", "Jetpack Compose", "MVI", "Clean Architecture", "Hilt", "Room", "SQLite", "Material3", "DataStore"],
    googlePlayUrl: "https://play.google.com/store/apps/details?id=id.dompetku.app",
    appStoreUrl: "",
    duration: "Jan 2023 - Present"
  },
  {
    name: "Amar Bank",
    associatedWith: "Amar Bank",
    platform: "Android",
    description: "Amar Bank is a Mobile Banking application on Android that allows customers to conduct banking transactions through a single application. Customers can open an account, save money for banking products such as Celengan (daily interest savings), Deposits, and make loans (Tunaiku).",
    techStacks: ["Kotlin", "Coroutines", "Clean Architecture", "Retrofit", "Spek (Framework for Unit Tests)", "Dagger2", "Hilt", "SharedPreferences", "Firebase Analytics", "Firebase Crashlytics", "Firebase A/B Testing", "CircleCI (CI/CD)", "Detekt"],
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.senyumkubank.rekeningonline",
    appStoreUrl: "",
    duration: "Feb 2022 - Nov 2023"
  },
  {
    name: "Amar Bank's Embedded Banking App (SDK)",
    associatedWith: "Amar Bank",
    platform: "Android (Embedded SDK)",
    description: "With embedded banking, you can add financial services directly to your platform—let users access financial services within your platform, no app-switching needed.",
    techStacks: ["Kotlin", "Coroutines", "Modularization", "Clean Architecture", "Retrofit", "Koin", "SharedPreferences", "Firebase Analytics", "Firebase Crashlytics", "Android SDK", "Detekt"],
    googlePlayUrl: "",
    appStoreUrl: "",
    duration: "Jan 2023 - Nov 2023"
  },
  {
    name: "Mola",
    associatedWith: "Mola",
    platform: "Android",
    description: "MOLA is a finely curated video streaming platform which showcases the finest in entertainment, sports and children programming.",
    techStacks: ["Kotlin", "Coroutines", "MVVM", "Modularization", "Mockito", "JUnit", "Koin", "ExoPlayer", "SharedPreferences", "Firebase Analytics", "Firebase Crashlytics", "New Relic", "Detekt"],
    googlePlayUrl: "https://play.google.com/store/apps/details?id=tv.mola.app",
    appStoreUrl: "",
    duration: "Jun 2020 - Mar 2022"
  },
  {
    name: "Pawoon POS (Point of Sales)",
    associatedWith: "Pawoon",
    platform: "Android",
    description: "MOLA is a finely curated video streaming platform which showcases the finest in entertainment, sports and children programming.",
    techStacks: ["Java", "Kotlin", "MVVM", "Mockito", "Retrofit", "Room", "SharedPreferences", "RxJava", "EventBus", "WebSocket"],
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.pawoon.pos",
    appStoreUrl: "",
    duration: "Oct 2019 - Apr 2020"
  },
  {
    name: "PopBox Android",
    associatedWith: "PopBox",
    platform: "Android",
    description: "",
    techStacks: ["Java", "MVVM", "RxJava", "Retrofit", "Realm"],
    googlePlayUrl: "https://play.google.com/store/apps/details?id=asia.popbox.app",
    appStoreUrl: "",
    duration: "Oct 2018 - Oct 2019"
  },
  {
    name: "PopExpress Android",
    associatedWith: "PopBox",
    platform: "Android",
    description: "PopExpress is a Courier Tracker app on Android to make it easier for courier partners who work with PopBox to carry out pick-up and drop-off activities for goods delivered with PopBox smart lockers.",
    techStacks: ["Java", "MVVM", "RxJava", "Retrofit", "Realm"],
    googlePlayUrl: "",
    appStoreUrl: "",
    duration: "Oct 2018 - Oct 2019"
  },
  {
    name: "PopWarung Android",
    associatedWith: "PopBox",
    platform: "Android",
    description: "PopWarung is a POS (Point of Sales System) app on Android to facilitate merchants in collaboration with PopBox to carry out buying and selling activities between suppliers and customers in one app.",
    techStacks: ["Java", "MVVM", "RxJava", "Retrofit", "Realm"],
    googlePlayUrl: "",
    appStoreUrl: "",
    duration: "Oct 2018 - Oct 2019"
  },
];

function Projects() {
  return (
    <section id="projects" className="my-12">
      <h2 className="text-2xl font-bold mb-8 mt-24 text-center">Projects</h2>
      <div className="columns-1 md:columns-2 gap-4 space-y-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
