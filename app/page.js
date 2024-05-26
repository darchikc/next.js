import Link from "next/link";

export default function app() {
  return (
    <div>


<div>
    <img className="w-full" src="/img/big.png" alt="" />
    </div>


<div className="container mx-auto p-3 flex justufy-center items-center gap-[300px]">
    
    <Link
            className=" text-2xl transition-all"
            href="/about">
            Промо и Акции
      
        </Link>
        <Link
            className=" text-2xl transition-all"
            href="/menu">
            Закуски и Салаты
        </Link>
        
        <Link
            className=" text-2xl transition-all"
            href="/about">
            Супы и Горячее
        </Link>
        </div>

        <div className="container mx-auto p-3 flex justufy-center items-center gap-[50px]"> 
        <img className="w-[400px]" src="/img/fish.png" alt="" /> 
        <img className="w-[400px]" src="/img/salat.png" alt="" />
        <img className="w-[400px]" src="/img/meat.png" alt="" />
        </div>

<div className="">
        <Link href="/menu">
      Посмотреть меню
    </Link>
    </div>

    <div className="backgroundColor blue flex justify-center items-center height 200px">
      <p>Что общего между Пиццей Пепперони, Роллом Филадельфия и освежающим Смузи? Это очень вкусно и всё по одной цене! NICEконцепция - настоящая находка для истинных гурманов: забудьте про цены, оставьте расчёты — вы пришли к нам, чтобы насладиться вкусом блюд. Так выбросьте из головы все лишнее, расслабьтесь и получите гастрономическое удовольствие в наших уютных интерьерах.
</p>
    </div>
        </div>
  )
}