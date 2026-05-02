import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnyTopic",
  description: "AnyTopic Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col overflow-hidden">
        {children}
      </body>
    </html>
  );
}
