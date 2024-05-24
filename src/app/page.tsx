import ItemCard from "@/components/item-card";

export default function Home() {
  console.log("Home");
  let linkImage = "https://cdn2.thecatapi.com/images";
  return (
    <main>
      <header className="m-8">
        <h1 className="text-center text-3xl font-bold uppercase">
          Cat Collection
        </h1>
      </header>
      <div className="m-8 flex justify-center">
        <div className="grid grid-cols-4 gap-5">
          <ItemCard name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
          <ItemCard name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
          <ItemCard name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
          <ItemCard name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
          <ItemCard name="Aegean" imgCat={`${linkImage}/ozEvzdVM-.jpg`} />
          <ItemCard
            name="American Bobtail"
            imgCat={`${linkImage}/hBXicehMA.jpg`}
          />
          <ItemCard name="Bambino" imgCat={`${linkImage}/5AdhMjeEu.jpg`} />
          <ItemCard name="Kurilian" imgCat={`${linkImage}/NZpO4pU56M.jpg`} />
        </div>
      </div>
    </main>
  );
}
