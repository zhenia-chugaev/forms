import { FormTemplate, FormAttributes } from '@/types';
import Tag from './lib/Tag';

class FormGenerator {
  private builder = {};

  public static formFor(
    template: FormTemplate,
    attributes: FormAttributes,
    buildFormFields: (builder: object) => void
  ): string {
    const { url = '#', method = 'post', ...restAttributes } = attributes;
    const { builder } = new FormGenerator();
    buildFormFields(builder);
    const formTag = new Tag('form', { action: url, method, ...restAttributes });
    const formHtml = formTag.toString();
    return formHtml;
  }
}

export default FormGenerator;
