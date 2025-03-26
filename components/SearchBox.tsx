import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          className="w-full px-6 py-4 pl-14 text-gray-900 bg-white bg-opacity-90 backdrop-blur-sm border-2 border-blue-100 rounded-full focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 text-lg shadow-lg"
          placeholder="Search health conditions..."
          value={query}
          onChange={handleSearch}
        />
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-blue-500" />
      </div>
    </div>
  );
}