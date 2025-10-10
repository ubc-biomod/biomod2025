import TeamMemberCard from '../components/TeamMemberCard';

function TeamPage() {
  const teamMembers = [
    { name: 'Abteen Arab', role: 'Wetlab (Co-Lead)' },
    { name: 'Anya Wongreantong', role: 'Computational' },
    { name: 'Charity Grey', role: 'Computational (Co-Lead)' },
    { name: 'Chloe Nguyen', role: 'Computational (Co-Lead)' },
    { name: 'James Horvat', role: 'Wetlab (Co-Lead)' },
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
