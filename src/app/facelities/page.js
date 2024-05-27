import Head from 'next/head';

const facilitiesData = [
  {
    name: "Hotel Accommodation",
    description: "Experience comfortable and convenient hotel accommodations near holy sites. Our hotels offer modern amenities, spacious rooms, and easy access to important pilgrimage locations, ensuring a restful stay during your spiritual journey.",
    image: "/img/hotel.jpg"
  },
  {
    name: "Transport Services",
    description: "Our reliable and safe transport services cover all holy destinations. With a fleet of modern vehicles and experienced drivers, we ensure timely and comfortable travel, allowing you to focus on your pilgrimage without any worries.",
    image: "/img/transport.jpg"
  },
  {
    name: "Guided Tours",
    description: "Enhance your pilgrimage experience with our expert guided tours. Our knowledgeable guides provide insightful information about historical and religious significance, helping you connect more deeply with each sacred site.",
    image: "/img/tour-guide.jpg"
  },
  {
    name: "Meal Services",
    description: "Enjoy delicious and hygienic meal services throughout your journey. We offer a variety of meals catering to different dietary preferences, ensuring you stay nourished and healthy during your pilgrimage.",
    image: "/img/meals.png"
  }
];

export default function Facilities() {
  return (
    <main className="flex-grow bg-darkGreen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Our Facilities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {facilitiesData.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="h-60 overflow-hidden">
                <img src={facility.image} alt={facility.name} className="w-full h-full object-cover"/>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-darkGreen">{facility.name}</h2>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
