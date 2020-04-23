import { ResourceManager } from '../../src/providers/database/ResourceManager';
import { initFireWrapper } from './utils/test-helpers';

const fire = initFireWrapper('root-test');

test('rootref1', async () => {
  const rm = new ResourceManager(fire, {
    rootRef: 'root-ref1/ok'
  });
  await fire.db().collection('root-ref1/ok/t1').add({test:''})
  const r = await rm.TryGetResourcePromise('t1', null);
  const snap = await r.collection.get();
  expect(snap.docs.length).toBe(1);
}, 10000);
