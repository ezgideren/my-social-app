import Navbar from "@/components/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-slate-100">
          <div className="w-full px-4 md:px-8 lg:px-8 xl:px-16 2xl:px-32">
          <Navbar/>
          </div>
          <div className="px-4 md:px-8 lg:px-8 xl:px-16 2xl:px-32">
          {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
