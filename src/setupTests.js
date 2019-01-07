import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { truncate } from 'fs';

configure({
  adapter: new Adapter()
});

class LocalStorage {
  constructor() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, string) {
    this.store[key] = string;
  }

  clear() {
    this.store = {}
  }

  removeItem(key) {
    delete this.store[key]
  }

  hasOwnProperty(key) {
    if(this.store[key]) {
      return true;
    } else {
      return false;
    }
  }
}

global.localStorage = new LocalStorage;