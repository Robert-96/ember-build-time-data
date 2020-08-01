import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | users-demo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<UsersDemo />`);
    assert.ok(this.element.textContent.trim());
  });

  test('is should render the data', async function(assert) {
    await render(hbs`<UsersDemo />`);

    const users = {
      "data": [
        {
          "id": 1,
          "name": "Bilbo Baggins"
        },
        {
          "id": 2,
          "name": "Aragorn II Elessar Telcontar"
        }
      ]
    }

    assert.equal(this.element.textContent.trim(), JSON.stringify(users));
  });
});