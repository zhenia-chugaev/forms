import { FormTemplate, FormAttributes, FormGeneratorConfig } from '@/types';
import getFormatter from './formatters';
import Tag from './lib/Tag';
import FormFieldsBuilder from './lib/FormFieldsBuilder';

class FormGenerator<T extends FormTemplate> {
  private builder: FormFieldsBuilder<T>;

  constructor(template: T) {
    this.builder = new FormFieldsBuilder(template);
  }

  private static getFormTag<T extends FormTemplate>(
    template: T,
    attributes: FormAttributes,
    buildFormFields: (builder: FormFieldsBuilder<T>) => void
  ): Tag {
    const { url = '#', method = 'post', ...restAttributes } = attributes;
    const { builder } = new FormGenerator(template);
    buildFormFields(builder);
    const formTag = new Tag(
      'form',
      { action: url, method, ...restAttributes },
      builder.getState()
    );
    return formTag;
  }

  public static formFor<T extends FormTemplate>(
    template: T,
    attributes: FormAttributes,
    buildFormFields: (builder: FormFieldsBuilder<T>) => void,
    config: FormGeneratorConfig = {}
  ): string {
    const { format = 'html' } = config;
    const formatter = getFormatter(format);
    const formTag = FormGenerator.getFormTag(template, attributes, buildFormFields);
    const formHtml = formatter.format(formTag);
    return formHtml;
  }
}

export default FormGenerator;
