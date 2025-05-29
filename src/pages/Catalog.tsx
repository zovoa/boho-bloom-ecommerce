import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Catalog = () => {
  const { dispatch } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  // Mock product data with clothing images
  const products = [
    {
      id: '1',
      name: 'Terracotta Maxi Dress',
      price: 89,
      image: 'photo-1594736797933-d0401ba872fe',
      category: 'dresses',
      colors: ['terracotta', 'cream'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      description: 'Flowing maxi dress in warm terracotta tones'
    },
    {
      id: '2',
      name: 'Sage Wrap Top',
      price: 45,
      image: 'photo-1515372039744-b8f02a3ae446',
      category: 'tops',
      colors: ['sage', 'cream'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: false,
      description: 'Versatile wrap top in soft sage green'
    },
    {
      id: '3',
      name: 'Embroidered Kimono',
      price: 78,
      image: 'photo-1434389677669-e08b4cac3105',
      category: 'outerwear',
      colors: ['cream', 'earth'],
      sizes: ['One Size'],
      isNew: true,
      description: 'Hand-embroidered kimono with intricate patterns'
    },
    {
      id: '4',
      name: 'Linen Wide Pants',
      price: 68,
      image: 'photo-1441986300917-64674bd600d8',
      category: 'pants',
      colors: ['sage', 'cream', 'earth'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: false,
      description: 'Comfortable wide-leg pants in premium linen'
    },
    {
      id: '5',
      name: 'Crocheted Vest',
      price: 48,
      image: 'photo-1487222477894-8943e31ef7b2',
      category: 'tops',
      colors: ['cream', 'sage'],
      sizes: ['S', 'M', 'L'],
      isNew: true,
      description: 'Handcrafted crochet vest with vintage charm'
    },
    {
      id: '6',
      name: 'Flowing Jumpsuit',
      price: 94,
      image: 'photo-1469334031218-e382a71b716b',
      category: 'jumpsuits',
      colors: ['earth', 'terracotta'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: false,
      description: 'Elegant jumpsuit perfect for any occasion'
    },
    {
      id: '7',
      name: 'Boho Midi Dress',
      price: 72,
      image: 'photo-1490481651871-ab68de25d43d',
      category: 'dresses',
      colors: ['sage', 'cream'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      description: 'Romantic midi dress with floral details'
    },
    {
      id: '8',
      name: 'Peasant Blouse',
      price: 52,
      image: 'photo-1445205170230-053b83016050',
      category: 'tops',
      colors: ['cream', 'terracotta'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: false,
      description: 'Classic peasant blouse with delicate embroidery'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'dresses', label: 'Dresses' },
    { value: 'tops', label: 'Tops' },
    { value: 'pants', label: 'Pants' },
    { value: 'outerwear', label: 'Outerwear' },
    { value: 'jumpsuits', label: 'Jumpsuits' },
    { value: 'accessories', label: 'Accessories' }
  ];

  const colors = [
    { value: 'terracotta', label: 'Terracotta', color: 'bg-terracotta-500' },
    { value: 'sage', label: 'Sage', color: 'bg-sage-500' },
    { value: 'cream', label: 'Cream', color: 'bg-cream-300' },
    { value: 'earth', label: 'Earth', color: 'bg-earth-600' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, selectedColors, selectedSizes, priceRange, sortBy]);

  const handleColorFilter = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter(c => c !== color));
    }
  };

  const handleSizeFilter = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    }
  };

  const handleQuickAdd = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: `https://images.unsplash.com/${product.image}?w=300&h=400&fit=crop`,
        size: product.sizes[0],
        color: product.colors[0]
      }
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-sage-50 to-cream-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-800 mb-4">
            Shop Collection
          </h1>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Discover pieces that speak to your soul. Each item is carefully curated 
            to embody the free-spirited bohemian lifestyle.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-earth-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.value
                        ? 'bg-terracotta-100 text-terracotta-700 font-medium'
                        : 'text-earth-600 hover:bg-sage-50'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-earth-800 mb-4">Colors</h3>
              <div className="space-y-3">
                {colors.map((color) => (
                  <div key={color.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={color.value}
                      checked={selectedColors.includes(color.value)}
                      onCheckedChange={(checked) => handleColorFilter(color.value, !!checked)}
                    />
                    <div className={`w-4 h-4 rounded-full ${color.color} border border-earth-300`}></div>
                    <label htmlFor={color.value} className="text-earth-700 cursor-pointer">
                      {color.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-earth-800 mb-4">Sizes</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={size}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={(checked) => handleSizeFilter(size, !!checked)}
                    />
                    <label htmlFor={size} className="text-earth-700 cursor-pointer text-sm">
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-earth-800 mb-4">Price Range</h3>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-50">Under $50</SelectItem>
                  <SelectItem value="50-80">$50 - $80</SelectItem>
                  <SelectItem value="80-120">$80 - $120</SelectItem>
                  <SelectItem value="120">Over $120</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort and Results */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <p className="text-earth-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img
                        src={`https://images.unsplash.com/${product.image}?w=400&h=500&fit=crop`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-terracotta-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                          New
                        </span>
                      )}
                      <div className="absolute inset-0 bg-earth-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-earth-800 mb-2 group-hover:text-terracotta-600 transition-colors duration-200">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-earth-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-terracotta-600">
                        ${product.price}
                      </span>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleQuickAdd(product);
                        }}
                        className="bg-sage-600 hover:bg-sage-700 text-white transition-all duration-300 hover:scale-105"
                      >
                        Quick Add
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-earth-800 mb-2">No products found</h3>
                <p className="text-earth-600 mb-6">Try adjusting your filters to see more results.</p>
                <Button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedColors([]);
                    setSelectedSizes([]);
                    setPriceRange('all');
                  }}
                  className="bg-terracotta-600 hover:bg-terracotta-700 text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
