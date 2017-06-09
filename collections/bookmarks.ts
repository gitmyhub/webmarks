import { Mongo } from 'meteor/mongo';
import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

export interface bookmark {
    title: string;
    url: string;
    category: string;
    userId: string;
}
export const Bookmarks= new MongoObservable.Collection<bookmark>('bookmarks');
function loggedIn() {
  return !!Meteor.user();
}
Bookmarks.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});