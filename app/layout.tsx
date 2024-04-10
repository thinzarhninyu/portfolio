import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/header/navbar";
import Footer from "./_components/footer";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Thinzar Hnin Yu/ Michelle (micxehye)',
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
          href="/logo.png"
          type="image/png"
          sizes="any"
        />
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
