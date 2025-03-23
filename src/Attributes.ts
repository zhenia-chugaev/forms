import { Dictionary } from '@/types';

class Attributes {
  constructor(private attributes: Dictionary) {}

  public toString(): string {
    const result = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value.toString()}"`)
      .join('');
    return result;
  }
}

export default Attributes;
