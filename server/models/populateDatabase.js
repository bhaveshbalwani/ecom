// Import necessary packages and models
const mongoose = require('mongoose');
const Category = require('./category');
const Brand = require('./brand');
const Product = require('./product');
const Review = require('./review');

// Connect to MongoDB
mongoose.connect('mongodb+srv://nareshnb66:mern1234@cluster0.lg6m2x8.mongodb.net/main', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define sample data
const categoriesData = [
  { name: 'Shoes' },
  { name: 'Watches' },
];

const brandsData = [
  // Brands data for Shoes category
  { name: 'Nike', description: 'Sports shoes brand', isActive: true },
  { name: 'Adidas', description: 'Athletic footwear brand', isActive: true },
  { name: 'Puma', description: 'Lifestyle and sports brand', isActive: true },
  { name: 'Reebok', description: 'Fitness and training brand', isActive: true },
  { name: 'New Balance', description: 'Performance footwear brand', isActive: true },
  // Brands data for Watches category
  { name: 'Rolex', description: 'Luxury watchmaker', isActive: true },
  { name: 'Omega', description: 'Swiss luxury watches', isActive: true },
  { name: 'Tag Heuer', description: 'Swiss Avant-Garde since 1860', isActive: true },
  { name: 'Casio', description: 'Innovative digital watches', isActive: true },
  { name: 'Seiko', description: 'Japanese precision watches', isActive: true },
];

const productsData = [
  // Products data for Nike
  { name: 'Nike Air Max 90', description: 'Iconic design with maximum cushioning', price: 120, brand: 'Nike', imageUrl: 'https://example.com/nike-air-max-90.jpg' },
  { name: 'Nike Zoom Pegasus 38', description: 'Responsive running shoes', price: 150, brand: 'Nike', imageUrl: 'https://example.com/nike-zoom-pegasus-38.jpg' },
  { name: 'Nike React Infinity Run', description: 'Stable and cushioned running shoes', price: 160, brand: 'Nike', imageUrl: 'https://example.com/nike-react-infinity-run.jpg' },

  // Products data for Adidas
  { name: 'Adidas Ultraboost 21', description: 'High-performance running shoes', price: 180, brand: 'Adidas', imageUrl: 'https://example.com/adidas-ultraboost-21.jpg' },
  { name: 'Adidas Stan Smith', description: 'Classic tennis shoes', price: 90, brand: 'Adidas', imageUrl: 'https://example.com/adidas-stan-smith.jpg' },
  { name: 'Adidas NMD_R1', description: 'Casual lifestyle sneakers', price: 130, brand: 'Adidas', imageUrl: 'https://example.com/adidas-nmd-r1.jpg' },

  // Products data for Puma
  { name: 'Puma RS-X3', description: 'Retro-inspired sneakers', price: 100, brand: 'Puma', imageUrl: 'https://example.com/puma-rs-x3.jpg' },
  { name: 'Puma Calibrate Runner', description: 'Performance running shoes', price: 140, brand: 'Puma', imageUrl: 'https://example.com/puma-calibrate-runner.jpg' },
  { name: 'Puma Future Rider', description: 'Modern lifestyle sneakers', price: 110, brand: 'Puma', imageUrl: 'https://example.com/puma-future-rider.jpg' },

  // Products data for Reebok
  { name: 'Reebok Nano X', description: 'Cross-training shoes', price: 130, brand: 'Reebok', imageUrl: 'https://example.com/reebok-nano-x.jpg' },
  { name: 'Reebok Classic Leather', description: 'Timeless casual shoes', price: 80, brand: 'Reebok', imageUrl: 'https://example.com/reebok-classic-leather.jpg' },
  { name: 'Reebok Zig Kinetica', description: 'Innovative running shoes', price: 150, brand: 'Reebok', imageUrl: 'https://example.com/reebok-zig-kinetica.jpg' },

  // Products data for New Balance
  { name: 'New Balance Fresh Foam 1080v11', description: 'Cushioned running shoes', price: 170, brand: 'New Balance', imageUrl: 'https://example.com/new-balance-fresh-foam-1080v11.jpg' },
  { name: 'New Balance FuelCell Propel', description: 'Energy-returning running shoes', price: 140, brand: 'New Balance', imageUrl: 'https://example.com/new-balance-fuelcell-propel.jpg' },
  { name: 'New Balance 574', description: 'Classic lifestyle sneakers', price: 100, brand: 'New Balance', imageUrl: 'https://example.com/new-balance-574.jpg' },

  // Products data for Rolex
  { name: 'Rolex Submariner Date', description: 'Diving watch with date display', price: 10000, brand: 'Rolex', imageUrl: 'https://example.com/rolex-submariner-date.jpg' },
  { name: 'Rolex Datejust 41', description: 'Classic luxury watch', price: 12000, brand: 'Rolex', imageUrl: 'https://example.com/rolex-datejust-41.jpg' },
  { name: 'Rolex GMT-Master II', description: 'Dual time zone watch', price: 15000, brand: 'Rolex', imageUrl: 'https://example.com/rolex-gmt-master-ii.jpg' },

  // Products data for Omega
  { name: 'Omega Speedmaster Professional Moonwatch', description: 'Moonwatch with a legendary history', price: 6000, brand: 'Omega', imageUrl: 'https://example.com/omega-speedmaster-professional-moonwatch.jpg' },
  { name: 'Omega Seamaster Diver 300M', description: 'Professional diving watch', price: 4500, brand: 'Omega', imageUrl: 'https://example.com/omega-seamaster-diver-300m.jpg' },
  { name: 'Omega Constellation Co-Axial Master Chronometer', description: 'Luxury dress watch', price: 8000, brand: 'Omega', imageUrl: 'https://example.com/omega-constellation-co-axial-master-chronometer.jpg' },

  // Products data for Tag Heuer
  { name: 'Tag Heuer Carrera Calibre 16', description: 'Racing-inspired chronograph', price: 5500, brand: 'Tag Heuer', imageUrl: 'https://example.com/tag-heuer-carrera-calibre-16.jpg' },
  { name: 'Tag Heuer Aquaracer Automatic', description: 'Dive watch with automatic movement', price: 3200, brand: 'Tag Heuer', imageUrl: 'https://example.com/tag-heuer-aquaracer-automatic.jpg' },
  { name: 'Tag Heuer Formula 1', description: 'Sporty and stylish chronograph', price: 1500, brand: 'Tag Heuer', imageUrl: 'https://example.com/tag-heuer-formula-1.jpg' },

  // Products data for Casio
  { name: 'Casio G-Shock GA-2100', description: 'Tough digital watch', price: 100, brand: 'Casio', imageUrl: 'https://example.com/casio-g-shock-ga-2100.jpg' },
  { name: 'Casio Edifice EQB-1000D', description: 'Bluetooth-connected watch', price: 250, brand: 'Casio', imageUrl: 'https://example.com/casio-edifice-eqb-1000d.jpg' },
  { name: 'Casio Pro Trek PRW-50', description: 'Outdoor adventure watch', price: 200, brand: 'Casio', imageUrl: 'https://example.com/casio-pro-trek-prw-50.jpg' },

  // Products data for Seiko
  { name: 'Seiko 5 Sports SRPE55K1', description: 'Automatic sports watch', price: 300, brand: 'Seiko', imageUrl: 'https://example.com/seiko-5-sports-srpe55k1.jpg' },
  { name: 'Seiko Presage SRPB41J1', description: 'Dress watch with power reserve indicator', price: 450, brand: 'Seiko', imageUrl: 'https://example.com/seiko-presage-srpb41j1.jpg' },
  { name: 'Seiko Prospex SNE498P1', description: 'Professional diver’s watch', price: 600, brand: 'Seiko', imageUrl: 'https://example.com/seiko-prospex-sne498p1.jpg' },
];


const reviewsData = [
  // Reviews data for Shoes products
  { title: 'Great shoes!', rating: 5, review: 'I love these shoes!', product: 'MongoDB ObjectId of Nike Air Max 90 product' },
  { title: 'Disappointed', rating: 2, review: 'Not as comfortable as expected.', product: 'MongoDB ObjectId of Nike Air Max 90 product' },
  // Add reviews for other products as well
  // Reviews data for Watches products
  { title: 'Amazing watch!', rating: 5, review: 'This watch exceeded my expectations.', product: 'MongoDB ObjectId of Rolex Submariner Date product' },
  { title: 'Good value for money', rating: 4, review: 'A great watch at this price point.', product: 'MongoDB ObjectId of Rolex Submariner Date product' },
  // Add reviews for other products as well
];

// Populate the database with sample data
async function populateDatabase() {
  try {
    // Create categories
    const createdCategories = await Category.create(categoriesData);

    // Create brands
    const createdBrands = await Brand.create(brandsData);

    // Create products
    const productsWithBrandIds = productsData.map(product => {
      const brand = createdBrands.find(brand => brand.name === product.brand);
      return { ...product, brand: brand._id };
    });
    const createdProducts = await Product.create(productsWithBrandIds);

    // Create reviews
    const reviewsWithProductIds = reviewsData.map(review => {
      const product = createdProducts.find(product => product.name === review.product);
      return { ...review, product: product._id };
    });
    await Review.create(reviewsWithProductIds);

    console.log('Database populated successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
}

// Call the populateDatabase function to start populating the database
populateDatabase();
