'use client';
import "./lab.css"

interface IndexProps {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

export default function Lab({ index, title, setModal }: IndexProps) {
  return (
    <div 
      onMouseEnter={() => { setModal({ active: true, index }) }} 
      onMouseLeave={() => { setModal({ active: false, index }) }} 
      className="lab"
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}