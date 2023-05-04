// Someone ask from us to create a beautiful representation of his products in alphabetical order == Catalogue

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Catalogue {
    constructor() {
        this.products = [];
        this.catalogue = {};
    }

    addProduct(product) {
        this.products.push(product);
    }

    printCatalogue() {
        this.products.sort((a, b) => a.name.localeCompare(b.name))
        for (const product of this.products) {
            const firstLetter = product.name.charAt(0).toUpperCase();
            if (this.catalogue[firstLetter]) {
                this.catalogue[firstLetter].push(product)
            } else {
                this.catalogue[firstLetter] = [product]
            }
        }

        for (const firstLetter of Object.keys(this.catalogue)) {
            console.log(firstLetter)
            for (const product of this.catalogue[firstLetter]) {
                console.log(`${product.name} --- ${product.price}`)
            }
        }
    }
}
const products = [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
    'Robot Vacuum : 150',
    'Blackberry: 30',
    'Android : 25',
    'Iphone : 35',
    'Computer: 14',
    'Nokia : 12',
    'Phone : 13',
    'Mobile : 17',
    'Windows : 55',
    'Egg : 2.5',
    'Chocolate : 3.99',
    'Milk : 1.5',
    'Bread : 2.25',
    'Butter : 4',
    'Cheese : 5.5',
    'Coffee : 8.99',
    'Tea : 6.75',
    'Rice : 1.99',
    'Pasta : 3.25',
    'Juice : 2.49',
    'Water : 1.25'
]
const cataloge = new Catalogue();

for (const product of products) {
    const productWithPrice = product.split(':');
    cataloge.addProduct(new Product(productWithPrice[0], Number(productWithPrice[1])));
}
// cataloge.addProduct(new Product("Banana", 1.5));
// cataloge.addProduct(new Product("apple", 2.5));
// cataloge.addProduct(new Product("carrot", 0.75));
// cataloge.addProduct(new Product("Apricot", 3.25));
// cataloge.addProduct(new Product("Avocado", 0.99));
// cataloge.addProduct(new Product("Blackberry", 4.5));
cataloge.printCatalogue();