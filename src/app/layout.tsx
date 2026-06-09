import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Oscar Festo Kimenyi | Full-Stack Engineer & Software Developer",
    template: "%s | Oscar Kimenyi",
  },
  description:
    "Software Engineering graduate with hands-on experience in full-stack web development, RESTful APIs, authentication systems, and AI/ML integration. Based in Mwanza, Tanzania. Open for full-time and freelance opportunities.",
  keywords: [
    "Oscar Kimenyi",
    "Full-Stack Developer",
    "Software Engineer",
    "React.js",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Machine Learning",
    "Tanzania Developer",
    "Web Developer",
    "JavaScript",
    "Express.js",
    "Laravel",
    "AI Integration",
    "Mwanza",
    "Tanzania",
  ],
  authors: [{ name: "Oscar Festo Kimenyi" }],
  creator: "Oscar Festo Kimenyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oscarkimenyi.dev",
    siteName: "Oscar Kimenyi Portfolio",
    title: "Oscar Festo Kimenyi | Full-Stack Engineer & Software Developer",
    description:
      "Software Engineering graduate building scalable web applications and AI-powered systems. Based in Mwanza, Tanzania.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oscar Kimenyi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Festo Kimenyi | Full-Stack Engineer",
    description: "Building scalable web applications and AI-powered systems in Tanzania.",
    creator: "@oscarkimenyi",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
