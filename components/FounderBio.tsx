import { Linkedin, Twitter } from 'lucide-react';

export default function FounderBio() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Leadership</h2>
      
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-gray-600">MI</span>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Michael Ishoko</h3>
            <p className="text-xl text-primary font-medium mb-4">Founder & CEO</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Visionary entrepreneur building Africa&apos;s future. With over a decade of experience in fintech
              and venture capital, Michael is passionate about democratizing access to investment opportunities 
              for African innovators.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Twitter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}