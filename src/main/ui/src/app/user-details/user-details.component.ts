import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  private routeSub: any;
  //@Input() userId: number;
  @Output() userId: string;
  id: string;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  users: any = null;

  getUser() {
	this.appService.getUser(parseInt(this.id)).pipe(takeUntil(this.destroy$)).subscribe((users: any) => {
        this.users = users;
    });
	this.userId = this.id;
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
		this.id = params['userId'];
		this.getUser();
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
	this.routeSub.unsubscribe();
  }

}
