
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center texture-overlay boho-pattern overflow-hidden">
        <FloatingElements />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-earth-800 mb-6 leading-tight">
              Embrace Your
              <span className="block text-terracotta-600 animate-scale-pulse">
                Free Spirit
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-earth-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our curated collection of boho-chic clothing that celebrates 
              individuality, comfort, and timeless style.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/catalog">
                <Button 
                  size="lg" 
                  className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Shop the Collection
                </Button>
              </Link>
              
              <Link to="/lookbook">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-sage-600 text-sage-700 hover:bg-sage-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  View Lookbook
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce-gentle">
            <ArrowDown className="w-6 h-6 text-earth-600" />
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Handpicked pieces that embody the essence of bohemian style
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collection Cards */}
            {[
              {
                title: "Earthen Dreams",
                description: "Flowy dresses in warm terracotta tones",
                image: "photo-1594736797933-d0401ba872fe",
                link: "/catalog?category=dresses"
              },
              {
                title: "Desert Wanderer",
                description: "Casual separates for the modern nomad",
                image: "photo-1515372039744-b8f02a3ae446",
                link: "/catalog?category=separates"
              },
              {
                title: "Sage Serenity",
                description: "Soft textures in calming green hues",
                image: "photo-1434389677669-e08b4cac3105",
                link: "/catalog?category=tops"
              }
            ].map((collection, index) => (
              <Link
                key={index}
                to={collection.link}
                className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-sage-200 to-terracotta-200 relative">
                  <img
                    src={`https://images.unsplash.com/${collection.image}?w=400&h=500&fit=crop`}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-cream-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-sage-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-earth-600 mb-6 leading-relaxed">
                Born from a love of free-spirited fashion and sustainable practices, 
                Boho Vibes celebrates the beauty of individuality. Each piece in our 
                collection tells a story of craftsmanship, comfort, and conscious living.
              </p>
              <p className="text-lg text-earth-600 mb-8 leading-relaxed">
                We believe fashion should be an expression of your authentic self, 
                flowing with the rhythm of your life while respecting our planet.
              </p>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  className="border-2 border-terracotta-600 text-terracotta-700 hover:bg-terracotta-600 hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                  alt="Boho lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-terracotta-300 rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-sage-300 rounded-full opacity-60 animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
