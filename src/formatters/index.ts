/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import { Formats } from '@/types';
import { Tag } from '@/lib';
import HtmlFormatter from './HtmlFormatter';

interface Formatter {
  format(tag: Tag): string;
}

const getFormatter = (format: Formats): Formatter => {
  switch (format) {
    case 'html':
      return new HtmlFormatter();
    default: {
      const _format: never = format;
      return _format;
    }
  }
};

export default getFormatter;
