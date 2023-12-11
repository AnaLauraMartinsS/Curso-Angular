import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  nomePortal: string;
  cursos: string[];
  nomes: string[];

  constructor(public cursoService: CursosService){
    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursoService.getCursos();
    this.nomes = this.cursoService.getNomes();
  }

}
