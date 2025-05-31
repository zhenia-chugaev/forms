### Hexlet tests and linter status

[![Actions Status](https://github.com/anorone/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/anorone/typescript-project-81/actions)
[![Actions Status](https://github.com/zhenia-chugaev/forms/actions/workflows/quality-check.yml/badge.svg)](https://github.com/zhenia-chugaev/forms/actions/workflows/quality-check.yml)
[![Maintainability](https://qlty.sh/badges/dd13ad1c-8bbf-4c88-b753-f7a0c7ede6bf/maintainability.svg)](https://qlty.sh/gh/zhenia-chugaev/projects/forms)
[![Code Coverage](https://qlty.sh/badges/dd13ad1c-8bbf-4c88-b753-f7a0c7ede6bf/test_coverage.svg)](https://qlty.sh/gh/zhenia-chugaev/projects/forms)

## Description

Form Generator is a library that allows to create html forms in website templates.

## Example

```javascript
import FormGenerator from '@hexlet/code';

const template = {
  name: 'anna',
  job: 'nurse',
  gender: 'f',
};

const form = FormGenerator.formFor(template, { method: 'post' }, (f) => {
  f.input('name');
  f.input('job', { as: 'textarea' });
  f.submit();
});

console.log(form);

//  <form action="#" method="post">
//    <label for="name">Name</label>
//    <input id="name" name="name" type="text" value="anna">
//    <label for="job">Job</label>
//    <textarea cols="20" rows="40" id="job" name="job">nurse</textarea>
//    <input type="submit" value="Save">
//  </form>
```
