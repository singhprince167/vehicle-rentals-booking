"use client";

const twoWheelers = [
  {
    name: "Honda Activa 6G",
    img: "https://cdn.bikedekho.com/processedimages/honda/activa-6g/source/activa-6g65e80a524ce81.jpg",
    specs: "109cc • 2 Seater • Mileage ~45 kmpl",
    price: "₹600/day",
    type: "scooty",
  },
  {
    name: "Bajaj Pulsar 150",
    img: "https://cdn.bikedekho.com/processedimages/bajaj/bajaj-pulsar-150/source/bajaj-pulsar-150683044ac179cc.jpg",
    specs: "150cc • 2 Seater • Mileage ~40 kmpl",
    price: "₹900/day",
    type: "bike",
  },
  {
    name: "Royal Enfield Classic 350",
    img: "https://cdn.bikedekho.com/processedimages/royal-enfield/classic350/source/classic35068b6db53d4ce7.jpg",
    specs: "350cc • 2 Seater • Mileage ~35 kmpl",
    price: "₹1600/day",
    type: "bullet",
  },
];

const fourWheelers = [
  {
    name: "Maruti Suzuki Swift",
    img: "https://imgd-ct.aeplcdn.com/664x415/n/qim0egb_1840516.jpg?q=80",
    specs: "Petrol • 5 Seater • AC",
    price: "₹2500/day",
  },
  {
    name: "Hyundai Creta",
    img: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/106815/creta-exterior-left-side-view-4.jpeg?isig=0&q=80",
    specs: "Diesel • 5 Seater • AC",
    price: "₹4000/day",
  },
];

function Grid({items}:{items: any[]}){
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((v) => (
        <div key={v.name} className="group rounded-xl border overflow-hidden">
          <img className="h-44 w-full object-cover" src={v.img} alt={v.name} />
          <div className="p-4">
            <h3 className="font-medium">{v.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{v.specs}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-semibold">{v.price}</span>
              <a className="text-sm underline" href="/booking">Book</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function VehiclesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Vehicles for Rent</h1>
      <p className="mt-2 text-muted-foreground">Choose from well-maintained two-wheelers and four-wheelers. Delivery available across Kathgodam & nearby.</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Two-Wheelers</h2>
        <Grid items={twoWheelers} />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Four-Wheelers</h2>
        <Grid items={fourWheelers} />
      </section>
    </main>
  );
}