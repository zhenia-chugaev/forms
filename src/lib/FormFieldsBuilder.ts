import { Dictionary, FormTemplate } from '@/types';
import Tag from './Tag';

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

  public input(name: keyof T & string, attributes: Dictionary = {}): void {
    if (!Object.keys(this.template).includes(name)) {
      throw new Error("Field 'age' does not exist in the template.");
    }
    const inputTag = new Tag('input', {
      name,
      type: 'text',
      value: this.template[name],
      ...attributes,
    });
    this.state = [...this.state, inputTag];
  }
}

export default FormFieldsBuilder;
