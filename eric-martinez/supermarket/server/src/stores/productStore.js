const products = [
  {
    'product-name': "MEN'S BETTER THAN NAKED&trade; JACKET",
    'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
    'header-top-right-text': 'Shop All',
    'header-top-left-text': "Men's",
    'product-url': 'http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html',
    'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-mens/',
    price: 10,
    id: 10,
  },
  {
    'product-name': "WOMEN'S BETTER THAN NAKED&trade; JACKET",
    'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png',
    'header-top-right-text': 'Shop All',
    'header-top-left-text': "Women's",
    'product-url': 'http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html',
    'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-womens/',
    price: 15,
    id: 11,
  },
  {
    'product-name': "WOMEN'S SINGLE-TRACK SHOE",
    'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png',
    'header-top-right-text': 'Shop All',
    'header-top-left-text': 'Running Shoes',
    'product-url': 'http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html',
    'header-top-right-url': 'http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes',
    price: 25,
    id: 12,
  },
  {
    'product-name': 'Enduro Boa&reg; Hydration Pack',
    'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png',
    'header-top-right-text': 'Shop All',
    'header-top-left-text': 'Equipment',
    'product-url': 'http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html',
    'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-equipment/',
    price: 13,
    id: 13,
  },
  {
    'product-name': "MEN'S BETTER THAN NAKED&trade; JACKET",
    'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png',
    'header-top-right-text': 'Shop All',
    'header-top-left-text': "Men's",
    'product-url': 'http://www.thenorthface.com/catalog/sc-gear/men-39-s-better-than-naked-8482-jacket.html',
    'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-mens/',
    price: 28,
    id: 14,
  },
  {
    'product-name': "WOMEN'S BETTER THAN NAKED&trade; JACKET",
    'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png',
    'header-top-right-text': 'Shop All',
    'header-top-left-text': "Women's",
    'product-url': 'http://www.thenorthface.com/catalog/sc-gear/women-39-s-better-than-naked-8482-jacket.html',
    'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-womens/',
    price: 38,
    id: 15,
  },
  {
    'product-name': "WOMEN'S SINGLE-TRACK SHOE",
    'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png',
    'header-top-right-text': 'Shop All',
    'header-top-left-text': 'Running Shoes',
    'product-url': 'http://www.thenorthface.com/catalog/sc-gear/womens-single-track.html',
    'header-top-right-url': 'http://www.thenorthface.com/webapp/wcs/stores/servlet/TNFSearchResult?langId=-1&amp;storeId=207&amp;catalogId=10201&amp;searchTerm=running%20shoes',
    price: 66,
    id: 16,
  },
  {
    'product-name': 'Enduro Boa&reg; Hydration Pack',
    'product-image-url': 'http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png',
    'header-top-right-text': 'Shop All',
    'header-top-left-text': 'Equipment',
    'product-url': 'http://www.thenorthface.com/catalog/sc-gear/enduro-boa.html',
    'header-top-right-url': 'http://www.thenorthface.com/en_US/shop-equipment/',
    price: 9,
    id: 17,
  },
];

// eslint-disable-next-line no-underscore-dangle
let _basket = [];

class Product {
  static getProducts() {
    return products;
  }

  static getProductById(productId) {
    return products.find((product) => product.id === productId);
  }

  static getBasket() {
    return _basket;
  }

  static addProduct(newProduct) {
    _basket = [..._basket, newProduct];
    return _basket;
  }

  static deleteProduct(productId) {
    _basket = _basket.filter((product) => product.basketProduct.cartId !== productId);
    return _basket;
  }
}

module.exports = Product;
