import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  muestra : boolean = false;
  muestra2 : boolean = true;
  correo : number;

  constructor() { }

  ngOnInit(): void {
  }

  mePuchaste(){
    this.muestra = true;
    console.log(this.correo);
    
  }

  mePuchaste2(){
    this.muestra2 = false;
  }

}
