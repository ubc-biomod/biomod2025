import TeamMemberCard from '../components/TeamMemberCard';

function TeamPage() {
  const teamMembers = [
    { name: 'Abteen Arab', role: 'Wetlab', imageUrl: '/images/member_photos/abteen_a.jpeg' },
    { name: 'Anya Wongreantong', role: 'Computational', imageUrl: '/images/member_photos/anya_w.jpeg' },
    { name: 'Charity Grey', role: 'Computational', imageUrl: '/images/member_photos/charity_g.jpg' },
    { name: 'Chloe Nguyen', role: 'Computational', imageUrl: '/images/member_photos/chloe_n.png' },
    { name: 'James Horvat', role: 'Wetlab', imageUrl: '/images/member_photos/james_h.png' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800">
          Meet the Team
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
