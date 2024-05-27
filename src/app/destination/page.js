import Head from 'next/head';

const destinationsData = [
  {
    name: "Masjid al-Haram",
    description: "The largest mosque in the world, surrounding Islam's holiest place, the Kaaba.",
    image: "/img/Hero.png"
  },
  {
    name: "Mount Arafat",
    description: "A granite hill about 20 km southeast of Mecca, where the Prophet Muhammad delivered his Farewell Sermon.",
    image: "/img/arafat.png"
  },
  {
    name: "Al-Masjid an-Nabawi",
    description: "The mosque established and originally built by the Prophet Muhammad, situated in the city of Medina.",
    image: "/img/masjid-nabwi.jpg"
  },
  {
    name: "Jannat al-Mu'alla",
    description: "A cemetery in Mecca where many of the Prophet Muhammad's relatives are buried.",
    image: "/img/Jannat-Al-Mualla.png"
  },
  {
    name: "Quba Mosque",
    description: "The first mosque in the history of Islam, built by the Prophet Muhammad in Medina.",
    image: "/img/mosquee-quba.png"
  },
  {
    name: "Qiblatain Mosque",
    description: "Famous for its historical importance, it is where the direction of the Qibla was changed from Jerusalem to Mecca.",
    image: "/img/qiblatain-masjid.png"
  }
];

export default function Destinations() {
  return (
    <div className="min-h-screen bg-gold py-8">
      <Head>
        <title>Destinations - AL-EHED Tour And Travels</title>
        <meta name="description" content="Explore the holy destinations in Mecca and Medina during Umrah." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Destinations in Mecca and Medina</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="h-60 overflow-hidden">
                <img src={destination.image} alt={destination.name} className="w-full h-full object-cover"/>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-black">{destination.name}</h2>
                <p className="text-gray-700">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
