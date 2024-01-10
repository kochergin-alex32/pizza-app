export type Size = 0|1|2;
export type Type = 0|1;
export type Pizza = {
    id: number;
    imageUrl: string;
    "title": string;
    "types": Type[];
    "sizes": Size[];
    "price": number;
    "category": number;
    "rating": number;
  };