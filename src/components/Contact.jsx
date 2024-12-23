import React from 'react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import Card from '@/components/ui/card';
import CardContent from '@/components/ui/cardcontent';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      content: "SNBA Consumers, Mansarowar Bhawan, NIT Road, Raipur, Chhattisgarh – 492001"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@snbaconsumers.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 910 09 222 890"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website",
      content: "www.snbaconsumers.com"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <div className="text-blue-600">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      rows={4} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="bg-gray-900 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
                  <div className="space-y-6">
                    <p className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3" />
                      Mansarowar Bhawan, NIT Road, Raipur, Chhattisgarh – 492001
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      +91 910 09 222 890
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 mr-3" />
                      info@snbaconsumers.com
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="h-64 bg-gray-800 rounded-lg">
                      <img 
                        src="/api/placeholder/800/400" 
                        alt="Map location" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;