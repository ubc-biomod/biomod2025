interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl?: string;
}

function TeamMemberCard({ name, role, imageUrl }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="aspect-square bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl text-gray-400">-</span>
          </div>
        )}
      </div>
      <div className="p-3 text-center">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
