import { Roboto } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logout from "@/components/Logout";
import Header from "@/components/Header";


const inter = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700']
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  console.log({ session });
  return (
    <html lang="en">
      
      <body className={inter.className}>
      

        {
          !session && <Link href="/login">Войти в аккаунт</Link>
        }
        {
          !!session && <Logout />
        }
        <Header />
        <main>

          {children}

        </main>
      </body>
    </html>
  );
}
