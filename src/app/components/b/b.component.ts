import { Component, OnInit } from '@angular/core';
import { ListService } from "src/app/services/list.service";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private list:ListService){

  }
  ngOnInit(): void {
  }
  
  
  verData(){
    console.log("Ver Data")
    console.log(this.list.getGames());
     
  }

}
