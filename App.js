import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./app/pages/LoginPage";

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
        <Text>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View> */}
      <LoginPage/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// import React, { useState, useEffect } from "react";
// import { AppState } from "react-native";
// import * as Kiosk from "expo-kiosk-control";

// import ScreenIntro from "./components/ScreenIntro";
// import ScreenOTP from "./components/ScreenOTP";
// import ScreenPatientSelect from "./components/ScreenPatientSelect";
// import ScreenReportList from "./components/ScreenReportList";
// import ScreenReportView from "./components/ScreenReportView";

// type Step = "intro" | "otp" | "select" | "list" | "view";

// export default function App() {
//   const [step, setStep] = useState<Step>("intro");
//   const [patient, setPatient] = useState<any>(null);
//   const [report, setReport] = useState<any>(null);

//   const dummyPatients = [
//     { name: "Mr. Veernapu Raja Sekhar", age: 39, uhid: "AIGG.20817907" },
//     { name: "Mrs. Sugnanaam Veernapu", age: 54, uhid: "AIGG.20974111" },
//   ];
//   const dummyReports = [
//     { name: "CBP (Complete Blood Picture)", imageUri: "https://.../cbp.jpg" },
//     // ... more
//   ];

//   useEffect(() => {
//     Kiosk.startKioskMode();
//     const sub = AppState.addEventListener("change", (state) => {
//       if (state === "active") {
//         Kiosk.onRecentButtonPressed();
//       }
//     });
//     return () => {
//       sub.remove();
//       Kiosk.exitKioskMode();
//     };
//   }, []);

//   if (step === "intro") return <ScreenIntro onStart={() => setStep("otp")} />;
//   if (step === "otp") return <ScreenOTP onSubmit={() => setStep("select")} />;
//   if (step === "select")
//     return (
//       <ScreenPatientSelect
//         patients={dummyPatients}
//         onSelect={(p) => {
//           setPatient(p);
//           setStep("list");
//         }}
//       />
//     );
//   if (step === "list")
//     return (
//       <ScreenReportList
//         reports={dummyReports}
//         onView={(r) => {
//           setReport(r);
//           setStep("view");
//         }}
//       />
//     );
//   if (step === "view")
//     return <ScreenReportView report={report} onBack={() => setStep("list")} />;

//   return null;
// }

// App.js
// import React, { useState, useEffect } from "react";
// import { AppState } from "react-native";
// // import * as Kiosk from "expo-kiosk-control";

// import ScreenIntro from "./components/ScreenIntro";
// import ScreenOTP from "./components/ScreenOTP";
// import ScreenPatientSelect from "./components/ScreenPatientSelect";
// import ScreenReportList from "./components/ScreenReportList";
// import ScreenReportView from "./components/ScreenReportView";

// export default function App() {
//   const [step, setStep] = useState("intro");
//   const [patient, setPatient] = useState(null);
//   const [report, setReport] = useState(null);

//   const dummyPatients = [
//     { name: "Mr. Veernapu Raja Sekhar", age: 39, uhid: "AIGG.20817907" },
//     { name: "Mrs. Sugnanaam Veernapu", age: 54, uhid: "AIGG.20974111" },
//   ];
//   const dummyReports = [
//     { name: "CBP (Complete Blood Picture)", imageUri: "https://www.shutterstock.com/image-photo/one-tree-perfect-grass-field-600w-76166707.jpg" },
//     // add more as needed
//   ];

//   // useEffect(() => {
//   //   // Enter kiosk mode when app mounts
//   //   Kiosk.startKioskMode(); // from expo-kiosk-control :contentReference[oaicite:1]{index=1}

//   //   const subscription = AppState.addEventListener("change", (state) => {
//   //     if (state === "active") {
//   //       // Prevent recent/back exit if in kiosk mode
//   //       Kiosk.onRecentButtonPressed(); // required callback usage :contentReference[oaicite:2]{index=2}
//   //     }
//   //   });

//   //   return () => {
//   //     subscription.remove();
//   //     Kiosk.exitKioskMode();
//   //   };
//   // }, []);

//   // Navigation logic
//   if (step === "intro") {
//     return <ScreenIntro onStart={() => setStep("otp")} />;
//   }
//   if (step === "otp") {
//     return <ScreenOTP onSubmit={() => setStep("select")} />;
//   }
//   if (step === "select") {
//     return (
//       <ScreenPatientSelect
//         patients={dummyPatients}
//         onSelect={(p) => {
//           setPatient(p);
//           setStep("list");
//         }}
//       />
//     );
//   }
//   if (step === "list") {
//     return (
//       <ScreenReportList
//         reports={dummyReports}
//         onView={(r) => {
//           setReport(r);
//           setStep("view");
//         }}
//       />
//     );
//   }
//   if (step === "view") {
//     return <ScreenReportView report={report} onBack={() => setStep("list")} />;
//   }

//   return null;
// }
