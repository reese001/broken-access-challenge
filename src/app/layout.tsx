import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Security Demo App",
  description: "A simple app for demonstrating broken access control",
};

export default function RootLayout({ children }:Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Security Demo App</h1>
        </header>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
