interface CourseCard {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CourseCard> = ({ title, description, image }) => {
  return (
    <div className="w-80 ml-2 mr-20 h-auto bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 h-32">{description}</p>
      </div>
    </div>
  );
};

export default Card;



