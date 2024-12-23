import React from 'react';
import Card  from '@/components/ui/card';
import { Building2, Target, Users, Utensils } from 'lucide-react';
import vision from '../assets/Vision.png'

const VisionSection = () => {
  const features = [
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "One-Stop Destination",
      description: "Access to Mart, Gym, Saloon, and Food Court all under one roof for ultimate convenience."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Exclusive Membership",
      description: "Our 99 Membership program offers unbeatable value with exclusive access to all facilities."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Vibrant Community",
      description: "Join a community that values wellness, beauty, and quality dining experiences."
    },
    {
      icon: <Utensils className="h-8 w-8 text-blue-600" />,
      title: "Holistic Approach",
      description: "Experience a balanced lifestyle with our comprehensive range of services and facilities."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 pt-10">Our Vision</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            At SNBA, we strive to create a seamless and vibrant community where convenience, 
            wellness, beauty, and dining meet. Our vision is to be the go-to destination for 
            those seeking convenience, quality, and a balanced life.
          </p>
          <img src={vision} alt='vision' />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6">
            Join us in transforming everyday living into something extraordinary
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;