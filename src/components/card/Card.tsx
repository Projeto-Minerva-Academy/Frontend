interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
