import { FaTruck, FaUndoAlt, FaPiggyBank, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-primary text-3xl hover:scale-110 transform transition duration-300" />,
    title: "Free Shipping",
    description: "Free Shipping to Make Your Shopping Experience Seamless.",
  },
  {
    icon: <FaUndoAlt className="text-primary text-3xl hover:scale-110 transform transition duration-300" />,
    title: "Return Policy",
    description: "Flexible Returns to Ensure a Positive Shopping Experience.",
  },
  {
    icon: <FaPiggyBank className="text-primary text-3xl hover:scale-110 transform transition duration-300" />,
    title: "Save Money",
    description: "Shop Smarter and Save Big with Our Money-Saving Solutions.",
  },
  {
    icon: <FaHeadset className="text-primary text-3xl hover:scale-110 transform transition duration-300" />,
    title: "Support 24/7",
    description: "Unparalleled Support, Tailored to Your Needs 24 Hours a Day.",
  },
];

const FeatureHighlights = () => {
  return (
    <div className="bg-dark-primary text-light py-10 pb-[90px] flex justify-between">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="bg-dark-body p-8 rounded-full shadow-[0_0_25px_#F44FBF55]">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300 leading-[1.6]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureHighlights;
