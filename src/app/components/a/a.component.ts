import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  title:string = 'Tarea 1 Angular';
  sub:string = 'Camilo Jimenez';

  constructor() { }

  ngOnInit(): void {
  }

}
