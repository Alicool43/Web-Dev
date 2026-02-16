import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 17 Pro 256GB (Blue)',
      description: 'iPhone 17, designed to be the most powerful iPhone ever.',
      price: 744000,
      rating: 4.8,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/0/0/a3059cf84bd3d8b490160cf0ebba16c2/44fb6310e8572aa81da9c27975fadc1b475bbb6ea7f897f1b0c17ad3ad357234.jpg.webp',
      images: [
        'https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_13.png',
        'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-gallery2-2021?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1629919030000'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000'
    },
    {
      id: 2,
      name: 'Logitech G Pro X Superlight 2 Mouse (Black)',
      description: 'Logitech G Pro X Superlight 2 is a wireless gaming mouse designed for professionals and enthusiasts.',
      price: 71000,
      rating: 4.7,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/wm/0/0/cc709bcbf2f63d7903ee93905486f4f4/c4e6aaa511f96c2e5d6b44aceabebcd06f3ef1944078a0cd66ae06a1666c2c1b.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h50/h7b/83187484057630.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h72/h2a/83187484155934.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h95/hbb/83187484254238.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=750000000'
    },
    {
      id: 3,
      name: 'Acer Nitro OKW303 Wired Keyboard',
      description: 'The Acer Nitro OKW303 wired mechanical keyboard will ensure a comfortable gaming experience.',
      price: 25000,
      rating: 4.6,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/wm/0/0/e1051bd7cb45722eef6cf8837bbf49b6/edd86a9062f75acb3f05c934f43b54738e1f9d47673ad6b9586f70bf4bc42980.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/hf6/85647302869022.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h2c/h24/85647302967326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h83/h12/85647303065630.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/acer-nitro-okw303-chernyi-132385251/?c=750000000'
    },
    {
      id: 4,
      name: 'A4Tech Bloody MR595 Renegade',
      description: 'The A4Tech Bloody MR595 Renegade headset is a powerful tool for gamers, providing immersive sound and comfortable in-game communication.',
      price: 25000,
      rating: 4.9,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/0/0/c30703a0f06ce4412d2b63189bb848ea/945fb123556ea4eb2b5970fa318532a681d3ff73019680de023ff275e32a2636.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h9c/85288440201246.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/h19/85288440365086.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h2b/85288440528926.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-a4tech-bloody-mr595-renegade-zheltyi-121216249/?c=750000000'
    },
    {
      id: 5,
      name: 'POCO Watch smartwatch',
      description: 'The POCO Watch smartwatch is a convenient and practical device for everyday use and maintaining health.',
      price: 27000,
      rating: 4.9,
      image: 'https://c.dns-shop.kz/thumb/st4/fit/wm/0/0/87249115325325485491477f42e9024d/166d3b80dc1d6361c0ccfc3ec1fab2aa509181bf0d9a67d2f44ed030185b242b.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdf/64010133360670.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h33/h4a/64010133458974.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h90/64010133557278.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/poco-watch-41-mm-bezhevyi-bezhevyi-105474565/?c=750000000'
    },
    {
      id: 6,
      name: 'Xiaomi REDMI Note 15 Pro 5G 512GB Smartphone (Blue)',
      description: 'The Xiaomi REDMI Note 15 Pro 5G is a powerful and stylish smartphone with a large screen and high resolution.',
      price: 189990,
      rating: 4.9,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/wm/0/0/756ff4ec8dff4042e4e30b15ba1e26ac/6de4126cd15bfb94374d809df8ea9005f2b1fddf6d6b8bdb5d42c64853f485c8.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h3e/84656233246750.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2a/84656233345054.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1f/hb3/84656233443358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-15-pro-4g-nfc-12-gb-512-gb-goluboi-153917635/?c=750000000'
    },
    {
      id: 7,
      name: 'JBL Grip',
      description: 'The BL Grip is comfortable to hold and grip, delivering powerful JBL Pro sound wherever you are.',
      price: 56600,
      rating: 4.8,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/wm/0/0/f529f18c11849624ee4171ad4241452f/f8071ee79ae864f74450af774e5b1630761a07d92e4c291095066c5ecb8f888f.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/hdf/84500000000000.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/h33/84500000000001.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h34/h44/84500000000002.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-grip-chernyi-148938361/?c=750000000'
    },
    {
      id: 8,
      name: 'PlayStation 5 Slim',
      description: 'Immersive gaming experience in a slim form factor. Get ready to meet the new PlayStation 5 Slim.',
      price: 304000,
      rating: 4.7,
      image: 'https://c.dns-shop.kz/thumb/st4/fit/0/0/a86c18feb797ba7aa3ff4105966dad24/3e99cf343772b154734ed2241de31efc24e2c1f3a34945ef96b69703d5fe5a73.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc2/h4f/86000000000000.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/h55/86000000000001.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h77/86000000000002.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 9,
      name: 'HyperX QuadCast 2 S Microphone (Black)',
      description: 'The HyperX QuadCast 2 S microphone is a professional audio recording solution that delivers high quality and ease of use.',
      price: 128000,
      rating: 4.8,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/0/0/b32db34e4800b0be3f29d43e27c41131/f6647678e50d740f319a652fa9691b2bf86cc38c30ae337485d77def401e61e8.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h99/h11/85000000000000.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h33/85000000000001.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h44/h55/85000000000002.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/mikrofon-hyperx-quadcast-2-s-chernyi-133769109/?c=750000000'
    },
    {
      id: 10,
      name: 'Kingston Fury Beast Black RAM [KF552C40BBK2-32] 32 GB',
      description: 'Kingston FURY Beast Black RGB DDR5 RAM is designed for high-performance gaming systems.',
      price: 269000,
      rating: 4.9,
      image: 'https://c.dns-shop.kz/thumb/st1/fit/wm/0/0/f23adb802e1572e69bf83b08b4fccfd9/7c7d32b18fbd947c7d7e7521df28068f87fd8165cca086230116fbe41b6155a9.jpg.webp',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h99/84000000000000.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h20/84000000000001.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/h40/84000000000002.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/kingston-fury-beast-rgb-kf556c40bba-32-32-gb-106598859/?c=750000000'
    }
  ];
}