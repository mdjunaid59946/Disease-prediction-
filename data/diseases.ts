import { Disease } from '../types/disease';

export const diseases: Disease[] = [
  {
    id: 'skin-disease',
    name: 'Skin Disease',
    imageUrl: 'https://images.unsplash.com/photo-1612776572997-76cc42e058c3?auto=format&fit=crop&q=80&w=400',
    description: 'Various conditions that affect the skin, including rashes, eczema, and psoriasis',
    symptoms: [
      'Redness and inflammation',
      'Itching and burning sensation',
      'Dry or scaly patches',
      'Blisters or bumps'
    ],
    precautions: [
      'Keep skin clean and dry',
      'Avoid harsh chemicals',
      'Use gentle skincare products',
      'Protect from sun exposure'
    ],
    medicines: [
      {
        name: 'Topical corticosteroids',
        dosage: 'Apply as directed',
        warning: 'Prolonged use may thin the skin'
      }
    ]
  },
  {
    id: 'fever',
    name: 'Fever',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
    description: 'An elevated body temperature often indicating infection or illness',
    symptoms: [
      'Body temperature above 38°C (100.4°F)',
      'Sweating and chills',
      'Headache and muscle aches',
      'Fatigue and weakness'
    ],
    precautions: [
      'Rest adequately',
      'Stay hydrated',
      'Use light clothing and bedding',
      'Monitor temperature regularly'
    ],
    medicines: [
      {
        name: 'Paracetamol',
        dosage: '500-1000mg every 4-6 hours',
        warning: 'Do not exceed 4000mg in 24 hours'
      }
    ]
  },
  {
    id: 'cough',
    name: 'Cough',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    description: 'A reflex action to clear the airways of irritants and mucus',
    symptoms: [
      'Persistent coughing',
      'Throat irritation',
      'Mucus production',
      'Chest discomfort'
    ],
    precautions: [
      'Stay hydrated',
      'Use a humidifier',
      'Avoid irritants',
      'Rest voice'
    ],
    medicines: [
      {
        name: 'Cough syrup',
        dosage: 'As directed on package',
        warning: 'May cause drowsiness'
      }
    ]
  },
  {
    id: 'cold',
    name: 'Common Cold',
    imageUrl: 'https://images.unsplash.com/photo-1641193030363-ef4aa994b19b?auto=format&fit=crop&q=80&w=400',
    description: 'A viral infection affecting the upper respiratory tract',
    symptoms: [
      'Runny or stuffy nose',
      'Sore throat',
      'Cough',
      'Congestion'
    ],
    precautions: [
      'Rest well',
      'Stay hydrated',
      'Use a humidifier',
      'Gargle with salt water'
    ],
    medicines: [
      {
        name: 'Antihistamine',
        dosage: 'As directed on package'
      }
    ]
  },
  {
    id: 'eye-pain',
    name: 'Eye Pain',
    imageUrl: 'https://images.unsplash.com/photo-1509973385458-f9609c11724c?auto=format&fit=crop&q=80&w=400',
    description: 'Discomfort or pain in or around the eye',
    symptoms: [
      'Sharp or dull pain',
      'Redness',
      'Sensitivity to light',
      'Watery eyes'
    ],
    precautions: [
      'Avoid touching eyes',
      'Use clean hands',
      'Protect from bright light',
      'Remove contact lenses'
    ],
    medicines: [
      {
        name: 'Eye drops',
        dosage: '1-2 drops as needed',
        warning: 'Do not touch tip to eye'
      }
    ]
  },
  {
    id: 'ear-pain',
    name: 'Ear Pain',
    imageUrl: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&q=80&w=400',
    description: 'Pain or discomfort in the ear canal or middle ear',
    symptoms: [
      'Sharp pain',
      'Reduced hearing',
      'Drainage',
      'Fever'
    ],
    precautions: [
      'Keep ears dry',
      'Avoid cotton swabs',
      'Protect from loud noises',
      'Maintain good hygiene'
    ],
    medicines: [
      {
        name: 'Ear drops',
        dosage: 'As prescribed',
        warning: 'Warm to body temperature before use'
      }
    ]
  },
  {
    id: 'back-pain',
    name: 'Back Pain',
    imageUrl: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&q=80&w=400',
    description: 'Pain in the lower, middle, or upper back',
    symptoms: [
      'Muscle ache',
      'Shooting pain',
      'Limited flexibility',
      'Difficulty standing straight'
    ],
    precautions: [
      'Maintain good posture',
      'Exercise regularly',
      'Use proper lifting technique',
      'Apply heat/cold therapy'
    ],
    medicines: [
      {
        name: 'Ibuprofen',
        dosage: '400-600mg every 6 hours',
        warning: 'Take with food'
      }
    ]
  },
  {
    id: 'tooth-ache',
    name: 'Tooth Ache',
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400',
    description: 'Pain in or around the teeth and jaws',
    symptoms: [
      'Sharp tooth pain',
      'Sensitivity to hot/cold',
      'Swollen gums',
      'Difficulty eating'
    ],
    precautions: [
      'Good oral hygiene',
      'Avoid very hot/cold foods',
      'Use soft toothbrush',
      'Regular dental checkups'
    ],
    medicines: [
      {
        name: 'Oral pain gel',
        dosage: 'Apply as needed',
        warning: 'Temporary relief only'
      }
    ]
  },
  {
    id: 'skin-rashes',
    name: 'Skin Rashes',
    imageUrl: 'https://images.unsplash.com/photo-1579545564378-0b3d1c2b796e?auto=format&fit=crop&q=80&w=400',
    description: 'Inflammation of the skin causing color and texture changes',
    symptoms: [
      'Redness',
      'Itching',
      'Swelling',
      'Bumps or blisters'
    ],
    precautions: [
      'Avoid scratching',
      'Keep skin clean',
      'Wear loose clothing',
      'Identify triggers'
    ],
    medicines: [
      {
        name: 'Antihistamine cream',
        dosage: 'Apply 2-3 times daily',
        warning: 'Stop if irritation occurs'
      }
    ]
  },
  {
    id: 'loose-motion',
    name: 'Loose Motion',
    imageUrl: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?auto=format&fit=crop&q=80&w=400',
    description: 'Frequent loose or watery stools',
    symptoms: [
      'Frequent bowel movements',
      'Watery stools',
      'Abdominal cramps',
      'Dehydration'
    ],
    precautions: [
      'Stay hydrated',
      'Eat bland foods',
      'Avoid dairy',
      'Practice good hygiene'
    ],
    medicines: [
      {
        name: 'ORS',
        dosage: 'After each loose stool',
        warning: 'Prepare with clean water'
      }
    ]
  },
  {
    id: 'chest-pain',
    name: 'Chest Pain',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=400',
    description: 'Pain or discomfort in the chest area',
    symptoms: [
      'Sharp or dull pain',
      'Pressure sensation',
      'Difficulty breathing',
      'Radiating pain'
    ],
    precautions: [
      'Seek immediate medical help',
      'Rest and avoid exertion',
      'Take prescribed medication',
      'Monitor symptoms'
    ],
    medicines: [
      {
        name: 'As prescribed',
        dosage: 'Follow doctor\'s instructions',
        warning: 'Emergency condition'
      }
    ]
  },
  {
    id: 'nose-bleeding',
    name: 'Nose Bleeding',
    imageUrl: 'https://images.unsplash.com/photo-1585435557481-8404145d9334?auto=format&fit=crop&q=80&w=400',
    description: 'Bleeding from the blood vessels in the nose',
    symptoms: [
      'Blood from nostrils',
      'Nasal congestion',
      'Facial pressure',
      'Metallic taste'
    ],
    precautions: [
      'Sit upright',
      'Lean forward',
      'Apply pressure',
      'Avoid nose blowing'
    ],
    medicines: [
      {
        name: 'Nasal spray',
        dosage: 'As directed',
        warning: 'Temporary use only'
      }
    ]
  },
  {
    id: 'pale-lips',
    name: 'Pale Lips',
    imageUrl: 'https://images.unsplash.com/photo-1542996966-2e31c00bae31?auto=format&fit=crop&q=80&w=400',
    description: 'Unusual paleness of the lips, often indicating underlying conditions',
    symptoms: [
      'Lip discoloration',
      'Fatigue',
      'Shortness of breath',
      'Dizziness'
    ],
    precautions: [
      'Get medical evaluation',
      'Stay hydrated',
      'Balanced diet',
      'Iron-rich foods'
    ],
    medicines: [
      {
        name: 'Iron supplements',
        dosage: 'As prescribed',
        warning: 'Take with vitamin C'
      }
    ]
  },
  {
    id: 'malaria',
    name: 'Malaria',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    description: 'A serious disease caused by parasites transmitted through mosquito bites',
    symptoms: [
      'High fever',
      'Chills and sweating',
      'Headache',
      'Muscle pain'
    ],
    precautions: [
      'Use mosquito nets',
      'Apply insect repellent',
      'Cover exposed skin',
      'Eliminate standing water'
    ],
    medicines: [
      {
        name: 'Antimalarial drugs',
        dosage: 'As prescribed',
        warning: 'Complete full course'
      }
    ]
  },
  {
    id: 'diabetes',
    name: 'Diabetes',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    description: 'A condition affecting blood sugar regulation',
    symptoms: [
      'Excessive thirst',
      'Frequent urination',
      'Fatigue',
      'Blurred vision'
    ],
    precautions: [
      'Monitor blood sugar',
      'Healthy diet',
      'Regular exercise',
      'Foot care'
    ],
    medicines: [
      {
        name: 'Insulin/Oral medication',
        dosage: 'As prescribed',
        warning: 'Regular monitoring required'
      }
    ]
  },
  {
    id: 'gastric',
    name: 'Gastric Problems',
    imageUrl: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&q=80&w=400',
    description: 'Digestive system issues causing discomfort',
    symptoms: [
      'Bloating',
      'Acid reflux',
      'Stomach pain',
      'Nausea'
    ],
    precautions: [
      'Eat slowly',
      'Avoid trigger foods',
      'Regular meal times',
      'Stay upright after eating'
    ],
    medicines: [
      {
        name: 'Antacids',
        dosage: 'As needed',
        warning: 'Take between meals'
      }
    ]
  },
  {
    id: 'allergies',
    name: 'Allergies',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    description: 'Immune system reactions to substances',
    symptoms: [
      'Sneezing',
      'Itchy eyes',
      'Runny nose',
      'Skin rash'
    ],
    precautions: [
      'Avoid triggers',
      'Keep windows closed',
      'Use air purifiers',
      'Regular cleaning'
    ],
    medicines: [
      {
        name: 'Antihistamines',
        dosage: 'Once daily',
        warning: 'May cause drowsiness'
      }
    ]
  },
  {
    id: 'migraine',
    name: 'Migraine',
    imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400',
    description: 'Severe headache often with additional symptoms',
    symptoms: [
      'Intense headache',
      'Light sensitivity',
      'Nausea',
      'Visual disturbances'
    ],
    precautions: [
      'Identify triggers',
      'Regular sleep schedule',
      'Stress management',
      'Dark, quiet environment'
    ],
    medicines: [
      {
        name: 'Pain relievers',
        dosage: 'As needed',
        warning: 'Take at first symptoms'
      }
    ]
  },
  {
    id: 'chicken-pox',
    name: 'Chicken Pox',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    description: 'Viral infection causing itchy rash and blisters',
    symptoms: [
      'Itchy rash',
      'Fever',
      'Fatigue',
      'Loss of appetite'
    ],
    precautions: [
      'Avoid scratching',
      'Rest',
      'Calamine lotion',
      'Isolate from others'
    ],
    medicines: [
      {
        name: 'Antihistamines',
        dosage: 'As directed',
        warning: 'Relieve itching only'
      }
    ]
  },
  {
    id: 'tuberculosis',
    name: 'Tuberculosis',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    description: 'Serious bacterial infection primarily affecting the lungs',
    symptoms: [
      'Persistent cough',
      'Weight loss',
      'Night sweats',
      'Fatigue'
    ],
    precautions: [
      'Complete treatment',
      'Wear mask',
      'Good ventilation',
      'Regular check-ups'
    ],
    medicines: [
      {
        name: 'Antibiotics',
        dosage: 'As prescribed',
        warning: 'Complete full course'
      }
    ]
  },
  {
    id: 'dandruff-hairfall',
    name: 'Dandruff & Hair Fall',
    imageUrl: 'https://images.unsplash.com/photo-1585670347821-a40f6f74a6b0?auto=format&fit=crop&q=80&w=400',
    description: 'Scalp condition causing flaking and hair loss',
    symptoms: [
      'Scalp flaking',
      'Itchy scalp',
      'Hair loss',
      'Scalp irritation'
    ],
    precautions: [
      'Regular washing',
      'Gentle hair care',
      'Balanced diet',
      'Avoid harsh chemicals'
    ],
    medicines: [
      {
        name: 'Anti-dandruff shampoo',
        dosage: '2-3 times weekly',
        warning: 'Use as directed'
      }
    ]
  },
  {
    id: 'hiv',
    name: 'HIV',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    description: 'Viral infection affecting the immune system',
    symptoms: [
      'Flu-like symptoms',
      'Fatigue',
      'Weight loss',
      'Night sweats'
    ],
    precautions: [
      'Safe practices',
      'Regular testing',
      'Medical monitoring',
      'Healthy lifestyle'
    ],
    medicines: [
      {
        name: 'Antiretroviral therapy',
        dosage: 'As prescribed',
        warning: 'Strict adherence required'
      }
    ]
  },
  {
    id: 'dengue',
    name: 'Dengue',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    description: 'Mosquito-borne viral infection',
    symptoms: [
      'High fever',
      'Severe headache',
      'Joint pain',
      'Rash'
    ],
    precautions: [
      'Mosquito protection',
      'Stay hydrated',
      'Rest',
      'Monitor symptoms'
    ],
    medicines: [
      {
        name: 'Pain relievers',
        dosage: 'As needed',
        warning: 'Avoid aspirin'
      }
    ]
  },
  {
    id: 'kidney-stone',
    name: 'Kidney Stone',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
    description: 'Mineral deposits forming in the kidneys',
    symptoms: [
      'Severe pain',
      'Blood in urine',
      'Nausea',
      'Frequent urination'
    ],
    precautions: [
      'Stay hydrated',
      'Balanced diet',
      'Limit salt',
      'Regular exercise'
    ],
    medicines: [
      {
        name: 'Pain medication',
        dosage: 'As prescribed',
        warning: 'Follow fluid intake guidelines'
      }
    ]
  },
  {
    id: 'diarrhea',
    name: 'Diarrhea',
    imageUrl: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?auto=format&fit=crop&q=80&w=400',
    description: 'Frequent loose, watery stools',
    symptoms: [
      'Loose stools',
      'Abdominal cramps',
      'Dehydration',
      'Urgency'
    ],
    precautions: [
      'Stay hydrated',
      'BRAT diet',
      'Hand hygiene',
      'Rest'
    ],
    medicines: [
      {
        name: 'ORS',
        dosage: 'After each loose stool',
        warning: 'Watch for dehydration'
      }
    ]
  },
  {
    id: 'asthma',
    name: 'Asthma',
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    description: 'Chronic condition affecting the airways',
    symptoms: [
      'Wheezing',
      'Shortness of breath',
      'Chest tightness',
      'Coughing'
    ],
    precautions: [
      'Avoid triggers',
      'Regular medication',
      'Action plan',
      'Peak flow monitoring'
    ],
    medicines: [
      {
        name: 'Inhaler',
        dosage: 'As prescribed',
        warning: 'Keep rescue inhaler nearby'
      }
    ]
  }
];