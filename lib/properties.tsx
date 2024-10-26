export type propertyCardType = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  country: string;
  imageUrl: string;
};

export type propertyDetailType = {
  id: string;
  name: string;
  renterId: string;
  createdAt: Date;
  tagline: string;
  price: number;
  country: string;
  imageUrl: string;
  guests: number;
  bedroom: number;
  bed: number;
  bath: number;
  amenities: string;
  category: string;
  description: string;
};
