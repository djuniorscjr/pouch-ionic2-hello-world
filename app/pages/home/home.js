import {Page} from 'ionic-angular';

const PouchDB = require('pouchdb');

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
    const db = new PouchDB('pouch');
    const idb = new PouchDB('idbpouch', {adapter: 'idb'});
    const websql = new PouchDB('websqlpouch', {adapter: 'websql'});

    this.pouchdbSupported = !!db.adapter;
    this.idbSupported = !!idb.adapter;
    this.websqlSupported = !!websql.adapter;
  }
}
