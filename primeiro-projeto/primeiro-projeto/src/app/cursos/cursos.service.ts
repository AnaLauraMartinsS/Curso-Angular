import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() {  }

  getCursos(){
    return ['Java', 'Angular', 'ana sei la o que'];
  }

  getNomes(){
    return ['Ana', 'Carol', 'Camila', 'Joaninha', 'carol bobona'];
  }
}
