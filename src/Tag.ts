import { Dictionary } from '@/types';
import Attributes from './Attributes';

const singleTagNames = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
];

class Tag {
  private name: string;
  private attributes: Attributes;
  private children: Tag[] | string;

  constructor(
    name: string,
    attributes: Dictionary = {},
    children: Tag[] | string = '',
  ) {
    this.name = name;
    this.attributes = new Attributes(attributes);
    this.children = children;
  }

  private isSingle(): boolean {
    const result = singleTagNames.includes(this.name);
    return result;
  }

  private getChildrenAsString(): string {
    const result = Array.isArray(this.children)
      ? this.children.map((child) => child.toString()).join('')
      : this.children;
    return result;
  }

  public toString(): string {
    if (this.isSingle()) {
      return `<${this.name}${this.attributes.toString()}>`;
    }
    const children = this.getChildrenAsString();
    return `<${this.name}${this.attributes.toString()}>${children}</${this.name}>`;
  }
}

export default Tag;
