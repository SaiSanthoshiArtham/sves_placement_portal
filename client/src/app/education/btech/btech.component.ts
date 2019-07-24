import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btech',
  templateUrl: './btech.component.html',
  styleUrls: ['./btech.component.scss']
})
export class BtechComponent implements OnInit {
  value: string;

  constructor() { }

  ngOnInit() {
  }
  functi(data:string){
    console.log(data);
    this.value = data;
  }

}
