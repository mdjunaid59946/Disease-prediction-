import React from 'react';
import { Hospital } from '../types/user';
import { MapPin, Star, Phone } from 'lucide-react';

interface HospitalLocatorProps {
  hospitals: Hospital[];
  onClose: () => void;
}

export default function HospitalLocator({ hospitals, onClose }: HospitalLocatorProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Nearby Hospitals</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>

        <div className="p-6 grid gap-6">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <img
                  src={hospital.imageUrl}
                  alt={hospital.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-600">{hospital.address}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <p className="text-gray-600">{hospital.rating} / 5</p>
                    {hospital.distance && (
                      <span className="text-gray-500">• {hospital.distance.toFixed(1)} km away</span>
                    )}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.name + ' ' + hospital.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      Get Directions
                    </a>
                    <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Phone className="h-4 w-4" />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}