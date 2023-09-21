
function Product(name, category, price, stock) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
  
  
  function Inventory() {
    this.inventory = []
  }
  
  
  Inventory.prototype.addProduct = function (product) {
   
    if (product instanceof Product) {
      
      this.inventory.push(product);
      
      console.log(`Added ${product.name} to the inventory`);
    } else {
     
      console.log("Invalid product.");
    }
  };
  
  
    Inventory.prototype.deleteProduct =   function (name) {
    
    for (let i = 0; i < this.inventory.length; i++) {
      
      if (this.inventory[i].name === name) {
        
        this.inventory.splice(i, 1);
        
        console.log(`Deleted ${name} from inventory`);
      
      }
      else console.log("Product not found.");

    }
    
    
  };
  
  
let inventory = new Inventory();


let product1 = new Product("Laptop", "Electronics", 899, 10);
let product2=new Product("Book","Books",20,50)


inventory.addProduct(product1)
inventory.addProduct(product2)

inventory.deleteProduct("Laptop")


