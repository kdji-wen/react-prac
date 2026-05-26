export default function AnimatedCarDealershipWebsite() {
  const cars = [
    {
      name: 'Apex GT',
      year: '2026',
      price: '$48,900',
      image:
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Velocity X',
      year: '2025',
      price: '$62,300',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    },
    {
      name: 'Midnight RS',
      year: '2026',
      price: '$71,500',
      image:
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-[0.3em]">VELOCITY</h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-zinc-300">
            <a href="#inventory" className="hover:text-white transition">
              Inventory
            </a>
            <a href="#featured" className="hover:text-white transition">
              Featured
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury car"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        </div>

        <div className="relative z-10 text-center max-w-4xl animate-[fadeIn_1.5s_ease]">
          <p className="uppercase tracking-[0.4em] text-zinc-400 mb-4">
            Premium Performance Dealership
          </p>

          <h2 className="text-5xl md:text-8xl font-black leading-none mb-6">
            DRIVE
            <br />
            THE FUTURE
          </h2>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Discover luxury performance vehicles engineered for speed,
            precision, and unforgettable driving experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
              Browse Inventory
            </button>

            <button className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
              Schedule Test Drive
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400 text-sm tracking-widest uppercase">
          Scroll
        </div>
      </section>

      <section id="featured" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-zinc-500 mb-3">
                Featured Collection
              </p>
              <h3 className="text-4xl md:text-6xl font-bold">
                Luxury Meets Speed
              </h3>
            </div>

            <p className="text-zinc-400 max-w-xl">
              Hand-selected premium vehicles with cutting-edge engineering,
              modern interiors, and elite performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div
                key={car.name}
                className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold">{car.name}</h4>
                      <p className="text-zinc-400">{car.year}</p>
                    </div>

                    <span className="text-xl font-semibold text-white">
                      {car.price}
                    </span>
                  </div>

                  <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="inventory"
        className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Why Choose Velocity
          </p>

          <h3 className="text-4xl md:text-6xl font-bold mb-16">
            Built Around Drivers
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Elite Inventory',
                text: 'Curated selection of high-performance luxury vehicles.',
              },
              {
                title: 'Flexible Financing',
                text: 'Custom financing options tailored to your lifestyle.',
              },
              {
                title: 'Premium Service',
                text: 'White-glove customer experience from start to finish.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition duration-500"
              >
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-zinc-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center bg-zinc-950 border border-white/10 rounded-[2rem] p-10 md:p-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Contact Us
          </p>

          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Ready To Drive?
          </h3>

          <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
            Schedule a private viewing or test drive with our performance
            specialists today.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-white/10 rounded-xl px-5 py-4 w-full md:w-96 outline-none focus:border-white/40"
            />

            <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
