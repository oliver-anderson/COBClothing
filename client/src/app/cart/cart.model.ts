import { Item } from '../store/item.model'

export class Cart {
  items?: Item[];
  total?: number;
  active?: boolean;
}
