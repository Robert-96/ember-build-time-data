import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | data-demo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<DataDemo />`);
    assert.ok(this.element.textContent.trim());
  });

  test('is should render the data', async function(assert) {
    await render(hbs`<DataDemo />`);

    const data = {
      "data": {
        "id": 1,
        "name": "EMERALD",
        "color": "#2ecc71"
      }
    }

    assert.equal(this.element.textContent.trim(), JSON.stringify(data));
  });
});