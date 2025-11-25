export default function TrustSignals() {
  const partners = [
    { name: 'NGTech', logo: 'NT' },
    { name: 'Uppermark', logo: 'UM' },
    { name: 'African Ventures', logo: 'AV' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium mb-8">Backed by leading organizations and early believers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-gray-700 font-bold">{partner.logo}</span>
                </div>
                <span className="text-gray-700 font-semibold text-lg">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}