'use client'

import Link from "next/link"

export default function Header() {
    return(
    
        <header className="container mx-auto p-8 flex justufy-center items-center">
        <nav className="flex gap-x-12 items-center ">
        <Link
                className=" text-2xl transition-all"
                href="/about">
                Меню
            </Link>
            <Link
                className=" text-2xl transition-all"
                href="/menu">
                О нас
            </Link>
            
            <Link
                className=" text-2xl transition-all"
                href="/about">
                Вакансии
            </Link>
            <Link
                className=" text-2xl transition-all"
                href="/menu">
                Меню
            </Link>
            <Link
                className=" text-2xl transition-all"
                href="/"><div className="w-[70px]">
                <img className="w-full" src="/img/logo.png" alt="" />
                </div>
                
            </Link>
            <Link
                className=" text-2xl transition-all"
                href="/ruels">
                Правила пользования
            </Link>
    
            <Link
                className=" text-2xl transition-all"
                href="/about">
                О нас
            </Link>
            <Link
                className=" text-2xl transition-all"
                href="/menu">
                Меню
            </Link>
            <Link
                className=" text-2xl transition-all"
                href="/menu">
                Меню
            </Link>
            
        </nav>
    </header>
    )
}



