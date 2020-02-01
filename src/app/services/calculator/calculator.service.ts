import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { delay, flatMap, mergeAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  sum(x1: number, x2: number): number {
    return x1 + x2;
  }

  asyncSum(x1: number, x2: number): Promise<number> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x1 + x2);
      }, 1000);
    });
  }

  getProductsByUserEmail(): Observable<Product[]> {
    const products: Product[] = [
      { id: '1', name: 'name1' },
      { id: '2', name: 'name2' },
      { id: '3', name: 'name3' },
      { id: '4', name: 'name4' },
    ];

    return of(products);
  }


  getUserByToken(token: string): Observable<User> {
    const user: User = {
      email: 'someemail@email.com'
    };
    return of(user).pipe(
      delay(1000)
    );
  }
}
