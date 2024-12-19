import { Shield, Award, CheckCircle, BadgeCheck } from 'lucide-react';

const TrustedCompanies = ({ config }) => {
  const { heading, cards } = config;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading.title}
            {heading.spann && (
              <span className="text-primary"> {heading.spann}</span>
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {heading.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="w-full h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  {getIcon(index)}
                  {card.heading}
                </h3>
                <p className="text-gray-600">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getIcon = (index) => {
  const icons = [
    <Shield className="w-6 h-6 text-primary" />,
    <Award className="w-6 h-6 text-primary" />,
    <CheckCircle className="w-6 h-6 text-primary" />,
    <BadgeCheck className="w-6 h-6 text-primary" />
  ];
  return icons[index];
};

export default TrustedCompanies;