class Product {
  // title = 'DEFAULT'; // Every field on the class will be a property in the objects.
  // imageUrl; // Class field
  // desciption;
  // price;

  constructor(title, image, desc, price){
    this.title = title; // This are Class property
    this.imageUrl = image;
    this.desciption = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product){
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total:\$${1}</h2>`
  }

  render(){
    const cartEl = document.createElement('section');
    cartEl.innerHTML =`
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor (product) {
    this.product = product;
  }

  addToCart(){
    App.addProductToCart(this.product)
  }

  render () {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt= "${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.desciption}</p>
          <button>Add to card</button>
      </div>
    `;
    const addCardButton = prodEl.querySelector('button');
    addCardButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProducList {
  products = [new Product(
    'A pillow',
    'https://cdn.thewirecutter.com/wp-content/media/2023/01/bedpillows-2048px-9999.jpg',
    'A soft pillow!',
    19.99
  ),
  new Product(
    'A Carpet',
    'https://cdn.shopify.com/s/files/1/0078/2555/5571/products/PlainShaggyCarpet_900x900.png?v=1644997670',
    'A carpet you might like!',
    89.99
  )];

  constructor() {}

  render () {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {

  render(){
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProducList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();
