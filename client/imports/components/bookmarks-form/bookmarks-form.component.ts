import { Component, OnInit, NgZone } from "@angular/core";
import template from "./bookmarks-form.html";
import { Bookmarks, bookmark } from '../../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Meteor } from 'meteor/meteor';

//import {FORM_DIRECTIVES, FormBuilder,Validators,Control,ControlGroup } from '@angular/forms';

@Component({
  selector: "bookmarks-form",
  template: template,
 // styles: [ style ]
})
export class BookmarksForm implements OnInit{
   bookmarksForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(){
    this.bookmarksForm = this.fb.group({
      title: ['', [Validators.required]],
      url: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
   } 
   
/* createForm(){
    this.bookmarksForm = this.fb.group({
      title: new FormControl('',[Validators.required]),
      url: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    });
  } */

  addBookmark(bookmark){
    debugger;
  if (Meteor.userId()){
    if(this.bookmarksForm.valid){
      Bookmarks.insert({
        title: bookmark.title,
        url:  bookmark.url,
        category: bookmark.category,
        userId: Meteor.userId()
      });
      this.bookmarksForm.reset();
    }
    }else {
      alert("Please log in to add bookmark");
    }
   /*   (<Control>this.bookmarksForm.Controls['title'].updateValue(''));
      (<Control>this.bookmarksForm.Controls['url'].updateValue(''));
      (<Control>this.bookmarksForm.Controls['category'].updateValue('')); */
      
    
  }

}
