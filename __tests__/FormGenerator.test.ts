import { readFixture, formatHtml } from '@/utils';
import FormGenerator from '@/FormGenerator';

test('form generation', async () => {
  const template = { name: 'anna', job: 'nurse', gender: 'f' };
  const form = FormGenerator.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit();
  });
  const html = await readFixture('form1.html');
  expect(form).toBe(formatHtml(html));
});

test('specifying additional tag attributes', async () => {
  const template = { name: 'anna', job: 'nurse', gender: 'f' };
  const form = FormGenerator.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input', readonly: true });
    f.input('job');
  });
  const html = await readFixture('form2.html');
  expect(form).toBe(formatHtml(html));
});

test('overriding default attribute values', async () => {
  const template = { name: 'anna', job: 'nurse', gender: 'f' };
  const form = FormGenerator.formFor(template, { url: '#' }, (f) => {
    f.input('name', { type: 'hidden' });
    f.input('job', { as: 'textarea', rows: 50, cols: 50, minlength: 5 });
    f.submit('Send');
  });
  const html = await readFixture('form3.html');
  expect(form).toBe(formatHtml(html));
});

test('accessing non-existent template property', () => {
  const template = { name: 'bob', job: 'doctor', gender: 'm' };
  const getForm = () =>
    FormGenerator.formFor(template, {}, (f) => {
      f.input('name');
      // @ts-expect-error: check accessing non-existent template property
      f.input('age');
    });
  expect(() => getForm()).toThrow('Field "age" does not exist in the template');
});

test('empty form generation', () => {
  const template = { name: 'bob', job: 'doctor', gender: 'm' };
  const form = FormGenerator.formFor(template, {}, vi.fn());
  expect(form).toBe('<form action="#" method="post"></form>');
});
