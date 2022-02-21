import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DataSelectors, Job } from 'src/app/state/data';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  public jobsList: Array<Array<Job>> = [];

  constructor(private _store: Store) { }

  ngOnInit(): void {
    const list = this._store.selectSnapshot(DataSelectors.SelectListJobs);
    let newLisFirst: Array<Array<Job>> = [];
    if( list.length > 2 ){
      let newLisSecond: Array<Job> = [];
      let acc = 1;
      list.forEach( data => {
        newLisSecond.push(data);
        acc++;
        if ( acc > 2 ) {
          acc = 1;
          newLisFirst.push([...newLisSecond]);
          newLisSecond = [];
        }
      });
      this.jobsList = newLisFirst;
    }else{
      newLisFirst.push(list);
    }
  }

}
