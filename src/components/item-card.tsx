import Image from "next/image";

interface Cat {
  name: string;
  imgCat: string;
}

function ItemCard({ name, imgCat }: Cat) {
  console.log("ItemCard");
  return (
    <div className="w-52 border-2  border-gray-900 bg-slate-400 text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer">
      <Image
        src={imgCat}
        alt={name}
        width={800}
        height={100}
        className="h-40 object-cover"
      />
      <h2 className="p-2 text-center text-xl">{name}</h2>
    </div>
  );
}

export default ItemCard;
