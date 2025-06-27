import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const AVEstianaFont = localFont({
  src: "../../public/fonts/AVEstiana-Regular.otf",
});

export const metadata: Metadata = {
  title: "GitToMD",
  description: "Convert GitHub repositories to Markdown",
  openGraph: {
    title: "GitToMD",
    description:
      "Your repository. In Markdown. Instantly. Convert GitHub repositories to Markdown",
    url: "https://gittomd.com",
    siteName: "GitToMD",
    images: [
      {
        url: "https://gittomd.com/images/banner_full.png",
        width: 1200,
        height: 628,
        alt: "GitToMD - Convert GitHub repositories to Markdown",
      },
      {
        url: "https://gittomd.com/images/banner_square.png",
        width: 510,
        height: 510,
        alt: "GitToMD - Convert GitHub repositories to Markdown",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitToMD",
    description:
      "Your repository. In Markdown. Instantly. Convert GitHub repositories to Markdown",
    images: ["https://gittomd.com/images/banner_full.png"],
  },
  other: {
    "vk:image": "https://gittomd.com/images/banner_square.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
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
  metadataBase: new URL("https://gittomd.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AVEstianaFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
