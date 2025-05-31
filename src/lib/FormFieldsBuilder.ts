import { FormTemplate, FormFieldAttributes, Dictionary } from '@/types';
import { capitalize } from '@/utils';
import Tag from './Tag';

const getLabelTag = (value: string, attributes: Dictionary): Tag =>
  new Tag('label', { ...attributes }, value);

const getInputTag = ({ id, name, value, ...attributes }: Dictionary): Tag =>
  new Tag('input', {
    id,
    name,
    type: 'text',
    value,
    ...attributes,
  });

const getTextareaTag = ({ id, name, value, ...attributes }: Dictionary): Tag =>
  new Tag(
    'textarea',
    {
      cols: 20,
      rows: 40,
      id,
      name,
      ...attributes,
    },
    value.toString()
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
    const textField = tags[as]({
      id: name,
      name,
      value,
      ...restAttributes,
    });
    const labelTag = getLabelTag(capitalize(name), {
      for: name,
    });
    this.state = [...this.state, labelTag, textField];
  }
}

export default FormFieldsBuilder;
