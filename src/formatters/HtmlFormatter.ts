import { Dictionary } from '@/types';
import { Tag, TagChildren } from '@/lib';

class HtmlFormatter {
  private formatAttributes(attributes: Dictionary): string {
    const result = Object.entries(attributes)
      .map(([key, value]) =>
        value === true ? ` ${key}` : ` ${key}="${value.toString()}"`
      )
      .join('');
    return result;
  }

  private formatChildren(children: TagChildren): string {
    const result = Array.isArray(children)
      ? children.map((child) => this.format(child)).join('')
      : typeof children === 'string'
        ? children
        : this.format(children);
    return result;
  }

  public format(tag: Tag): string {
    const tagName = tag.getName();
    const attributes = this.formatAttributes(tag.getAttributes());
    if (tag.isSingle()) {
      return `<${tagName}${attributes}>`;
    }
    const children = this.formatChildren(tag.getChildren());
    return `<${tagName}${attributes}>${children}</${tagName}>`;
  }
}

export default HtmlFormatter;
