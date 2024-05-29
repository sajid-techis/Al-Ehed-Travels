import Head from 'next/head';
export default function Hero() {
 

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Al Ahed</title>
        <meta name="description" content="Explore the world with us!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex-grow bg-cover bg-center text-white"
        style={{ backgroundImage: 'url("/img/Hero3.jpg")' }}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6 mt-4">Welcome To AL-EHED Tour And Travels</h1>
          <p className="text-xl mb-6">Your Journey Begins Here.</p>
          <button className="bg-gold text-white py-2 px-4 rounded hover:bg-blue-700">
            Explore Now
          </button>
        </div>
      </main>
    </div>
  );
}
