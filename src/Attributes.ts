import { Dictionary } from '@/types';

class Attributes {
  constructor(private attributes: Dictionary) {}

  public toString(): string {
    const result = Object.entries(this.attributes)
      .map(([key, value]) =>
        value === true ? ` ${key}` : ` ${key}="${value.toString()}"`
      )
      .join('');
    return result;
  }
}

export default Attributes;
