import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private list:any[] =[
    {
      name: "Super Mario Kart",
      description: "Juego de aventuras",
      platform: "Nintendo",
    },
    {
      name: "Gran turismo",
      description: "Juego de carreras",
      platform: "PlayStation", 
    },
    {
      name: "GTA",
      description: "Juego de aventuras",
      platform: "Multiplataforma",
    },
    {
      name: "Mortal Kombat",
      description: "Juego de peleas",
      platform: "Multiplataforma",
    }
  ]

  constructor() { }

  getGames()
{
  return this.list
}
}