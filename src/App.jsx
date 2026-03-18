export default function SriPortfolioWebsite() {

  const profile = {
    name: "Sri Harsha Kunapuli",
    title: "Senior Mobile Engineer",
    subtitle: "Android • Flutter • IoT • AOSP",
    summary:
      "Senior Mobile Engineer with 12+ years of experience building large-scale mobile and IoT-connected applications, including 8+ years in Android and 4+ years in Flutter. Expertise in Jetpack Compose, Kotlin Coroutines, BLE, MQTT, WebSocket, AWS IoT, and scalable mobile architecture.",
    email: "sriharshakunapuli@gmail.com",
    phone: "(858) 281-8478",
    location: "California, USA",
    linkedin: "https://www.linkedin.com/in/sri-harsha-kunapuli-9a3945154/",
    github: "https://github.com/sriharshakunapuli",
    resume: "#",
  };

  const publishedApps = [

    {
      name: "Fluidra Pro",
      platform: "Android / iOS",
      description:
        "Professional IoT mobile platform enabling service technicians to configure, monitor, and control connected pool equipment.",
      android: "https://play.google.com/store/apps/details?id=com.zodiac.fluidrapro",
      ios: "https://apps.apple.com/us/app/fluidra-pro/id1538621105"
    },

    {
      name: "iAquaLink",
      platform: "Android / iOS",
      description:
        "Consumer IoT application allowing pool owners to remotely monitor and control pool equipment and automation systems.",
      android: "https://play.google.com/store/apps/details?id=com.zodiac.iaqualink",
      ios: "https://apps.apple.com/us/app/iaqualink/id443059509"
    },

    {
      name: "AT&T TV",
      platform: "Android",
      description:
        "Large-scale streaming platform delivering live television, DVR playback, and on-demand video experiences.",
      android: "https://play.google.com/store/apps/details?id=com.att.tv",
    },

    {
      name: "DirecTV",
      platform: "Android",
      description:
        "Mobile streaming and remote DVR management platform supporting millions of users across DirecTV services.",
      android: "https://play.google.com/store/apps/details?id=com.directv.navigator",
    },

    {
      name: "Best Brains Learning",
      platform: "Android",
      description:
        "Educational mobile application enabling learning programs and progress tracking for students.",
      android: "https://play.google.com/store/apps/details?id=com.edu.bestbrains",
    },

    {
      name: "Media Review & Promotions",
      platform: "Android",
      description:
        "Mobile review and rating platform enabling users to share feedback and discover local businesses.",
      android: "https://play.google.com/store/apps/details?id=com.review.legend",
    }

  ];

  const projects = [

    {
      name: "Jetpack Compose Modernization",
      description:
        "Incremental migration of large legacy Android codebases from XML layouts to Jetpack Compose using ComposeView interoperability and recomposition optimization.",
      stack: "Kotlin • Jetpack Compose • Coroutines • Flow • MVVM",
      link: "#",
    },

    {
      name: "IoT Device Control Platform",
      description:
        "Mobile-first architecture enabling real-time control of connected devices using BLE, MQTT, WebSocket, and AWS IoT integrations.",
      stack: "Android • Flutter • BLE • MQTT • AWS IoT • WebSocket",
      link: "#",
    },

    {
      name: "Flutter Scalable Architecture",
      description:
        "Reusable Flutter architecture implementing Clean Architecture, BLoC state management, CI/CD automation, and modular UI components.",
      stack: "Flutter • Dart • BLoC • Provider • GitHub Actions • Fastlane",
      link: "#",
    },

    {
      name: "AOSP In-Vehicle Infotainment",
      description:
        "Android Automotive media platform integrating satellite radio, streaming services, and vehicle HAL/AIDL interfaces.",
      stack: "Android • AOSP • AIDL • HAL • Kotlin",
      link: "#",
    }

  ];

  const skills = [
    "Kotlin",
    "Java",
    "Jetpack Compose",
    "Coroutines",
    "Flow",
    "Flutter / Dart",
    "MVVM / MVP / MVC / Clean Architecture",
    "BLoC / Provider",
    "Dagger / Hilt",
    "BLE",
    "MQTT / WebSocket",
    "AWS IoT",
    "AOSP, AIDL / HAL",
    "CI/CD: GitHub Actions / Jenkins / Fastlane",
    "GitHub Copilot / Android Studio Gemini",
    "JUnit, Mockito, Espresso, Appium, JaCoCo, LCOV"
  ];

  return (
    <div style={{
      fontFamily: "Inter, Arial",
      background:"#f8fafc",
      padding:"40px"
    }}>

    <div style={{
      maxWidth:"900px",
      margin:"auto",
      background:"white",
      padding:"40px",
      borderRadius:"12px",
      boxShadow:"0 8px 30px rgba(0,0,0,0.08)"
    }}>

      <h1 style={{fontSize:"38px", marginBottom:"6px"}}>
        {profile.name}
      </h1>

      <p style={{color:"#555", marginBottom:"20px"}}>
        {profile.title} — {profile.subtitle}
      </p>

      <p style={{lineHeight:"1.6"}}>
        {profile.summary}
      </p>

      <hr style={{margin:"30px 0"}} />

      <h2>Profiles</h2>

      <p>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>{" | "}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>

      <hr style={{margin:"30px 0"}} />

      <h2>Published Mobile Applications</h2>

      {publishedApps.map(app => (
        <div key={app.name} style={{
          marginBottom:"20px",
          paddingBottom:"15px",
          borderBottom:"1px solid #eee"
        }}>

          <b>{app.name}</b> ({app.platform})

          <p style={{margin:"6px 0"}}>
            {app.description}
          </p>

          {app.android && (
            <a href={app.android} target="_blank" rel="noreferrer">
              Android
            </a>
          )}

          {app.ios && (
            <>
              {" | "}
              <a href={app.ios} target="_blank" rel="noreferrer">
                iOS
              </a>
            </>
          )}

        </div>
      ))}

      <hr style={{margin:"30px 0"}} />

      <h2>Featured Engineering Projects</h2>

      {projects.map(project => (
        <div key={project.name} style={{marginBottom:"18px"}}>

          <b>{project.name}</b>

          <p style={{margin:"4px 0"}}>
            {project.description}
          </p>

          <p style={{
            fontSize:"14px",
            color:"#666"
          }}>
            {project.stack}
          </p>

        </div>
      ))}

      <hr style={{margin:"30px 0"}} />

      <h2>Core Skills</h2>

      <p style={{lineHeight:"1.7"}}>
        {skills.join(" • ")}
      </p>

      <hr style={{margin:"30px 0"}} />

      <h2>Contact</h2>

      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Location: {profile.location}</p>

    </div>
  </div>
);
}