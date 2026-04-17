export type EventComponent = {
  id: number;
  title: string; 
  image: string;
  date: string;
  time: string;
  place: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  link: string;
  lat: number;
  lng: number;
  mapUrl: string;
};