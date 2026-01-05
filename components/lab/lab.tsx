'use client';
import "./lab.css"

interface IndexProps {
  index: number;
  title: string;
  description: string;
  url: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

export default function Lab({ index, title, description, url, setModal }: IndexProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onMouseEnter={() => { setModal({ active: true, index }) }}
      onMouseLeave={() => { setModal({ active: false, index }) }}
      onClick={handleClick}
      className="lab flex flex-col md:flex-row max-w-4xl items-center mx-auto"
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}