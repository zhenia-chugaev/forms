import { FormTemplate, FormAttributes } from '@/types';
import Tag from './lib/Tag';
import FormFieldsBuilder from './lib/FormFieldsBuilder';

class FormGenerator<T extends FormTemplate> {
  private builder: FormFieldsBuilder<T>;

  constructor(template: T) {
    this.builder = new FormFieldsBuilder(template);
  }

  public static formFor<T extends FormTemplate>(
    template: T,
    attributes: FormAttributes,
    buildFormFields: (builder: FormFieldsBuilder<T>) => void
  ): string {
    const { url = '#', method = 'post', ...restAttributes } = attributes;
    const { builder } = new FormGenerator(template);
    buildFormFields(builder);
    const formTag = new Tag(
      'form',
      { action: url, method, ...restAttributes },
      builder.getState()
    );
    const formHtml = formTag.toString();
    return formHtml;
  }
}

export default FormGenerator;
