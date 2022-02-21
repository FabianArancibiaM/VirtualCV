import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetDataState } from 'src/app/state/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(new SetDataState());
  }

}
