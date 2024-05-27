import Head from 'next/head';

const packagesData = [
  {
    name: "Economy Package",
    description: "Basic package including accommodation, transportation, and guided tours.",
    price: "$1000"
  },
  {
    name: "Standard Package",
    description: "Standard package with upgraded accommodations and additional amenities.",
    price: "$1500"
  },
  {
    name: "Deluxe Package",
    description: "Luxury package with premium accommodations, VIP services, and exclusive experiences.",
    price: "$2500"
  },
  {
    name: "Family Package",
    description: "Special package designed for families, including special accommodations and activities for all ages.",
    price: "$2000"
  }
];

export default function Packages() {
  return (
    <div className=" bg-darkGreen py-8">
      <Head>
        <title>Packages - AL-EHED Tour And Travels</title>
        <meta name="description" content="Explore different Umrah packages tailored to your needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Umrah Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.map((packageItem, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-black">{packageItem.name}</h2>
                <p className="text-gray-700">{packageItem.description}</p>
                <p className="text-blue-600 font-semibold mt-2">{packageItem.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
