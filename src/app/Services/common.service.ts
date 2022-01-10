import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;
  public mu2(n: number): number {
    return n * n;
  }

  constructor() { }
}
