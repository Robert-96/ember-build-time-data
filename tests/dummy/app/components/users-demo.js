import Component from '@glimmer/component';
import users from '../support/users';

export default class DataDemoComponent extends Component {
  get users() {
    return JSON.stringify(users);
  }
}