import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Mouse' }
  ];

  private products: Product[] = [
    {
      id: 1, categoryId: 1, likes: 0,
      name: 'iPhone 15 Pro Max 256GB',
      description: 'The new titanium design is lighter than ever, while the A17 Pro chip delivers a huge boost in performance for gaming and pro workflows.',
      price: 723893, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/'
    },
    {
      id: 2, categoryId: 1, likes: 0,
      name: 'Xiaomi REDMI Note 13 Pro',
      description: 'Powerful performance with the MediaTek Dimensity 9200+ chipset, a stunning 6.67" AMOLED display.',
      price: 142697, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h09/84917646688286.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h8c/h51/84992497647646.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-8-gb-256-gb-chernyi-115911365/?c=750000000'
    },
    {
      id: 3, categoryId: 1, likes: 0,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'The latest Samsung flagship with an advanced camera system and powerful performance.',
      price: 672000, rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84973510524958.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/'
    },
    {
      id: 4, categoryId: 1, likes: 0,
      name: 'Poco X6 Pro',
      description: 'A powerful smartphone with a sleek design, featuring a high-refresh-rate display and a versatile camera setup.',
      price: 204000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h45/84940376899614.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h94/h16/84997092179998.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-chernyi-115961596/?c=750000000'
    },
    {
      id: 5, categoryId: 1, likes: 0,
      name: 'OPPO Reno10 5G ',
      description: 'A stylish and powerful smartphone with a high-quality display and advanced camera features.',
      price: 179000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pda/p1a/13980182.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448195614.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/oppo-reno10-5g-12-gb-256-gb-seryi-131658533/?c=750000000'
    },

    {
      id: 6, categoryId: 2, likes: 0,
      name: 'Apple MacBook Air 13 M1',
      description: 'The thinnest and lightest laptop, completely transformed by Apple M1 chip.',
      price: 398000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-8-gb-ssd-256-gb-macos-mgn63-100797845/'
    },
    {
      id: 7, categoryId: 2, likes: 0,
      name: 'Lenovo IdeaPad 3',
      description: 'The ideal laptop for everyday tasks and study.',
      price: 171000, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h89/hba/84542845681694.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000'
    },
    {
      id: 8, categoryId: 2, likes: 0,
      name: 'Asus ROG Strix G15',
      description: 'Dominate the game with this powerful machine featuring optimized cooling.',
      price: 950000, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/hbb/67048082538526.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h09/ha9/85038930460702.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g15-15-6-16-gb-ssd-1000-gb-win-11-g513rs-hq040w-90nr0b55-m001x0-108114533/?c=750000000'
    },
    {
      id: 9, categoryId: 2, likes: 0,
      name: 'Acer Nitro 5',
      description: 'Dominate the game with this powerful machine featuring optimized cooling.',
      price: 547000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p98/p1b/54653526.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5b/hc4/84992386924574.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-15-6-16-gb-ssd-512-gb-bez-os-nh-qfher-006-135871819/?c=750000000'
    },
    {
      id: 10, categoryId: 2, likes: 0,
      name: 'HP Victus 15',
      description: 'Dominate the game with this powerful machine featuring optimized cooling.',
      price: 539000, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hcc/85983814680606.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h74/h13/84992224591902.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/hp-victus-15-6-16-gb-ssd-512-gb-dos-15-fb2027ci-a19gqea-119250104/?c=750000000'
    },

    {
      id: 11, categoryId: 3, likes: 0,
      name: 'Apple AirPods Pro 2',
      description: 'Active Noise Cancellation, Transparency mode, and a customizable fit for all-day comfort.',
      price: 100000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108184649758.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/'
    },
    {
      id: 12, categoryId: 3, likes: 0,
      name: 'Sony WH-1000XM5',
      description: 'The best in the industry noise cancellation, adapted to you.',
      price: 134900, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h31/h57/64468600127518.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
    },
    {
      id: 13, categoryId: 3, likes: 0,
      name: 'Marshall Major IV',
      description: 'The iconic Marshall sound with 80+ hours of wireless playback.',
      price: 18000, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h22/h7c/63953538449438.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/'
    },
    {
      id: 14, categoryId: 3, likes: 0,
      name: 'HyperX Cloud III',
      description: 'The evolution of the legendary gaming headset for maximum comfort.',
      price: 47000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/hd8/81270998728734.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha1/h6a/81363787710494.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-iii-cherno-krasnyi-110854720/?c=750000000'
    },
    {
      id: 15, categoryId: 3, likes: 0,
      name: 'A4Tech Bloody MR595',
      description: 'The powerful tool for gamers, providing an exciting sound experience.',
      price: 25000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/hbf/86491931672606.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hdf/h9c/85288440201246.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/naushniki-a4tech-bloody-mr595-renegade-zheltyi-121216249/'
    },

    {
      id: 16, categoryId: 4, likes: 0,
      name: ' Logitech G Pro X Superlight 2 ',
      description: 'The most advanced wireless gaming mouse with ultra-low latency and customizable RGB lighting.',
      price: 70890, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hd2/h3b/64627192791070.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtAHg1rUuFK6mXDttRVryEX7oA--cPfJe6iwu2nBeyQnL7sZJVYkIGgaAkAJEALw_wcB'
    },
    {
      id: 17, categoryId: 4, likes: 0,
      name: 'Logitech Pro X Superlight',
      description: 'Mouse with ultra-lightweight design and high-precision sensor for competitive gaming.',
      price: 63000, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/h35/64158329045022.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hea/h65/84227749183518.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/logitech-pro-x-superlight-chernyi-101948870/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtAHg1rUuFK6mXDttRVryEX7oA--cPfJe6iwu2nBeyQnL7sZJVYkIGgaAkAJEALw_wcB'
    },
    {
      id: 18, categoryId: 4, likes: 0,
      name: 'Logitech MX Master 3S',
      description: 'The most advanced wireless mouse with ultra-low latency and customizable RGB lighting.',
      price: 50000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h99/87277624328222.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha6/h71/83818318266398.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006560-belyi-106172406/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtAHg1rUuFK6mXDttRVryEX7oA--cPfJe6iwu2nBeyQnL7sZJVYkIGgaAkAJEALw_wcB'
    },
    {
      id: 19, categoryId: 4, likes: 0,
      name: 'ASUS ROG Gladius III',
      description: 'The most advanced wireless gaming mouse with ultra-low latency and customizable RGB lighting.',
      price: 50000, rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p13/pd7/9325945.png?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9f/ha4/86018593456158.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/asus-rog-gladius-iii-wireless-aimpoint-chernyi-109897967/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtAHg1rUuFK6mXDttRVryEX7oA--cPfJe6iwu2nBeyQnL7sZJVYkIGgaAkAJEALw_wcB'
    },
    {
      id: 20, categoryId: 4, likes: 0,
      name: 'ZOWIE U2-DW',
      description: 'The most advanced wireless gaming mouse ',
      price: 83000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p08/p77/31152108.jpg?format=gallery-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/hdd/85007328903198.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/zowie-u2-dw-chernyi-136586281/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_bicycles_v2&gbraid=0AAAAAC7-v7g1qoEui_sxYv2nsC_19AERd&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtAHg1rUuFK6mXDttRVryEX7oA--cPfJe6iwu2nBeyQnL7sZJVYkIGgaAkAJEALw_wcB'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }
}
