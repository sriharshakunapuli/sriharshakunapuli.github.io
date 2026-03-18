export default function SriPortfolioWebsite() {
  const profile = {
    name: "Sri Harsha Kunapuli",
    title: "Senior Mobile Engineer",
    subtitle:
      "Senior Software Engineer (Architect | Tech Lead | Developer) – Android & Flutter | IoT • AWS • BLE • CI/CD Automation | Architecting Scalable Mobile Experiences",
    summary:
  "Senior Software Engineer with 12+ years of experience building large-scale mobile and IoT-connected applications, including 8+ years in Android (Kotlin/Java) and 4+ years in Flutter. Specialized in native Android (Kotlin, Coroutines, Jetpack Compose, Java) and cross-platform Flutter development, with deep expertise in the Android Application Framework and modern architectural patterns including MVC, MVP, MVVM, MVI, BLoC, and Clean Architecture.",
    email: "sriharshakunapuli@gmail.com",
    phone: "(858) 281-8478",
    location: "San Diego, CA, USA",
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
      ios: "https://apps.apple.com/us/app/fluidra-pro/id1538621105",
    },
    {
      name: "iAquaLink",
      platform: "Android / iOS",
      description:
        "Consumer IoT application allowing pool owners to remotely monitor and control pool equipment and automation systems.",
      android: "https://play.google.com/store/apps/details?id=com.zodiac.iaqualink",
      ios: "https://apps.apple.com/us/app/iaqualink/id443059509",
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
    },
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
    },
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
    "JUnit / Mockito / Espresso / Appium / JaCoCo / LCOV",
  ];

  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
    padding: "32px",
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "40px 48px",
    borderRadius: "10px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
    textAlign: "left",
  };

  const nameStyle = {
    fontSize: "40px",
    fontWeight: "700",
    marginBottom: "8px",
    textAlign: "left",
  };

  const subtitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#374151",
    lineHeight: "1.6",
    marginBottom: "24px",
    textAlign: "left",
  };

  const sectionTitleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    marginTop: "28px",
    marginBottom: "12px",
    textAlign: "left",
  };

  const paragraphStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#374151",
    textAlign: "left",
    marginBottom: "14px",
  };

  const itemTitleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "6px",
    textAlign: "left",
  };

  const itemDescriptionStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#4b5563",
    textAlign: "left",
    marginBottom: "6px",
  };

  const linkLineStyle = {
    fontSize: "17px",
    lineHeight: "1.8",
    textAlign: "left",
    marginBottom: "8px",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={nameStyle}>{profile.name}</h1>

        <div style={subtitleStyle}>{profile.subtitle}</div>

        <p style={paragraphStyle}>{profile.summary}</p>

        <h2 style={sectionTitleStyle}>Profiles</h2>
        <p style={paragraphStyle}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>

        <h2 style={sectionTitleStyle}>Published Mobile Applications</h2>
        {publishedApps.map((app) => (
          <div key={app.name} style={{ marginBottom: "20px" }}>
            <div style={itemTitleStyle}>{app.name}</div>
            <div style={itemDescriptionStyle}>{app.description}</div>

            {app.android && (
              <div style={{fontSize:"16px", lineHeight:"1.5"}}>
  		Android App Link:{" "}
  		<i>
    		  <a href={app.android} target="_blank" rel="noreferrer">
      		    {app.name}
    		  </a>
  		</i>
	      </div>
            )}

            {app.ios && (
              <div style={{fontSize:"16px", lineHeight:"1.5"}}>
  		iOS App Link:{" "}
  		<i>
    		  <a href={app.ios} target="_blank" rel="noreferrer">
      		    {app.name}
    		  </a>
  		</i>
	      </div>
            )}
          </div>
        ))}

        <h2 style={sectionTitleStyle}>Featured Engineering Projects</h2>
        {projects.map((project) => (
          <div key={project.name} style={{ marginBottom: "20px" }}>
            <div style={itemTitleStyle}>{project.name}</div>
            <div style={itemDescriptionStyle}>{project.description}</div>
            <p style={linkLineStyle}>
              <i>{project.stack}</i>
            </p>
          </div>
        ))}

        <h2 style={sectionTitleStyle}>Core Skills</h2>
        <p style={paragraphStyle}>{skills.join(" • ")}</p>

        <h2 style={sectionTitleStyle}>Contact</h2>
        <div style={{fontSize:"16px", lineHeight:"1.6"}}>
          <div>Email: {profile.email}</div>
	  <div>Phone: {profile.phone}</div>
	  <div>Phone: {profile.location}</div>
        </div>
      </div>
    </div>
  );
}