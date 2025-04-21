import FormGenerator from '@/FormGenerator';

test('form generation', () => {
  const template = { name: 'bob', job: 'doctor', gender: 'm' };
  const baseForm = FormGenerator.formFor(template, {}, vi.fn());
  const formWithUrl = FormGenerator.formFor(template, { url: '/users' }, vi.fn());
  expect(baseForm).toBe('<form action="#" method="post"></form>');
  expect(formWithUrl).toBe('<form action="/users" method="post"></form>');
});
