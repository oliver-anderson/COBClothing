import { Item } from '../store/item.model'

export class Cart {
  cartId?: number;
  items?: Item[];
  total?: number;
  active?: boolean;
}
