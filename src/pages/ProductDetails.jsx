import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  X
} from 'lucide-react'

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Product images - using the real uploaded screenshots
  const productImages = [
    {
      id: 1,
      url: "./WhatsApp Image 2026-03-19 at 6.45.42 AM.jpeg",
      alt: 'Product Main Interface',
      thumbnail: "./WhatsApp Image 2026-03-19 at 6.45.42 AM.jpeg"
    },
    {
      id: 2,
      url: "./WhatsApp Image 2026-03-19 at 6.45.42 AM (1).jpeg",
      alt: 'Product Dashboard View',
      thumbnail: "./WhatsApp Image 2026-03-19 at 6.45.42 AM (1).jpeg"
    },
    {
      id: 3,
      url: "./WhatsApp Image 2026-03-19 at 6.45.43 AM.jpeg",
      alt: 'Product Analytics Screen',
      thumbnail: "./WhatsApp Image 2026-03-19 at 6.45.43 AM.jpeg"
    },
    {
      id: 4,
      url: "./WhatsApp Image 2026-03-19 at 6.45.43 AM (1).jpeg",
      alt: 'Product User Management',
      thumbnail: "./WhatsApp Image 2026-03-19 at 6.45.43 AM (1).jpeg"
    },
    {
      id: 5,
      url: "./WhatsApp Image 2026-03-19 at 6.45.44 AM.jpeg",
      alt: 'Product Settings Interface',
      thumbnail: "./WhatsApp Image 2026-03-19 at 6.45.44 AM.jpeg"
    },
    {
      id: 6,
      url: "./WhatsApp Image 2026-03-19 at 6.45.45 AM.jpeg",
      alt: 'Product Mobile View',
      thumbnail: "./WhatsApp Image 2026-03-19 at 6.45.45 AM.jpeg"
    },
    {
      id: 7,
      url: "./WhatsApp Image 2026-03-19 at 6.45.45 AM (1).jpeg",
      alt: 'Product Report Generation',
      thumbnail: "./WhatsApp Image 2026-03-19 at 6.45.45 AM (1).jpeg"
    },
    {
      id: 8,
      url: "./WhatsApp Image 2026-03-19 at 6.45.46 AM.jpeg",
      alt: 'Product Integration Panel',
      thumbnail: "./WhatsApp Image 2026-03-19 at 6.45.46 AM.jpeg"
    }
  ]

  const product = {
    id: 1,
    name: 'Complete Educational Management Platform',
    price: 299.99,
    originalPrice: 499.99,
    rating: 4.8,
    reviews: 1247,
    description: 'Transform your institution with our comprehensive platform that unifies alumni management, learning management system, and student administration. One solution for all your educational needs.',
    features: [
      'Complete alumni network management',
      'Learning Management System with syllabus upload',
      'Automated test paper generation',
      'Student administration and records',
      'Career services and job placement',
      'Unified analytics dashboard',
      'Mobile app access',
      '24/7 customer support'
    ],
    sizes: ['Small', 'Medium', 'Large', 'Enterprise'],
    colors: [
      { name: 'Blue', value: 'bg-blue-600' },
      { name: 'Purple', value: 'bg-purple-600' },
      { name: 'Green', value: 'bg-green-600' },
      { name: 'Orange', value: 'bg-orange-600' }
    ],
    inStock: true,
    category: 'Educational Platform',
    brand: 'iMentor',
    sku: 'IM-001-EDU'
  }

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', { ...product, quantity, selectedSize, selectedColor })
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleShare = () => {
    // Share logic
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary-600 transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/products" className="text-gray-500 hover:text-primary-600 transition-colors">Products</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="aspect-square bg-white bg-opacity-50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white border-opacity-20">
                <img
                  src={productImages[selectedImage].url}
                  alt={productImages[selectedImage].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setSelectedImage((prev) => (prev - 1 + productImages.length) % productImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-3 shadow-xl hover:bg-opacity-100 transition-all duration-300 border border-white border-opacity-20"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={() => setSelectedImage((prev) => (prev + 1) % productImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-3 shadow-xl hover:bg-opacity-100 transition-all duration-300 border border-white border-opacity-20"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                {product.inStock && (
                  <span className="bg-green-500 bg-opacity-90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    In Stock
                  </span>
                )}
                <span className="bg-red-500 bg-opacity-90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  -40% OFF
                </span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === index
                      ? 'border-primary-600 ring-4 ring-primary-200 shadow-xl transform scale-105'
                      : 'border-white border-opacity-30 hover:border-primary-300 hover:shadow-lg'
                    } bg-white bg-opacity-50 backdrop-blur-sm`}
                >
                  <img
                    src={image.thumbnail}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white border-opacity-20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600 font-medium bg-primary-100 bg-opacity-50 px-3 py-1 rounded-full">{product.brand}</span>
                <button
                  onClick={handleWishlist}
                  className="p-3 rounded-2xl bg-white bg-opacity-50 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-70 transition-all duration-300 shadow-lg"
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-700">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                <button onClick={handleShare} className="p-2 rounded-xl bg-white bg-opacity-50 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-70 transition-all duration-300">
                  <Share2 className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="bg-red-100 text-red-600 px-3 py-2 rounded-xl text-sm font-semibold">
                  Save ${product.originalPrice - product.price}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white border-opacity-20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white border-opacity-20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white border-opacity-20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Package Size</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-2xl border-2 text-sm font-semibold transition-all duration-300 ${selectedSize === size
                        ? 'border-primary-600 bg-primary-600 text-white shadow-lg transform scale-105'
                        : 'border-white border-opacity-30 bg-white bg-opacity-50 hover:bg-opacity-70 text-gray-700'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white border-opacity-20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Theme Color</h3>
              <div className="flex space-x-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-12 h-12 rounded-full ${color.value} border-3 transition-all duration-300 ${selectedColor === color.name ? 'border-gray-900 shadow-lg transform scale-110' : 'border-white border-opacity-50'
                      }`}
                  >
                    {selectedColor === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-full p-1">
                          <Check className="h-3 w-3 text-gray-900" />
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white border-opacity-20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quantity</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleQuantityChange('decrease')}
                      className="p-3 rounded-2xl bg-white bg-opacity-50 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-70 transition-all duration-300 shadow-lg"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-20 text-center text-2xl font-bold text-gray-900">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange('increase')}
                      className="p-3 rounded-2xl bg-white bg-opacity-50 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-70 transition-all duration-300 shadow-lg"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-2xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  <button className="bg-white bg-opacity-60 backdrop-blur-sm text-gray-900 py-4 px-6 rounded-2xl font-bold hover:bg-opacity-80 transition-all duration-300 border border-white border-opacity-20 shadow-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl border border-white border-opacity-20 hover:bg-opacity-80 transition-all duration-300">
                <Truck className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <span className="text-sm font-semibold text-gray-900">Free Shipping</span>
              </div>
              <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl border border-white border-opacity-20 hover:bg-opacity-80 transition-all duration-300">
                <Shield className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <span className="text-sm font-semibold text-gray-900">Secure Payment</span>
              </div>
              <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl border border-white border-opacity-20 hover:bg-opacity-80 transition-all duration-300">
                <RefreshCw className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <span className="text-sm font-semibold text-gray-900">30-Day Returns</span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white border-opacity-20">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">SKU:</span>
                  <span className="ml-2 text-gray-900 font-medium">{product.sku}</span>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 text-gray-900 font-medium">{product.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Gallery Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productImages.map((image, index) => (
              <div key={image.id} className="group">
                <div className="aspect-square bg-white bg-opacity-60 backdrop-blur-lg rounded-3xl overflow-hidden mb-6 shadow-xl border border-white border-opacity-20 hover:shadow-2xl transition-all duration-300">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{image.alt}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {index === 0 && "Main dashboard interface showing comprehensive alumni management features with real-time analytics."}
                  {index === 1 && "Advanced analytics panel with detailed insights and performance metrics for institutional tracking."}
                  {index === 2 && "User management system with role-based access control and comprehensive profile management."}
                  {index === 3 && "Event management module with calendar integration and automated communication tools."}
                  {index === 4 && "Settings and configuration panel for customizing the platform to match institutional needs."}
                  {index === 5 && "Mobile-responsive design ensuring seamless access across all devices and platforms."}
                  {index === 6 && "Report generation system with customizable templates and automated scheduling."}
                  {index === 7 && "Integration hub connecting with existing educational systems and third-party services."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
