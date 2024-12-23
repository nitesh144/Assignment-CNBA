import React from 'react';
import Card from '@/components/ui/card';
import { Store, ChefHat, Users, Award, Heart } from 'lucide-react';
import about from '../assets/About.png'

const AboutUsSection = () => {
  const stats = [
    { icon: <Users className="h-6 w-6 text-blue-600" />, value: "1000+", label: "Team Members" },
    { icon: <Store className="h-6 w-6 text-blue-600" />, value: "Multiple", label: "Locations" },
    { icon: <Heart className="h-6 w-6 text-blue-600" />, value: "100%", label: "Indian Owned" },
    { icon: <Award className="h-6 w-6 text-blue-600" />, value: "Quality", label: "Commitment" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        <img src={about} alt='About'/>

        {/* Company Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Arana Groups</h3>
            <p className="text-gray-600 leading-relaxed">
              As a leading supermarket chain in India, we take pride in being an Indian-owned retailer
              committed to providing our customers with good value, quality products, and exceptional
              customer service. Our family-owned business is dedicated to serving our communities and
              supporting the team members who make our success possible.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="font-bold text-xl text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Journey</h4>
            <p className="text-gray-600 leading-relaxed">
              Since our inception, we've grown and evolved, overcoming challenges and seizing opportunities. 
              Our journey is a narrative of resilience, success, and a commitment to making a meaningful 
              impact in every community we touch.
            </p>
          </div>
        </div>

        {/* Services Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <ChefHat className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Restaurant</h4>
                <p className="text-gray-600 leading-relaxed">
                  Nestled in the heart of Raipur, Chhattisgarh, we are more than just a restaurant; 
                  we are a celebration of flavors, a haven for food enthusiasts, and a gathering place 
                  for those who appreciate the art of gastronomy.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Initiative</h4>
                <p className="text-gray-600 leading-relaxed">
                  AARNA GROUPS is an initiative for society where consumers can purchase quality products 
                  and services under one roof at minimum cost, making quality lifestyle accessible to all.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        {/* <div className="text-center bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the difference of shopping with a company that puts community and quality first. 
            We're constantly expanding our product range to meet your evolving needs.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            Learn More About Us
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUsSection;