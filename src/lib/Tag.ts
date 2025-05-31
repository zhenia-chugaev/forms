import { Dictionary } from '@/types';

type TagChildren = Tag | Tag[] | string;

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
  'wbr',
];

class Tag {
  constructor(
    private name: string,
    private attributes: Dictionary = {},
    private children: TagChildren = ''
  ) {}

  public getName(): string {
    const { name } = this;
    return name;
  }

  public getAttributes(): Dictionary {
    const { attributes } = this;
    return attributes;
  }

  public getChildren(): TagChildren {
    const { children } = this;
    return children;
  }

  public isSingle(): boolean {
    const result = singleTagNames.includes(this.name);
    return result;
  }
}

export default Tag;

export type { TagChildren };
