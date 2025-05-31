import { FormTemplate, FormFieldAttributes, Dictionary } from '@/types';
import { capitalize } from '@/utils';
import Tag from './Tag';

const getLabelTag = (id: string, value: string, attributes: Dictionary = {}): Tag =>
  new Tag('label', { for: id, ...attributes }, value);

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
    const textField = tags[as](name, value.toString(), {
      id: name,
      ...restAttributes,
    });
    const labelTag = getLabelTag(name, capitalize(name));
    this.state = [...this.state, labelTag, textField];
  }
}

export default FormFieldsBuilder;
