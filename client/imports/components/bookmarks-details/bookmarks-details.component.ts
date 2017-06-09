import { Component, OnInit, NgZone } from "@angular/core";
import template from "./bookmarks-details.html";
import { Bookmarks, bookmark } from '../../../../collections/bookmarks';
import { Mongo } from 'meteor/mongo';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Meteor } from 'meteor/meteor';


//import {FORM_DIRECTIVES, FormBuilder,Validators,Control,ControlGroup } from '@angular/forms';

@Component({
    selector: "bookmarks-details",
    template: template,
    // styles: [ style ]
})
export class BookmarksDetails implements OnInit {
    private sub: any;
    bookmarkId: string;
    bookmark: bookmark;
    isOwner = false;
    constructor(private zone: NgZone, private route: ActivatedRoute) {
    }
    ngOnInit() {
        // Subscribe to route params
        this.sub = this.route.params.subscribe(params => {
            debugger;
            this.bookmarkId = params['bookmarkId'];
            this.bookmark = Bookmarks.findOne(this.bookmarkId);
        });
        debugger;
        var current = Bookmarks.findOne(this.bookmarkId);
        
        if ( Meteor.userId() != null && ( current.userId == Meteor.userId()) )  {
            this.isOwner = true;
        }        
    }

    ngOnDestroy() {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    }

    updateBookmark(bookmark) {
        if (Meteor.userId()) {
            Bookmarks.update(bookmark._id, {
                title: bookmark.title,
                url: bookmark.url,
                category: bookmark.category
            });

        } else {
            alert('Please log in to add bookmark');
        }


    }

}
