import { Component, OnInit, NgZone } from "@angular/core";
import template from "./bookmarks-list.html";
import { Bookmarks, bookmark } from '../../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

//import {FORM_DIRECTIVES, FormBuilder,Validators,Control,ControlGroup } from '@angular/forms';

@Component({
  selector: "bookmarks-list",
  template: template,
 // styles: [ style ]
})
export class BookmarksList implements OnInit{
 private bookmarks: bookmark[];
  constructor(private zone: NgZone,  private router: Router) {
  }
  ngOnInit(){
    Bookmarks.find({}).zone().subscribe({
      next: bookmarks => {
        console.log("Got Bookmarks: ", bookmarks);
        this.bookmarks = bookmarks;
      }
    });
  }

  removeBookmark(bookmark){
    debugger;
    Bookmarks.remove({_id: bookmark._id}).zone().subscribe({
        complete: ()=> {console.log("Remove Successful")}
    });
  }

  OnSelect(bookmark){
    debugger;
        this.router.navigate(['/bookmark', bookmark._id]);

  }

}
