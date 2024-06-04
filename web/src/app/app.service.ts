import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string = "http://127.0.0.1:3000"
  constructor() { }
}
