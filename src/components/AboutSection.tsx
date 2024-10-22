import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">About Avasaram</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Avasaram is a cutting-edge job portal designed to connect talented professionals with their dream careers. Our mission is to revolutionize the job search process by providing a platform that goes beyond traditional job listings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Target size={48} className="mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">To empower job seekers and employers by creating meaningful connections and fostering career growth.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users size={48} className="mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Our Community</h3>
            <p className="text-gray-600">A diverse network of professionals, from fresh graduates to industry veterans, all seeking new opportunities.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Zap size={48} className="mx-auto mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Our Innovation</h3>
            <p className="text-gray-600">Leveraging advanced technology to provide personalized job recommendations and streamline the application process.</p>
          </div>
        </div>
        <div className="bg-indigo-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">Our Motivation</h3>
          <p className="text-gray-700 leading-relaxed">
            In today's fast-paced job market, we recognized the need for a more efficient and user-friendly job search experience. Avasaram was born out of the desire to create a platform that not only connects job seekers with opportunities but also provides valuable resources for career development. We believe that everyone deserves a chance to find a job that aligns with their passions and skills, and we're committed to making that process as smooth and rewarding as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;