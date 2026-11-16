
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "FloorLabX – Én plattform. Hele innebandyhverdagen.",
  description:
    "FloorLabX samler treningsplanlegging, øvelsesbank, kampadministrasjon og klubbens ressurser i én plattform for innebandytrenere og klubber.",
  applicationName: "FloorLabX",
  metadataBase: new URL("https://floorlabx.com"),
  openGraph: {
    title: "FloorLabX – Utviklet for innebandy",
    description:
      "Fra den enkelte trener til hele klubben. Planlegg, organiser og utvikle med FloorLabX.",
    url: "https://floorlabx.com",
    siteName: "FloorLabX",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
