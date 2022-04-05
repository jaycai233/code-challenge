export interface Products {
  name: string;
  price: number;
  type: 'books' | 'electronics' | 'food' | 'furniture' | 'toys';
  active: boolean;
}

export interface ExistProducts extends Products {
  id: string;
}

export interface ApiResponse {
  data: ExistProducts[];
  totalLength: number;
}
