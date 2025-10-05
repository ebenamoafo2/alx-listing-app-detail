// Placeholder for Card component props
export interface CardProps {
  title?: string;
  content?: string;
}

// Placeholder for Button component props
export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

// interfaces/index.ts

export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];  
  price: number;              
  offers: OffersProps; 
  image: string;             
  images?: string[];   
  discount?: string;          
  description: string; 
  reviews?: Review[];      
  
}


export interface Review {
  name: string;      // Reviewer's full name
  avatar: string;    // URL to the reviewer's profile picture
  rating: number;    // Star rating (e.g., 4, 5)
  comment: string;   // Review text/content
}