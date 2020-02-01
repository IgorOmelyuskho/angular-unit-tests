import { Product } from './product';

export interface User {
  email: string;
  products?: Product[];
}
