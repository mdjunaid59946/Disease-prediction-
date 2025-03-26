export interface Disease {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  symptoms: string[];
  precautions: string[];
  medicines: {
    name: string;
    dosage: string;
    warning?: string;
  }[];
}