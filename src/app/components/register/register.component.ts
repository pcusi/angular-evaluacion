/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import {Data} from '../../models/Data';
import {AlacService} from '../../services/alac.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public data: Data;

  constructor(
    private _alac: AlacService
  ) {
    this.data = new Data(1, '', '', '', '');
  }

  ngOnInit(): void {
  }

  submit(form) {
    this._alac.registerUser(this.data).subscribe(data => {
        console.log(data);
    });
  }

}
