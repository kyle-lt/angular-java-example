import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DisplayBoardComponent } from './display-board.component';
import { UsersComponent } from './users.component';
import { environment } from '../environments/environment';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TestComponentComponent } from './test-component/test-component.component';

// state related imports
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { reducers, metaReducers } from './app-state/reducers';
// import { CustomRouterStateSerializer } from './app-state/shared/utils';
// import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayBoardComponent,
    UsersComponent,
    UserDetailsComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'users/:userId', component: UserDetailsComponent },
	  { path: 'users/delete:userId', component: UserDetailsComponent },
	  { path: 'test', component: TestComponentComponent } 
    ])
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.

    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.

    StoreRouterConnectingModule,

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension

     !environment.production ? StoreDevtoolsModule.instrument() : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
