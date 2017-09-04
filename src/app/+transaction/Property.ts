export interface Property {
  image: string;
  address1: string;
  address2?: string;
  area: string;
  signed: boolean;
  rooms: number;
  studio?: boolean;
  baths: number;
  priceForSale: number;
  pricePerSf: number;
}