export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="TEXTEE Logo"
            className="h-12 w-auto"
          />
          <h1 className="text-2xl font-bold text-orange-500">
            TEXTEE
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="text-orange-500 font-semibold mb-4">
              Premium Custom Apparel
            </p>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Custom
              <span className="text-orange-500 block">
                T-Shirts
              </span>
              For Your
              <span className="block">
                Brand
              </span>
            </h1>

            <p className="text-xl text-gray-300 mt-6 max-w-xl">
              Premium custom T-shirts, hoodies, sweatshirts and corporate merchandise
              for startups, businesses, schools and creators.
            </p>

            <p className="mt-6 text-gray-400 text-lg max-w-xl">
              TEXTEE helps startups, businesses, creators and schools
              create premium custom T-shirts, Hoodies, Sweatshirts and
              Merchandise with high-quality printing.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-semibold">
                Order Now
              </button>

              <button className="border border-gray-600 px-8 py-3 rounded-full hover:border-orange-500 hover:scale-105 transition-all duration-300">
                View Products
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center relative">
            <img
              src="/products/tshirt.png"
              alt="TEXTEE T-Shirt"
              className="w-[500px] drop-shadow-[0_0_60px_rgba(249,115,22,0.5)] hover:scale-110 transition-all duration-500"
            />
          </div>

        </div>
      </section>

      <section className="py-20 bg-zinc-950">
      </section>
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-orange-500">500+</h3>
              <p className="text-gray-400 mt-2">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">1000+</h3>
              <p className="text-gray-400 mt-2">Orders Delivered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">50+</h3>
              <p className="text-gray-400 mt-2">Corporate Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-orange-500">24/7</h3>
              <p className="text-gray-400 mt-2">Support</p>
            </div>

          </div>

        </div>
      </section>
      {/* Products Section */}

      <section
        id="products"
        className="py-24 px-6 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Products
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-zinc-900 rounded-2xl overflow-hidden">
              <img
                src="/products/tshirt.png"
                alt="T-Shirt"
                className="w-full h-72 object-contain bg-white"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  Custom T-Shirts
                </h3>
                <p className="text-gray-400 mt-2">
                  Premium cotton custom printed T-shirts.
                </p>
                <p className="text-orange-500 text-2xl font-bold mt-4">
                  ₹299
                </p>

                <a
                  href="https://wa.me/918601372054?text=I want to order Custom T-Shirt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl overflow-hidden">
              <img
                src="/products/hoodie.png"
                alt="Hoodie"
                className="w-full h-72 object-contain bg-white"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  Premium Hoodies
                </h3>
                <p className="text-gray-400 mt-2">
                  Stylish and comfortable hoodies.
                </p>
                <p className="text-orange-500 text-2xl font-bold mt-4">
                  ₹799
                </p>

                <a
                  href="https://wa.me/918601372054?text=I want to order Premium Hoodie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl overflow-hidden">
              <img
                src="/products/sweatshirt.png"
                alt="Sweatshirt"
                className="w-full h-72 object-contain bg-white"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  Sweatshirts
                </h3>
                <p className="text-gray-400 mt-2">
                  Premium winter collection.
                </p>
                <p className="text-orange-500 text-2xl font-bold mt-4">
                  ₹699
                </p>

                <a
  href="https://wa.me/918601372054?text=I want to order Sweatshirt"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg text-white font-semibold"
>
  Order on WhatsApp
</a>

              </div>   {/* p-6 close */}
            </div>   {/* Sweatshirt card close */}

            <div className="bg-zinc-900 rounded-2xl overflow-hidden">

              <img
                src="/products/cap.png"
                alt="Cap"
                className="w-full h-72 object-contain bg-white"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  Custom Caps
                </h3>

                <p className="text-gray-400 mt-2">
                  Premium custom printed caps.
                </p>

                <p className="text-orange-500 text-2xl font-bold mt-4">
                  ₹399
                </p>

                <a
                  href="https://wa.me/918601372054?text=I%20want%20to%20order%20Custom%20Cap"
                  target="_blank"
                  className="inline-block mt-4 bg-green-500 px-5 py-2 rounded-lg"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>



      </div>
    </section>

{/* About Section */ }

<section
  id="about"
  className="py-24 px-6 bg-black"
>
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-8">
      About TEXTEE
    </h2>

    <p className="text-gray-400 text-lg leading-8">
      TEXTEE is a premium custom apparel brand
      specializing in custom T-Shirts, Hoodies,
      Sweatshirts and Corporate Merchandise.

      We help startups, businesses, creators,
      schools and organizations build their brand
      through high-quality apparel and printing.
    </p>

  </div>
</section>
<section className="py-20 bg-black">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose <span className="text-orange-500">TEXTEE</span>
    </h2>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-zinc-900 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
        <p className="text-gray-400">
          High-quality fabrics with durable prints.
        </p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Fast Delivery</h3>
        <p className="text-gray-400">
          Quick production and shipping across India.
        </p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Bulk Discounts</h3>
        <p className="text-gray-400">
          Special pricing for large quantity orders.
        </p>
      </div>

      <div className="bg-zinc-900 p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Custom Printing</h3>
        <p className="text-gray-400">
          Fully customized branding and merchandise.
        </p>
      </div>

    </div>

  </div>
</section>
  {/* Pricing Section */ }
<section id="contact" className="py-20 bg-black">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-6">
      Contact <span className="text-orange-500">TEXTEE</span>
    </h2>

    <p className="text-gray-400 mb-8">
      Ready to create your custom apparel? Contact us today.
    </p>

    <a
      href="https://wa.me/918601372054"
      target="_blank"
      className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold"
    >
      WhatsApp Now
    </a>

  </div>
</section>
<section className="py-24 px-6 bg-zinc-950">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12">
      Pricing Packages
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-black p-8 rounded-2xl border border-zinc-800">
        <h3 className="text-2xl font-bold mb-4">
          Starter
        </h3>
        <p className="text-4xl font-bold text-orange-500 mb-6">
          ₹299
        </p>
        <p>1 Custom T-Shirt</p>
      </div>

      <div className="bg-black p-8 rounded-2xl border border-orange-500">
        <h3 className="text-2xl font-bold mb-4">
          Business
        </h3>
        <p className="text-4xl font-bold text-orange-500 mb-6">
          ₹999
        </p>
        <p>5 Custom T-Shirts</p>
      </div>

      <div className="bg-black p-8 rounded-2xl border border-zinc-800">
        <h3 className="text-2xl font-bold mb-4">
          Enterprise
        </h3>
        <p className="text-4xl font-bold text-orange-500 mb-6">
          Custom
        </p>
        <p>Bulk Orders & Corporate Merchandise</p>
      </div>

    </div>

  </div>

</section>
  {/* Customer Reviews */ }

  <section className="py-24 px-6 bg-black">

    <div className="max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 p-6 rounded-2xl">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Amazing print quality and fast delivery.
          </p>
          <h4 className="mt-4 font-bold">
            Rahul Sharma
          </h4>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Best custom apparel company for startups.
          </p>
          <h4 className="mt-4 font-bold">
            Priya singh
          </h4>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          ⭐⭐⭐⭐⭐
          <p className="mt-4">
            Excellent service and premium fabric quality.
          </p>
          <h4 className="mt-4 font-bold">
            Ayush Gupta
          </h4>
        </div>

      </div>

    </div>

  </section>
  {/* FAQ Section */ }

<section className="py-24 px-6 bg-zinc-950">

  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      <div className="bg-black p-6 rounded-2xl">
        <h3 className="font-bold text-xl mb-2">
          What is the minimum order quantity?
        </h3>
        <p className="text-gray-400">
          We accept both single-piece and bulk orders.
        </p>
      </div>

      <div className="bg-black p-6 rounded-2xl">
        <h3 className="font-bold text-xl mb-2">
          Do you offer custom printing?
        </h3>
        <p className="text-gray-400">
          Yes, we provide fully customized printing solutions.
        </p>
      </div>

      <div className="bg-black p-6 rounded-2xl">
        <h3 className="font-bold text-xl mb-2">
          How long does delivery take?
        </h3>
        <p className="text-gray-400">
          Usually 3–7 business days depending on quantity.
        </p>
      </div>

    </div>

  </div>

</section>
<section
  id="contact"
  className="py-24 px-6 bg-black"
>
  <div className="max-w-3xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-10">
      Contact Us
    </h2>

    <form className="space-y-4">

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-4 rounded bg-zinc-900"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-4 rounded bg-zinc-900"
      />

      <textarea
        placeholder="Message"
        rows={5}
        className="w-full p-4 rounded bg-zinc-900"
      />

      <button
        className="
        bg-orange-500
        px-6
        py-3
        rounded-full
        "
      >
        Get Free Quote
      </button>

    </form>

  </div>
</section>
<footer className="bg-zinc-950 py-8 text-center">

  <h3 className="text-2xl font-bold text-orange-500">
    TEXTEE
  </h3>

  <p className="text-gray-400 mt-3">
    Premium Custom Apparel & Printing Solutions
  </p>

  <p className="text-gray-500 mt-4">
    © 2026 TEXTEE. All Rights Reserved.
  </p>

</footer>
  <a
  href="https://wa.me/8601372054"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-6
    right-6
    bg-green-500
    px-5
    py-3
    rounded-full
    font-semibold
    text-white
    shadow-lg
    hover:bg-green-600
  "
>
  WhatsApp
</a>
</main >
);
}