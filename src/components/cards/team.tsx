import Image from "next/image";

export interface TeamCardProps {
  name: string;
  role: string;
  imageUrl: string;
}

/**
 * Reusable Team Card Component
 * Displays team member image, name, and role
 */
const TeamCard = ({ name, role, imageUrl }: TeamCardProps) => {
  return (
    <section className="team-card">
      
      {/* Image Container */}
      <div className="relative w-75.5 h-80.5 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-4xl object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="pt-3">
        <h3 className="name">{name}</h3>
        <p className="role text-slate-gray">{role}</p>
      </div>

    </section>
  );
};

export default TeamCard;

