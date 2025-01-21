import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/header/navbar";
import Footer from "./_components/footer";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Thinzar Hnin Yu @micxehye: Software Developer',
  description: 'A software developer based in Singapore who is passionate about building software that solves real-world problems. Final year Diploma in Information Technology student, specializing in Software Development, studying @ Singapore Polytechnic.',
  metadataBase: new URL('https://www.thinzarhninyu.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.png"
          type="image/png"
          sizes="32x32"
        />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:alt" content="Thinzar Hnin Yu @micxehye: Software Developer" />
        <meta property="og:image:type" content="png" />
        <meta name="twitter:image" content="/opengraph-image.png" />
        <meta property="twitter:image:alt" content="Thinzar Hnin Yu @micxehye: Software Developer" />
        <meta name="twitter:image:type" content="png" />
        <meta name="keywords" content="Thinzar, Thinzar Hnin Yu, micxehye, Portfolio, Software Developer, Software Developer Portfolio" />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed bottom-5 left-2 z-40">
            <ThemeToggle />
          </div>
          <div className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-gray-800 py-2">
            <Navbar />
          </div>
          <main className="dark:bg-neutral-900">{children}</main>
          <Separator />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
