import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Webmarks } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { DemoDataService } from "./demo/demo-data.service";
import { BookmarksList } from '../components/bookmarks-list/bookmarks-list.component';
import { BookmarksForm } from '../components/bookmarks-form/bookmarks-form.component';
import { BookmarksDetails } from '../components/bookmarks-details/bookmarks-details.component';
import { Bookmarks } from '../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl }         from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

const appRoutes: Routes = [
  { path: '',
    component: BookmarksList,
  },
  { path: 'bookmark/:bookmarkId', component: BookmarksDetails },
];

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    Webmarks,
    DemoComponent,
    BookmarksList,
    BookmarksForm,
    BookmarksDetails
  ],
  // Entry Components
  entryComponents: [
    Webmarks,
    BookmarksList,
    BookmarksForm,
    BookmarksDetails
  ],
  // Providers
  providers: [
    DemoDataService
  ],
  // Modules
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AccountsModule
  ],
  // Main Component
  bootstrap: [ Webmarks ]
})
export class AppModule {
  constructor() {

  }
}
