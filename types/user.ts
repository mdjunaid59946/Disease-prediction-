export interface User {
  name: string;
  age: number;
  phone: string;
  email: string;
  location: string;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  specialties: string[];
  doctors: Doctor[];
  rating: number;
  distance?: number;
  imageUrl: string;
}

export interface Doctor {
  name: string;
  specialty: string;
  experience: number;
  availability: string;
  imageUrl: string;
}