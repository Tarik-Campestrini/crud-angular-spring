import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../service/cursos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['nome','categoria'];



  constructor(private cursosService: CursosService) {

    this.cursos$ = this.cursosService.list();

  }

  ngOnInit(): void {

  }

}
