import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AppService } from './app.service';
//import { AppComponent } from './app.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  //, private appComponent: AppComponent
  constructor(private appService: AppService) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() users: any[];

  deleteResponse: string = null;

  deleteUser(id: number) {
	//console.log("Calling deleteUser(" + id + ")");
	this.appService.deleteUser(id).pipe(takeUntil(this.destroy$)).subscribe((response: string) => {
        console.log(response);
        this.deleteResponse = response;
    });
    //this.appComponent.getAllUsers();
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
