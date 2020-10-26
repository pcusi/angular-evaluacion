/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { AlacService } from 'src/app/services/alac.service';

@Component({
  selector: 'app-alac',
  templateUrl: './alac.component.html',
  styleUrls: ['./alac.component.css']
})
export class AlacComponent implements OnInit {

  public data: Data[] = [];
  public person: Person;

  constructor(
    // tslint:disable-next-line:variable-name
    private _alac: AlacService
  ) {
    this.person = new Person('', '');
  }

  ngOnInit(): void {
    this.getLista();
  }

  // tslint:disable-next-line:typedef
  submit(form) {
    this._alac.register(this.person).subscribe((data => {
      console.log(data);
    }));
  }

  // tslint:disable-next-line:typedef
  getLista() {
    this._alac.getLista().subscribe((data: any) => {
      this.data = data.data;
    });
  }

}
