import { Component } from "@angular/core";
import template from "./app.component.html";
import style from "./app.component.scss";
import {BookmarksList} from '../components/bookmarks-list/bookmarks-list.component';
import {BookmarksForm} from '../components/bookmarks-form/bookmarks-form.component';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class Webmarks {
  constructor() {
  }
}
