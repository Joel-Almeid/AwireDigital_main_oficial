import { User } from "lucide-react";

interface ParticipantCardProps {
  name: string;
  role: string;
  affiliation: string;
  description: string;
  onClick?: () => void;
}

const ParticipantCard = ({ name, role, affiliation, description, onClick }: ParticipantCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover-lift cursor-pointer" onClick={onClick}>
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4">
          <User size={48} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-accent font-semibold mb-1">{role}</p>
        <p className="text-sm text-muted-foreground mb-3">{affiliation}</p>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ParticipantCard;
