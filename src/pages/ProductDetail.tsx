import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import { ArrowUp } from 'lucide-react';

export const products = [
  {
    id: '1',
    name: 'Terracotta Maxi Dress',
    price: 89,
    image: 'photo-1594736797933-d0401ba872fe',
    category: 'dresses',
    colors: ['terracotta', 'cream'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    description: 'Embrace the warmth of desert sunsets with this flowing terracotta maxi dress. Crafted from sustainable bamboo blend fabric, it features a flattering wrap silhouette and delicate hand-embroidered details.',
    images: [
      'photo-1594736797933-d0401ba872fe',
      'photo-1515372039744-b8f02a3ae446',
      'photo-1434389677669-e08b4cac3105'
    ],
    features: [
      'Made from sustainable bamboo blend',
      'Hand-embroidered details',
      'Wrap silhouette for flattering fit',
      'Machine washable on delicate cycle',
      'Fair trade certified'
    ],
    care: [
      'Machine wash cold with like colors',
      'Hang dry or tumble dry low',
      'Iron on low heat if needed',
      'Do not bleach'
    ],
    rating: 4.8,
    reviews: 124,
    stock: 15
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
    description: 'Versatile wrap top in soft sage green made from 100% organic cotton. Features adjustable ties for a customizable fit and delicate pintuck detailing.',
    images: [
      'photo-1515372039744-b8f02a3ae446',
      'photo-1594736797933-d0401ba872fe',
      'photo-1434389677669-e08b4cac3105'
    ],
    features: [
      '100% organic cotton',
      'Adjustable wrap tie',
      'Pintuck detailing',
      'Machine washable',
      'Made in USA'
    ],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Iron on medium heat',
      'Do not bleach'
    ],
    rating: 4.5,
    reviews: 89,
    stock: 22
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
    description: 'Hand-embroidered kimono with intricate floral patterns. Lightweight and perfect for layering over dresses or pairing with jeans for a boho-chic look.',
    images: [
      'photo-1434389677669-e08b4cac3105',
      'photo-1515372039744-b8f02a3ae446',
      'photo-1594736797933-d0401ba872fe'
    ],
    features: [
      'Hand-embroidered details',
      'Lightweight viscose fabric',
      'Versatile styling options',
      'Perfect for layering',
      'Belt loops for optional tie'
    ],
    care: [
      'Dry clean only',
      'Store folded to maintain shape',
      'Avoid direct sunlight',
      'Iron on low heat with cloth'
    ],
    rating: 4.9,
    reviews: 56,
    stock: 8
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
    description: 'Comfortable wide-leg pants in premium linen with an elasticated waistband and side pockets. Perfect for both casual and dressy occasions.',
    images: [
      'photo-1441986300917-64674bd600d8',
      'photo-1515372039744-b8f02a3ae446',
      'photo-1434389677669-e08b4cac3105'
    ],
    features: [
      '100% premium linen',
      'Elasticated waistband',
      'Side pockets',
      'High-rise fit',
      'Breathable fabric'
    ],
    care: [
      'Machine wash cold',
      'Hang dry',
      'Iron while damp',
      'Do not tumble dry'
    ],
    rating: 4.7,
    reviews: 112,
    stock: 18
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
    description: 'Handcrafted crochet vest with vintage charm. Features an open weave design and button-front closure for easy layering over blouses or tees.',
    images: [
      'photo-1487222477894-8943e31ef7b2',
      'photo-1515372039744-b8f02a3ae446',
      'photo-1434389677669-e08b4cac3105'
    ],
    features: [
      'Hand-crocheted cotton',
      'Button-front closure',
      'Open weave design',
      'Boho-chic style',
      'Lightweight layering'
    ],
    care: [
      'Hand wash cold',
      'Lay flat to dry',
      'Do not wring or twist',
      'Store folded'
    ],
    rating: 4.6,
    reviews: 43,
    stock: 12
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
    description: 'Elegant jumpsuit with wide legs and a fitted bodice. The deep V-neckline and back tie detail create a flattering silhouette for any occasion.',
    images: [
      'photo-1469334031218-e382a71b716b',
      'photo-1515372039744-b8f02a3ae446',
      'photo-1434389677669-e08b4cac3105'
    ],
    features: [
      'Lightweight rayon fabric',
      'Adjustable back tie',
      'Deep V-neckline',
      'Side pockets',
      'Hidden back zipper'
    ],
    care: [
      'Machine wash delicate',
      'Hang dry',
      'Steam to remove wrinkles',
      'Do not bleach'
    ],
    rating: 4.4,
    reviews: 76,
    stock: 9
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
    description: 'Romantic midi dress with delicate floral embroidery and puff sleeves. The smocked bodice and flowing skirt create a feminine silhouette.',
    images: [
      'photo-1490481651871-ab68de25d43d',
      'photo-1515372039744-b8f02a3ae446',
      'photo-1434389677669-e08b4cac3105'
    ],
    features: [
      'Cotton voile fabric',
      'Hand-embroidered details',
      'Smocked bodice',
      'Puff sleeves',
      'Mid-calf length'
    ],
    care: [
      'Machine wash cold',
      'Hang dry',
      'Iron on low heat',
      'Do not bleach'
    ],
    rating: 4.9,
    reviews: 134,
    stock: 21
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
    description: 'Classic peasant blouse with delicate embroidery and billowy sleeves. The relaxed fit and gathered neckline create effortless boho style.',
    images: [
      'photo-1445205170230-053b83016050',
      'photo-1515372039744-b8f02a3ae446',
      'photo-1434389677669-e08b4cac3105'
    ],
    features: [
      '100% cotton',
      'Hand-embroidered neckline',
      'Billowy sleeves',
      'Gathered neckline',
      'Relaxed fit'
    ],
    care: [
      'Machine wash cold',
      'Tumble dry low',
      'Iron on medium heat',
      'Do not bleach'
    ],
    rating: 4.3,
    reviews: 67,
    stock: 14
  }
];

const colorOptions = [
  { name: 'Terracotta', value: 'terracotta', color: 'bg-terracotta-500' },
  { name: 'Sage', value: 'sage', color: 'bg-sage-500' },
  { name: 'Cream', value: 'cream', color: 'bg-cream-300' },
  { name: 'Earth', value: 'earth', color: 'bg-earth-600' }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Find product by ID
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div className="min-h-screen pt-16 lg:pt-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-earth-800">Product not found</h1>
        <Link to="/catalog" className="text-terracotta-600 hover:underline mt-4 inline-block">
          Back to shop
        </Link>
      </div>
    </div>;
  }

  const sizeGuide = {
    'XS': { bust: '32-34"', waist: '24-26"', hips: '34-36"' },
    'S': { bust: '34-36"', waist: '26-28"', hips: '36-38"' },
    'M': { bust: '36-38"', waist: '28-30"', hips: '38-40"' },
    'L': { bust: '38-40"', waist: '30-32"', hips: '40-42"' },
    'XL': { bust: '40-42"', waist: '32-34"', hips: '42-44"' },
    'One Size': { bust: '36-40"', waist: '28-32"', hips: '38-42"' }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color');
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: `https://images.unsplash.com/${product.images[0]}?w=300&h=400&fit=crop`,
        size: selectedSize,
        color: selectedColor
      }
    });

    toast.success('Added to cart!');
  };

  // Get available colors for this product
  const availableColors = colorOptions.filter(color =>
    product.colors.includes(color.value)
  );

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-earth-600 mb-8">
          <Link to="/" className="hover:text-terracotta-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-terracotta-600 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-earth-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div
              className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg cursor-zoom-in relative"
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={`https://images.unsplash.com/${product.images[currentImageIndex]}?w=600&h=800&fit=crop`}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'
                  }`}
              />
              {isZoomed && (
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2">
                  <ArrowUp className="w-4 h-4 rotate-45" />
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-square w-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === index
                      ? 'border-terracotta-500 shadow-lg'
                      : 'border-transparent hover:border-sage-300'
                    }`}
                >
                  <img
                    src={`https://images.unsplash.com/${image}?w=200&h=200&fit=crop`}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-terracotta-600 mb-6">
                ${product.price}
              </p>
              <p className="text-lg text-earth-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-earth-800 mb-3">Color</h3>
              <div className="flex space-x-3">
                {availableColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all duration-200 ${selectedColor === color.value
                        ? 'border-earth-800 scale-110'
                        : 'border-earth-300 hover:border-earth-500'
                      }`}
                  >
                    <div className={`w-full h-full rounded-full ${color.color}`}></div>
                    {selectedColor === color.value && (
                      <div className="absolute inset-0 rounded-full bg-white/30 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {selectedColor && (
                <p className="text-sm text-earth-600 mt-2">
                  Selected: {availableColors.find(c => c.value === selectedColor)?.name}
                </p>
              )}
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-earth-800">Size</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-terracotta-600 hover:text-terracotta-700">
                      Size Guide
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-earth-800">Size Guide</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 gap-2 text-sm font-semibold text-earth-800 border-b pb-2">
                        <div>Size</div>
                        <div>Bust</div>
                        <div>Waist</div>
                        <div>Hips</div>
                      </div>
                      {Object.entries(sizeGuide).map(([size, measurements]) => (
                        <div key={size} className="grid grid-cols-4 gap-2 text-sm text-earth-600">
                          <div className="font-medium">{size}</div>
                          <div>{measurements.bust}</div>
                          <div>{measurements.waist}</div>
                          <div>{measurements.hips}</div>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              size="lg"
              className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Add to Cart
            </Button>

            {/* Product Features */}
            {product.features && (
              <div>
                <h3 className="font-semibold text-earth-800 mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-earth-600">
                      <div className="w-1.5 h-1.5 bg-terracotta-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Care Instructions */}
            {product.care && (
              <div>
                <h3 className="font-semibold text-earth-800 mb-3">Care Instructions</h3>
                <ul className="space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-2 text-earth-600">
                      <div className="w-1.5 h-1.5 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-earth-800 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== id) // Exclude current product
              .slice(0, 4) // Get first 4
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${item.image}?w=300&h=400&fit=crop`}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-earth-800 mb-2">{item.name}</h3>
                    <p className="text-terracotta-600 font-bold">${item.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;