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

class ElementAttribute {
  constructor (attrName, attrValue){
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true){
    this.hookId = renderHookId;
    if (shouldRender){
    this.render();
    }
  }


  render(){

  }

  createRootElement(tag, cssClasses, attributes){
    const rootElement = document.createElement(tag);
    if (cssClasses){
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0){
      for (const attr of attributes){
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  };
}

class ShoppingCart extends Component {
  items = [];

  set carItems(value){
    this.items = value
    this.totalOutput.innerHTML = `<h2>Total:\$${this.totalAmount.toFixed(2)}</h2>`
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, curItem) => {
      return prevValue + curItem.price;
    }, 0); 
    return sum;
  }

  constructor(renderHookId){
    super(renderHookId);
  }  

  addProduct(product){
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.carItems = updatedItems;
    
  }

  render(){
    // const cartEl = document.createElement('section');
    // cartEl.className = 'cart';
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML =`
    <h2>Total:\$${0}</h2>
    <button>Order Now!</button>
    `;
    this.totalOutput = cartEl.querySelector('h2');
    // return cartEl;
  }
}

class ProductItem extends Component {
  constructor (product, renderHookId) {
    super(renderHookId, false)
    this.product = product;
    this.render();
  }

  addToCart(){
    App.addProductToCart(this.product)
  }

  render () {
    // const prodEl = document.createElement('li');
    // prodEl.className = 'product-item';
    const prodEl = this.createRootElement('li', 'product-item')
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
    // return prodEl;
  }
}

class ProducList extends Component {
  products = [];

  constructor(renderHookId) {
    super(renderHookId);
    this.fetchProducts();
  }

fetchProducts(){
  this.products = [new Product(
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
  this.renderProducts();
}

renderProducts(){
  for (const prod of this.products) {
    const productItem = new ProductItem(prod, 'prod-list');
}
}

  render () {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list")
    ]);
      if (this.products && this.products.length > 0){
        this.renderProducts();
      }
  }
}

class Shop {
  constructor(){
    this.render();
  }

  
  render(){
    // const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart('app');
    // const cartEl = 
    // this.cart.render();
    new ProducList('app');
    // const prodListEl = 
    // productList.render();

    // renderHook.append(cartEl);
    // renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    // shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product){
    this.cart.addProduct(product);
  }
}

App.init();
