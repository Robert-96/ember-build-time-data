import Component from '@glimmer/component';
import data from '../support/data';

export default class DataDemoComponent extends Component {
  get data() {
    return JSON.stringify(data);
  }
}