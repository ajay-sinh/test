import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  TableRecord$ = new BehaviorSubject([
    {
      product_name: 'paneer',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 100,
      description:
        'Lorem Ipsum isng industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'yogut',
      price: 150,
      description:
        'Lorem Ipsum is simply dummy text of the printing and en the industry',
      quantity: 1,
    },
    {
      product_name: 'Fermented milk ',
      price: 300,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'Cheese',
      price: 20,
      description:
        'Lorem Ipsum is simply dummy text of the pritry. Lorem Ipsum has been the industry',
      quantity: 22,
    },
    {
      product_name: 'Casein',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',

      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 5500,
      description:
        'Lorem Ipsum is simply dummy text of the pLorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'Custard',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 55,
      description:
        'Lorem Ipsum is simply dummy text of the printi',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'Custard',
      price: 33,
      description:
        'Lorem Ipsum is simply dummy text of the printihas been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 100,
      description:
        'Lorem Ipsum is simply dummy text of the printing and sum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 444,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typeset been the industry',
      quantity: 2,
    },
    {
      product_name: 'Cream',
      price: 44,
      description:
        'Lorem Ipsum is simply dummy text of thetry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
    {
      product_name: 'milk',
      price: 33,
      description:
        'Lorem Ipsum is simply dummand typesetting industry. Lorem Ipsum has been the industry',
      quantity: 2,
    },
  ]);
  constructor() {

  }
}
