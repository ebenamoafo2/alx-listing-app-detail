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
  discount: string;
}
