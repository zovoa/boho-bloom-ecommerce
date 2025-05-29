
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Lookbook = () => {
  const [selectedLook, setSelectedLook] = useState<number | null>(null);

  const looks = [
    {
      id: 1,
      title: "Desert Wanderer",
      description: "Embrace the nomadic spirit with flowing fabrics and earthy tones",
      image: "photo-1594736797933-d0401ba872fe",
      products: [
        { name: "Terracotta Maxi Dress", price: 89, id: "dress-001" },
        { name: "Woven Belt", price: 24, id: "belt-001" },
        { name: "Sage Kimono", price: 65, id: "kimono-001" }
      ]
    },
    {
      id: 2,
      title: "Forest Dreamer",
      description: "Connect with nature in soft greens and organic textures",
      image: "photo-1515372039744-b8f02a3ae446",
      products: [
        { name: "Sage Wrap Top", price: 45, id: "top-001" },
        { name: "Linen Wide Pants", price: 68, id: "pants-001" },
        { name: "Beaded Necklace", price: 32, id: "necklace-001" }
      ]
    },
    {
      id: 3,
      title: "Golden Hour",
      description: "Capture the warmth of sunset in flowing silhouettes",
      image: "photo-1434389677669-e08b4cac3105",
      products: [
        { name: "Cream Peasant Blouse", price: 52, id: "blouse-001" },
        { name: "Embroidered Skirt", price: 76, id: "skirt-001" },
        { name: "Fringe Bag", price: 89, id: "bag-001" }
      ]
    },
    {
      id: 4,
      title: "Riverside Serenity",
      description: "Flow like water in comfortable, breathable fabrics",
      image: "photo-1441986300917-64674bd600d8",
      products: [
        { name: "Flowing Jumpsuit", price: 94, id: "jumpsuit-001" },
        { name: "Crocheted Vest", price: 48, id: "vest-001" },
        { name: "Leather Sandals", price: 67, id: "sandals-001" }
      ]
    },
    {
      id: 5,
      title: "Mountain Mystic",
      description: "Channel ancient wisdom with layered textures and patterns",
      image: "photo-1487222477894-8943e31ef7b2",
      products: [
        { name: "Printed Midi Dress", price: 72, id: "dress-002" },
        { name: "Knit Cardigan", price: 86, id: "cardigan-001" },
        { name: "Statement Earrings", price: 28, id: "earrings-001" }
      ]
    },
    {
      id: 6,
      title: "Prairie Moon",
      description: "Dance under the stars in romantic, ethereal pieces",
      image: "photo-1469334031218-e382a71b716b",
      products: [
        { name: "Lace Maxi Dress", price: 98, id: "dress-003" },
        { name: "Velvet Shawl", price: 54, id: "shawl-001" },
        { name: "Turquoise Ring", price: 36, id: "ring-001" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-sage-50 to-cream-50 texture-overlay">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-800 mb-6 animate-slide-up">
            Lookbook
          </h1>
          <p className="text-lg md:text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Discover curated collections that tell a story. Each look captures the essence 
            of bohemian style, blending comfort with timeless elegance.
          </p>
        </div>
      </section>

      {/* Lookbook Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {looks.map((look, index) => (
              <div
                key={look.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedLook(selectedLook === look.id ? null : look.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${look.image}?w=500&h=700&fit=crop`}
                    alt={look.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-terracotta-300 transition-colors duration-300">
                      {look.title}
                    </h3>
                    <p className="text-cream-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {look.description}
                    </p>
                    
                    {/* Hotspots */}
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {look.products.slice(0, 3).map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-terracotta-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 200}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Expand Indicator */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-4 h-4 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Expanded Product Details */}
                {selectedLook === look.id && (
                  <div className="absolute inset-0 bg-earth-900/95 backdrop-blur-sm flex items-center justify-center p-6 animate-slide-up">
                    <div className="text-center text-white max-w-sm">
                      <h4 className="text-2xl font-bold mb-4 text-terracotta-300">{look.title}</h4>
                      <p className="text-cream-200 mb-6">{look.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {look.products.map((product) => (
                          <div key={product.id} className="flex justify-between items-center text-sm">
                            <span className="text-cream-100">{product.name}</span>
                            <span className="text-terracotta-300 font-semibold">${product.price}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="bg-terracotta-600 hover:bg-terracotta-700 text-white w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Navigate to catalog with look filter
                          window.location.href = `/catalog?look=${look.id}`;
                        }}
                      >
                        Shop This Look
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-terracotta-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
            Create Your Own Story
          </h2>
          <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
            Mix and match pieces from our collection to express your unique style. 
            Every outfit tells a story – what will yours say?
          </p>
          <Button 
            size="lg" 
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/catalog'}
          >
            Explore Full Collection
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;
