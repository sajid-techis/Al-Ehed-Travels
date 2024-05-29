import Head from 'next/head';

export default function ContactUs() {
  const apiKey = process.env.NEXT_PUBLIC_MY_GMAP_API_KEY;

  return (
    <div className="bg-darkGreen py-8">
      <Head>
        <title>Contact Us - AL-EHED Tour And Travels</title>
        <meta name="description" content="Get in touch with AL-EHED Tour And Travels. Find our contact information and location on the map." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-4" id='contact'>
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map Section */}
          <div className="md:w-1/2 w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=33.705246,75.032445`}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:w-1/2 w-full bg-gold rounded-lg shadow-lg overflow-hidden p-6">
            <h2 className="text-2xl font-bold mb-4 text-black">Contact Information</h2>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> Your Address</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> your@email.com</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
