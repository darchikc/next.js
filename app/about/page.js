import Header from "@/components/Header";
import Link from "next/link";

export default function app() {
    <Header />
  return (
    <div>

<div className="container mx-auto p-3 flex justufy-center items-center gap-[110px]">
    
<Link
            className=" text-2xl transition-all"
            href="/about">
            Суши
      
        </Link>
        <Link
            className=" text-2xl transition-all"
            href="/menu">
            Роллы
        </Link>
        
        <Link
            className=" text-2xl transition-all"
            href="/about">
            Горячее
        </Link>
        <Link
            className=" text-2xl transition-all"
            href="/about">
            Десерты
      
        </Link>
        <Link
            className=" text-2xl transition-all"
            href="/menu">
            Напитки
        </Link>
        
        <Link
            className=" text-2xl transition-all"
            href="/about">
            Пицца и сендвичи
        </Link>
        </div>

       
        <div className="container mx-auto p-3 flex justufy-center items-center gap-[50px]"> 
        <Link
                className=" text-2xl transition-all"
                href="susi"><div className="w-[400px]">
                <img className="w-full" src="/img/susi1.png" alt="" />
                </div>
                
            </Link>
        <img className="w-[400px]" src="/img/susi2.png" alt="" />
        <img className="w-[400px]" src="/img/susi3.png" alt="" />
        </div>

        <div className="container mx-auto p-3 flex justufy-center items-center gap-[250px]">

            <p>Суши с икрой капеллана 3 шт</p>
            <p>Суши с креветкой 3 шт</p>
            <p>Суши с лососем 3 шт</p>

        </div>

        </div>
        
  )
}