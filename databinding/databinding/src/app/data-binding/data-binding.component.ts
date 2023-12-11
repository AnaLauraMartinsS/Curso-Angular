import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  //Variaveis
  url: string = 'https://loiane.training';
  cursoAngular: boolean = true;
  urlImagem = 'https://imgb.ifunny.co/images/55c3805d754ab07b7965edefb1ed87fdfc4310145d8967d3734c85a5dee1b357_1.webp';

  //Funções

  getValor(){
    return 5;
  }

  getCurtirCurso(){
    return true;
  }
  
}
