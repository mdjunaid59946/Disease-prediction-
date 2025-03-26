import React from 'react';
import { X } from 'lucide-react';
import { Disease } from '../types/disease';

interface DiseaseDetailProps {
  disease: Disease;
  onClose: () => void;
}

export default function DiseaseDetail({ disease, onClose }: DiseaseDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{disease.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6">
          <img
            src={disease.imageUrl}
            alt={disease.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-gray-600 mb-8">{disease.description}</p>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Symptoms</h3>
              <ul className="list-disc list-inside space-y-2">
                {disease.symptoms.map((symptom, index) => (
                  <li key={index} className="text-gray-700">{symptom}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-green-600 mb-4">Precautions</h3>
              <ul className="list-disc list-inside space-y-2">
                {disease.precautions.map((precaution, index) => (
                  <li key={index} className="text-gray-700">{precaution}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-red-600 mb-4">Recommended Medicines</h3>
              <div className="space-y-4">
                {disease.medicines.map((medicine, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">{medicine.name}</h4>
                    <p className="text-gray-600">Dosage: {medicine.dosage}</p>
                    {medicine.warning && (
                      <p className="text-red-500 text-sm mt-1">Warning: {medicine.warning}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}