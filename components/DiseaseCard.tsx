import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Disease } from '../types/disease';

interface DiseaseCardProps {
  disease: Disease;
  onClick: () => void;
}

export default function DiseaseCard({ disease, onClick }: DiseaseCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={disease.imageUrl}
          alt={disease.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{disease.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{disease.description}</p>
        <div className="flex items-center text-blue-600 text-sm font-medium group">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}