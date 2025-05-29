
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  const shippingCost = state.total > 75 ? 0 : 8.99;
  const tax = state.total * 0.08;
  const finalTotal = state.total + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'state', 'zipCode'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setStep(2);
  };

  const handlePayment = () => {
    // This is where Razorpay integration would go
    // For now, we'll simulate a successful payment
    toast.success('Payment successful! Redirecting to confirmation...');
    
    setTimeout(() => {
      // Clear cart
      dispatch({ type: 'CLEAR_CART' });
      
      // In a real app, redirect to order confirmation page
      toast.success('Order confirmed! Check your email for details.');
      window.location.href = '/';
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen pt-16 lg:pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-earth-800 mb-4">Your cart is empty</h1>
          <p className="text-earth-600 mb-8">Add some items to your cart to continue with checkout.</p>
          <Button 
            onClick={() => window.location.href = '/catalog'}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-cream-50">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 1 ? 'bg-terracotta-600 text-white' : 'bg-earth-200 text-earth-500'
            }`}>
              1
            </div>
            <div className={`w-16 h-0.5 ${step >= 2 ? 'bg-terracotta-600' : 'bg-earth-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 2 ? 'bg-terracotta-600 text-white' : 'bg-earth-200 text-earth-500'
            }`}>
              2
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-earth-800 mb-8 text-center">
            {step === 1 ? 'Shipping Information' : 'Payment'}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              {step === 1 ? (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-earth-800">Contact & Shipping Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContinueToPayment} className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="border-earth-200 focus:border-terracotta-400"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="border-earth-200 focus:border-terracotta-400"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="border-earth-200 focus:border-terracotta-400"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main Street"
                          required
                          className="border-earth-200 focus:border-terracotta-400"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="border-earth-200 focus:border-terracotta-400"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="border-earth-200 focus:border-terracotta-400"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="border-earth-200 focus:border-terracotta-400"
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white py-4 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        Continue to Payment
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-earth-800">Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Payment Method Selection */}
                      <div>
                        <Label className="text-base font-semibold text-earth-800 mb-3 block">
                          Payment Method
                        </Label>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-4 border border-earth-200 rounded-lg hover:border-terracotta-400 transition-colors cursor-pointer">
                            <input type="radio" name="payment" value="razorpay" defaultChecked className="text-terracotta-600" />
                            <div className="flex-1">
                              <p className="font-medium text-earth-800">Credit/Debit Card</p>
                              <p className="text-sm text-earth-600">Secure payment via Razorpay</p>
                            </div>
                            <div className="flex space-x-2">
                              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzAwNTFBNSIvPgo8cGF0aCBkPSJNMTMuNzUgN0gxMS41VjEzSDEzLjc1VjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="Visa" className="h-5" />
                              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iI0VCMDAxQiIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSI2IiBmaWxsPSIjRkY1RjAwIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMTAiIHI9IjYiIGZpbGw9IiNGRjVGMDAiLz4KPC9zdmc+Cg==" alt="Mastercard" className="h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Razorpay Notice */}
                      <div className="bg-sage-50 p-4 rounded-lg">
                        <p className="text-sm text-earth-700">
                          <strong>Secure Payment:</strong> Your payment information is protected by industry-standard encryption. 
                          We use Razorpay for secure payment processing.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <Button
                          onClick={handlePayment}
                          size="lg"
                          className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white py-4 rounded-full transition-all duration-300 hover:scale-105 animate-scale-pulse"
                        >
                          Pay ${finalTotal.toFixed(2)} - Complete Order
                        </Button>
                        
                        <Button
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="w-full border-earth-300 text-earth-700 hover:bg-earth-50"
                        >
                          Back to Shipping
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Order Summary */}
            <div>
              <Card className="shadow-lg sticky top-8">
                <CardHeader>
                  <CardTitle className="text-earth-800">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {state.items.map((item) => (
                        <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-sage-100 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-earth-800 truncate">{item.name}</p>
                            <p className="text-xs text-earth-600">
                              {item.size} | {item.color} | Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-earth-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-earth-200 pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-earth-600">Subtotal</span>
                        <span className="text-earth-800">${state.total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-earth-600">Shipping</span>
                        <span className="text-earth-800">
                          {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-earth-600">Tax</span>
                        <span className="text-earth-800">${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold pt-2 border-t border-earth-200">
                        <span className="text-earth-800">Total</span>
                        <span className="text-terracotta-600">${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
