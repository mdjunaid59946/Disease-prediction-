import { Hospital } from '../types/user';

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'City General Hospital',
    address: '123 Healthcare Ave, Medical District',
    specialties: ['Emergency Care', 'Cardiology', 'Neurology', 'Pediatrics'],
    doctors: [
      {
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiology',
        experience: 15,
        availability: 'Mon-Fri, 9AM-5PM',
        imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300'
      }
    ],
    rating: 4.8,
    distance: 2.5,
    imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: '2',
    name: 'Memorial Medical Center',
    address: '456 Wellness Blvd, Health Park',
    specialties: ['Surgery', 'Oncology', 'Orthopedics', 'Internal Medicine'],
    doctors: [
      {
        name: 'Dr. Michael Chen',
        specialty: 'Oncology',
        experience: 12,
        availability: 'Mon-Thu, 8AM-4PM',
        imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300'
      }
    ],
    rating: 4.6,
    distance: 3.8,
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=300'
  }
];