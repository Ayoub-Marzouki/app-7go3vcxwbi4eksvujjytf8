
'use client';

import Image from 'next/image';

export default func
  ret
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-4xl text-center py-8">
        <h1 className="text-6xl font-extrabold text-amber-400 mb-4 leading-tight">
          Aroma <span className="text-white">Coffee</span> Shop
        </h1>
        <p className="text-xl text-gray-300">
          Experience the Richness in Every Cup
        </p>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow w-full max-w-4xl">
        <div className="relative w-64 h-64 mb-8 rounded-full overflow-hidden shadow-lg border-4 border-amber-400">
          <Image
            src="/coffee-cup.png" 
            alt="Aroma Coffee Cup"
            layout="fill"
            objectFit="cover"
            className="animate-fade-in"
          />
        </div>

        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400 mb-4">
            Our Signature Brews
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From the robust Espresso to the creamy Latte, discover your perfect
            coffee moment with us. Crafted with passion, served with a smile.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-amber-300 mb-2">Espresso</h3>
            <p className="text-gray-400">Intense and rich, a true classic.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-amber-300 mb-2">Cappuccino</h3>
            <p className="text-gray-400">Creamy and frothy, perfectly balanced.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-amber-300 mb-2">Latte</h3>
            <p className="text-gray-400">Smooth and milky, a comforting delight.</p>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-4xl text-center py-8 mt-12 border-t border-gray-700">
        <p className="text-gray-500 text-sm">
          &copy; 2025 Aroma Coffee Shop. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
