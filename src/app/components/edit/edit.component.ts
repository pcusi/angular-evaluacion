/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Data} from '../../models/Data';
import {AlacService} from '../../services/alac.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public data: Data;


  constructor(
    private route: ActivatedRoute,
    private _alac: AlacService
  ) {
    this.data = new Data(1, '', '', '', '');
  }

  ngOnInit(): void {
    this.route.params.subscribe(id => {
      let idParams = id;
      this.getMiUsuario(idParams);
    });
  }

  getMiUsuario(id) {
    this._alac.getMiUsuario(id).subscribe((data: any) => {
      this.data = data.data;
    });
  }

  submit(form) {
    this._alac.updateUser(this.data).subscribe((data: any) => {
        console.log(data);
    });
  }
}
