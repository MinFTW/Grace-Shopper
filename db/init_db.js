const { client, Products, Orders, Users, OrderProducts } = require('./');

async function buildTables() {
  try {
    client.connect();

    console.log('Dropping All Tables...');
    await client.query(`
      DROP TABLE IF EXISTS order_products; 
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS users;
    `);
    console.log('Finished dropping tables!');

    console.log('Starting to build tables...');
    await client.query(`CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price DECIMAL(12,2) NOT NULL,
      "imageURL" TEXT DEFAULT 'https://bit.ly/3PRrvsu',
      "inStock" BOOLEAN DEFAULT false,
      category VARCHAR(255) NOT NULL
      )`);

    await client.query(`CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      "firstName" VARCHAR(255) NOT NULL,
      "lastName" VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      "imageURL" TEXT DEFAULT 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) UNIQUE NOT NULL,
      "isAdmin" BOOLEAN NOT NULL DEFAULT FALSE,
      address1 VARCHAR(255),
      address2 VARCHAR(255),
      city TEXT,
      state TEXT,
      zipcode INTEGER
      )`);

    await client.query(`CREATE TABLE orders (
      id SERIAL PRIMARY KEY,
      status VARCHAR(255) DEFAULT 'created',
      "userId" INTEGER REFERENCES users(id),
      "datePlaced" DATE
    )`);

    await client.query(`CREATE TABLE order_products (
      id SERIAL PRIMARY KEY,
      "productId" INTEGER REFERENCES products(id),
      "orderId" INTEGER REFERENCES orders(id),
      price DECIMAL(12,2) NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 0
    )`);

    console.log('Finished building tables');
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    const product1 = await Products.createProduct({
      name: 'Monsterra',
      description: `Native to the tropical forests of Central and South America, these plants have glossy, 
      heart shaped leaves which develops its unique splits in its maturity. 
      It is a climbing, evergreen perennial vine that is perhaps most noted for its 
      large perforated leaves on thick plant stems and its long cord-like aerial roots.
         `,
      price: 18.99,
      inStock: true,
      category: 'Houseplant',
      imageURL:
        'https://cdn.shopify.com/s/files/1/2528/3612/products/MonsteraDeliciosa_WhiteRound_473x473.jpg?v=1636582103',
    });

    const product2 = await Products.createProduct({
      name: 'Pothos',
      description: `This Air purifying plant is arguably one of the easiest plants to grow indoors. 
      The pothos grows in a vine like fashion making it a great plant to have in a hanging display to fill up any empty space on a shelf or desktop. 
      This particular variety has shorter, more rounded leaves than a typical pothos, and has a tanish white pattern on the edges of its leaves.
         `,
      price: 29.99,
      inStock: false,
      category: 'Houseplant',
      imageURL:
        'https://cdn.shopify.com/s/files/1/2528/3612/products/1-Pothos-Njoy-6_4_473x473.jpg?v=1627692853',
    });

    const product3 = await Products.createProduct({
      name: 'String of Pearls',
      description: `The string of pearls is a trailing succulent native to South Africa. 
      This plant has long, loose tendrils with pearl shaped foliage which retains the plants' water.
         `,
      price: 9.99,
      inStock: true,
      category: 'Succulent',
      imageURL:
        'https://cdn.shopify.com/s/files/1/2528/3612/products/1-Succulent-StringofPearls-4_473x473.jpg?v=1622836674',
    });

    const product4 = await Products.createProduct({
      name: 'Pilea Peperomioides',
      description: `Each of its lily pad like leaves float on dainty looking stems that will bob around independently in a gentle breeze. 
      Towards the upper part of every single leaf will be a white, or lighter shade of green, dot where the stem meets the leaf and holds it in place.
         `,
      price: 14.99,
      inStock: true,
      category: 'Houseplant',
      imageURL:
        'https://cdn.shopify.com/s/files/1/2528/3612/products/PileaPeperomioides_FiberPot_473x473.jpg?v=1636587409',
    });

    const product5 = await Products.createProduct({
      name: 'Watering Can',
      description: `A beautiful watering can! Holds approximately 1 liter.
         `,
      price: 19.99,
      inStock: true,
      category: 'Supplies',
      imageURL:
        'https://i.etsystatic.com/5954250/r/il/f4ca6c/4085354136/il_794xN.4085354136_gv6h.jpg',
    });

    // const user1 = await Users.createUser({
    //   firstName: 'Minsung',
    //   lastName: 'Kim',
    //   email: '123@gmail.com',
    //   username: 'minsung',
    //   password: '123456789',
    //   isAdmin: true,
    //   address1: '123 Main St',
    //   city: 'Chicago',
    //   state: 'IL',
    //   zipcode: 12345,
    // });
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
