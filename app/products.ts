export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Un gran telefono con uno dei migliori schermi del mondo'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Un gran telefono con una delle migliori fotocamere'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Un ottimo telefono super affidabile'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/