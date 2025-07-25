export interface ServiceProvider {
  id: string;
  fullName: string;
  service: string;
  yearsExperience: number;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  contactDetails: ContactDetails;
  generatedBio: string;
  suggestedPrice: number;
  status: 'Pending' | 'Ready' | 'Published';
  createdAt: Date;
  isBusinessOwner?: boolean;
  businessInfo?: BusinessInfo;
  availability?: TimeSlot[];
}

export interface ContactDetails {
  phone: string;
  email: string;
  whatsapp?: string;
  website?: string;
}

export interface BusinessInfo {
  businessName: string;
  businessType: 'Individual' | 'Small Business' | 'Company';
  description: string;
  services: string[];
  operatingHours: {
    [key: string]: { open: string; close: string; closed: boolean };
  };
  images?: string[];
}

export interface TimeSlot {
  date: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface Appointment {
  id: string;
  providerId: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  notes?: string;
  createdAt: Date;
}

export interface FormData {
  fullName: string;
  service: string;
  yearsExperience: number;
  location: string;
  contactDetails: ContactDetails;
  isBusinessOwner: boolean;
  businessInfo?: BusinessInfo;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  savedProviders: string[];
  bookingHistory: string[];
}