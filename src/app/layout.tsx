import Footer from "@/components/Footer/Footer";
import "./globals.css";
import NavBar from "@/components/navBar/page";
import {ReduxProvider } from "@/components/provider/ReduxProvider";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <NavBar/>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <Footer/>
      </body>
    </html>
  );
}
