import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.css']
})
export class InputTimeComponent implements OnInit {
  arrayData:FormData [] = [];
  selected: Date | undefined;

  onSubmit(f: NgForm) {
    console.log(f)
    this.arrayData.push(f.value)
    console.log(this.arrayData)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
