import React, { useState } from 'react';
import { diseases } from './data/diseases';
import { hospitals } from './data/hospitals';
import { User } from './types/user';
import SearchBox from './components/SearchBox';
import DiseaseCard from './components/DiseaseCard';
import DiseaseDetail from './components/DiseaseDetail';
import LoginModal from './components/LoginModal';
import HospitalLocator from './components/HospitalLocator';
import { Disease } from './types/disease';
import { Heart, Guitar as Hospital, Grid3X3 } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDisease, setSelectedDisease] = useState<Disease | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(true);
  const [showHospitals, setShowHospitals] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const filteredDiseases = diseases.filter(disease =>
    disease.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowLogin(false);
  };

  const categories = Array.from(new Set(diseases.map(d => {
    if (d.name.includes('Pain')) return 'Pain Management';
    if (d.name.includes('skin') || d.name.includes('rash')) return 'Skin Conditions';
    if (d.name.includes('fever') || d.name.includes('cold')) return 'Common Illnesses';
    if (d.name.includes('diabetes') || d.name.includes('pressure')) return 'Chronic Conditions';
    return 'Other Conditions';
  })));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Heart className="h-16 w-16 text-blue-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Health Companion
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find information about common health conditions, symptoms, and basic care
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setShowHospitals(true)}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              >
                <Hospital className="h-5 w-5 mr-2" />
                Find Hospitals
              </button>
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-colors"
              >
                <Grid3X3 className="h-5 w-5 mr-2" />
                Categories
              </button>
            </div>
            <SearchBox onSearch={setSearchQuery} />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      {showCategories && (
        <div className="bg-white shadow-lg rounded-lg mx-auto max-w-7xl -mt-8 mb-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchQuery(category)}
                className="p-4 text-center rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <span className="font-medium text-blue-700">{category}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDiseases.map(disease => (
            <DiseaseCard
              key={disease.id}
              disease={disease}
              onClick={() => setSelectedDisease(disease)}
            />
          ))}
        </div>

        {filteredDiseases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No diseases found matching your search.
            </p>
          </div>
        )}
      </main>

      {/* Modals */}
      {showLogin && <LoginModal onLogin={handleLogin} onClose={() => setShowLogin(false)} />}
      {selectedDisease && (
        <DiseaseDetail
          disease={selectedDisease}
          onClose={() => setSelectedDisease(null)}
        />
      )}
      {showHospitals && (
        <HospitalLocator
          hospitals={hospitals}
          onClose={() => setShowHospitals(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            This website is for informational purposes only. Always consult with a qualified healthcare provider.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;