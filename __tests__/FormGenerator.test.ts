/* eslint-disable */
// @ts-nocheck

import FormGenerator from '@/FormGenerator';

test('form generation', () => {
  const template = { name: 'bob', job: 'doctor', gender: 'm' };
  const baseForm = FormGenerator.formFor(template, {}, (f) => {});
  const formWithUrl = FormGenerator.formFor(template, { url: '/users' }, (f) => {});
  expect(baseForm).toBe('<form action="#" method="post"></form>');
  expect(formWithUrl).toBe('<form action="/users" method="post"></form>');
});
