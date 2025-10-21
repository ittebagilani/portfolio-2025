'use client';
import "./lab.css"

interface IndexProps {
  index: number;
  title: string;
  description: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

export default function Lab({ index, title, description, setModal }: IndexProps) {
  return (
    <div 
      onMouseEnter={() => { setModal({ active: true, index }) }} 
      onMouseLeave={() => { setModal({ active: false, index }) }} 
      className="lab flex flex-col md:flex-row max-w-6xl items-center mx-auto"
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}