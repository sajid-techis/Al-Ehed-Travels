import Head from 'next/head';
import { FaStar } from "react-icons/fa";

const reviewsData = [
  {
    name: "John Doe",
    review: "Amazing experience! The tour guides were knowledgeable and helpful.",
    rating: 5
  },
  {
    name: "Jane Smith",
    review: "Highly recommend! The accommodations were top-notch and the entire journey was well-organized.",
    rating: 4
  },
  {
    name: "David Johnson",
    review: "Had a wonderful time with AL-EHED Tour And Travels. Will definitely book again!",
    rating: 5
  },
  {
    name: "Emily Brown",
    review: "Great service and attention to detail. The staff went above and beyond to ensure a memorable experience.",
    rating: 4
  }
];

export default function Reviews() {
  return (
    <div className=" bg-gold py-8">
      <Head>
        <title>Customer Reviews - AL-EHED Tour And Travels</title>
        <meta name="description" content="Read customer reviews about their experiences with AL-EHED Tour And Travels." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Customer Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-bold text-black">{review.name}</h2>
                  <div className="flex ml-auto">
                    {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar
                        key={i}
                        className={`w-6 h-6 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
