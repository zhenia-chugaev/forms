import { FormTemplate, FormFieldAttributes, Dictionary } from '@/types';
import Tag from './Tag';

const getInputTag = (name: string, value: string, attributes: Dictionary): Tag =>
  new Tag('input', {
    name,
    type: 'text',
    value,
    ...attributes,
  });

const getTextareaTag = (name: string, value: string, attributes: Dictionary): Tag =>
  new Tag(
    'textarea',
    {
      cols: 20,
      rows: 40,
      name,
      ...attributes,
    },
    value
  );

const tags = {
  input: getInputTag,
  textarea: getTextareaTag,
};

class FormFieldsBuilder<T extends FormTemplate> {
  private state: Tag[] = [];
  private template: T;

  constructor(template: T, initialState: Tag[] = []) {
    this.state = initialState;
    this.template = template;
  }

  public getState() {
    const state = [...this.state];
    return state;
  }

  public input(name: keyof T & string, attributes: FormFieldAttributes = {}): void {
    if (!Object.keys(this.template).includes(name)) {
      throw new Error("Field 'age' does not exist in the template.");
    }
    const {
      as = 'input',
      value = this.template[name],
      ...restAttributes
    }: FormFieldAttributes = attributes;
    const tag = tags[as](name, value.toString(), restAttributes);
    this.state = [...this.state, tag];
  }
}

export default FormFieldsBuilder;
