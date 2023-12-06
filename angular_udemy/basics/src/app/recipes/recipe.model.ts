export class Recipe {
  name: string;
  description: string;
  img: string;

  constructor(name: string, descr: string, img: string) {
    this.name = name;
    this.description = descr;
    this.img = img;
  }
}
