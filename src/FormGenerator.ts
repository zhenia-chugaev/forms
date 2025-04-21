import { Dictionary } from '@/types';
import Tag from './lib/Tag';

class FormGenerator {
  private builder = {};

  public static formFor(
    template: Record<string, string>,
    attributes: Dictionary,
    builderFunction: (builder: object) => void
  ): string {
    const { builder } = new FormGenerator();
    builderFunction(builder);
    const { url = '#', method = 'post' } = attributes;
    const formTag = new Tag('form', { action: url, method });
    const formHtml = formTag.toString();
    return formHtml;
  }
}

export default FormGenerator;
