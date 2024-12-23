import React from 'react';
import Card from '@/components/ui/card';
import { ShoppingCart, Utensils, Scissors, Dumbbell, ChevronRight, Percent } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Grocery",
      description: "Discover a world of fresh, high-quality groceries at our Grocery Store. We take pride in offering you a wide range of products to meet all your daily needs.",
      discount: "15% to 90%",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Food, Restaurant & Sweets",
      description: "Indulge in a culinary journey with our delectable offerings in Food, Restaurant, and Sweets. Whether you're a food enthusiast or have a sweet tooth, we have something special for everyone.",
      discount: "Up To 25%",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      hoverColor: "hover:bg-orange-100"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Salon Services",
      description: "Pamper yourself with our luxurious Salon Services designed to enhance your beauty and well-being. At Our Salon, we offer a range of services to make you look and feel your best.",
      discount: "Up To 75%",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      hoverColor: "hover:bg-purple-100"
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Gym Services",
      description: "Elevate your fitness journey with our comprehensive Gym Services at Our Gym. We are committed to helping you achieve your health and wellness goals through professional guidance and state-of-the-art facilities.",
      discount: "Up To 75%",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Experience premium services under one roof with exclusive membership benefits and amazing discounts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`p-6 transition-all duration-300 ${service.bgColor} ${service.hoverColor} border-none`}
            >
              <div className="flex flex-col h-full">
                {/* Service Header */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${service.bgColor} ${service.iconColor}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-gray-900">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Discount Badge and CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                    <Percent className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="font-semibold text-blue-600">
                      {service.discount} OFF
                    </span>
                  </div>
                  
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Membership Banner */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Join Our 99 Membership Program
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Get exclusive access to all our services with unbeatable discounts and premium benefits.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;