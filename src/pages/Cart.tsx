
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/context/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import { toast } from 'sonner';

const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity }
    });
  };

  const removeItem = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    });
    toast.success('Item removed from cart');
  };

  const shippingCost = state.total > 75 ? 0 : 8.99;
  const tax = state.total * 0.08;
  const finalTotal = state.total + shippingCost + tax;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen pt-16 lg:pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-32 h-32 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-16 h-16 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-earth-800 mb-4">Your cart is empty</h1>
          <p className="text-earth-600 mb-8 leading-relaxed">
            Discover our beautiful collection of boho-chic clothing and find 
            pieces that speak to your free spirit.
          </p>
          <Link to="/catalog">
            <Button 
              size="lg"
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-cream-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-earth-800 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-40 sm:h-32 rounded-lg overflow-hidden bg-sage-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-earth-800">{item.name}</h3>
                        <p className="text-earth-600 text-sm">
                          Size: {item.size} | Color: {item.color}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-earth-400 hover:text-red-500 transition-colors duration-200 p-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-earth-300 flex items-center justify-center hover:bg-sage-100 transition-colors duration-200"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-earth-800 font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-earth-300 flex items-center justify-center hover:bg-sage-100 transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-bold text-terracotta-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-earth-500">
                            ${item.price} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8">
              <h2 className="text-xl font-bold text-earth-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-earth-600">Subtotal ({state.itemCount} items)</span>
                  <span className="text-earth-800 font-medium">${state.total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-earth-600">Shipping</span>
                  <span className="text-earth-800 font-medium">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                
                {state.total < 75 && (
                  <p className="text-sm text-sage-600 bg-sage-50 p-3 rounded-lg">
                    Add ${(75 - state.total).toFixed(2)} more for free shipping!
                  </p>
                )}
                
                <div className="flex justify-between">
                  <span className="text-earth-600">Tax</span>
                  <span className="text-earth-800 font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-earth-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-earth-800">Total</span>
                    <span className="text-terracotta-600">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-earth-700 mb-2">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter code"
                    className="flex-1 border-earth-200 focus:border-terracotta-400"
                  />
                  <Button 
                    variant="outline" 
                    className="border-earth-300 text-earth-700 hover:bg-sage-50"
                  >
                    Apply
                  </Button>
                </div>
              </div>
              
              <Link to="/checkout" className="block w-full">
                <Button 
                  size="lg"
                  className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white py-4 rounded-full transition-all duration-300 hover:scale-105 animate-scale-pulse"
                >
                  Proceed to Checkout
                </Button>
              </Link>
              
              <Link to="/catalog" className="block w-full mt-4">
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-sage-600 text-sage-700 hover:bg-sage-50 py-4 rounded-full transition-all duration-300"
                >
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
