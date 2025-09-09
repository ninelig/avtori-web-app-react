import { Link } from "react-router-dom";
import { Card, CardContent, Button } from "../components/ui";

export default function HomePage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      {/* Hero Section */}
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* <section className="relative h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"> */}
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/tattoo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (optional for dark effect) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
         Your Tattoo Journey Starts Here.
        </h1>
        <p className="text-lg md:text-2xl mb-6">
            Ink That Speaks Your Story!
        </p>
        <Link to="/shop" className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Shop Now
        </Link>
      </div>
    </section>
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
               style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Wear the Art. Live the Ink.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Unique tattoo, prints, and accessories.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-100 hover:bg-gray-800">
              Custom Designs
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 max-w-6xl mx-auto px-4"style={{ backgroundImage: "url('/images/home_top-scaled.jpg')" }}>
        <h2 className="text-3xl font-bold mb-8 text-center">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Apparel", "Prints & Posters", "Tattoo Supplies", "Accessories"].map(
            (col, idx) => (
              <Card key={idx} className="group overflow-hidden relative cursor-pointer">
                <img
                  src={`/images/collection-${idx + 1}.jpg`}
                  alt={col}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                />
                <CardContent className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xl font-semibold">{col}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Bestsellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <Card key={id} className="overflow-hidden">
                <img
                  src={`/images/product-${id}.jpg`}
                  alt={`Product ${id}`}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Product {id}</h3>
                  <p className="mb-2">$29.99</p>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Artist */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <img
          src="/images/facetattoo.jpg"
          alt="Tattoo Artist"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-600"
        />
        <h2 className="text-3xl font-bold mb-4">Meet the Artist</h2>
        <p className="mb-6 text-gray-300">
          Inspired by traditional and modern tattoo styles, each piece is crafted
          to reflect individuality and bold expression.
        </p>
        <Button variant="outline" className="border-gray-300 text-gray-100 hover:bg-gray-800">
          See Portfolio
        </Button>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["The detail is insane!", "Feels like wearing a tattoo.", "Absolutely love the quality."].map(
              (quote, idx) => (
                <Card key={idx} className="p-6 bg-gray-800 border-gray-700">
                  <p className="italic">“{quote}”</p>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

     

     
    </div>
  );
}
