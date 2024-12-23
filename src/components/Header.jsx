import React from 'react';
import Card from '@/components/ui/card';
import Mart from '../assets/Mart.jpg'
import Salon from '../assets/Salon.jpg'
import Gym from '../assets/Gym.jpg'
import Food from '../assets/Food.jpg'

const Header = () => {
  const services = [
    {
      title: "AARNA MART",
      discount: "10-90%",
      image: Mart,
      bgColor: "bg-purple-900"
    },
    {
      title: "AARNA UNISEX SALON",
      discount: "75%",
      image: Salon,
      bgColor: "bg-purple-900"
    },
    {
      title: "AARNA GYM",
      discount: "75%",
      image: Gym,
      bgColor: "bg-purple-900"
    },
    {
      title: "AARNA FOOD COURT",
      discount: "25%",
      image: Food,
      bgColor: "bg-purple-900"
    }
  ];

  return (
    <section className="py-16 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <Card className={`overflow-hidden ${service.bgColor} transition-transform duration-300 group-hover:scale-105`}>
                {/* Service Image */}
                <div className="relative h-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Red Banner with Title */}
                  <div className="absolute top-4 left-0 bg-red-600 text-white py-2 px-4 transform -skew-x-12">
                    <span className="block transform skew-x-12 text-sm font-bold">
                      {service.title}
                    </span>
                  </div>
                  {/* Discount Badge */}
                  <div className="absolute bottom-4 left-0 bg-red-600 text-white py-2 px-4 transform -skew-x-12">
                    <div className="transform skew-x-12">
                      <span className="text-sm">UPTO</span>
                      <span className="text-2xl font-bold ml-2">{service.discount}</span>
                      <span className="text-sm ml-1">OFF</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Membership Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 ">Subscribe Membership</h2>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold">Rs.</span>
              <span className="text-5xl font-bold mx-2">99</span>
              <div className="flex flex-col items-start">
                <span className="text-red-600 font-semibold">for 31 Days</span>
              </div>
            </div>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors duration-300 transform hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;