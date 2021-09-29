export class Product {
  id: number;
  name: string;
  price: number;
  img: string;
  status: boolean;

  constructor(id,name, price, img, status) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.status = status;
  }
}
