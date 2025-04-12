import Tag from '@/Tag';

test('single tags', () => {
  const BrTag = new Tag('br');
  const ImgTag = new Tag('img', { src: 'path/to/image' });
  const InputTag = new Tag('input', { type: 'submit', value: 'Save' });
  expect(BrTag.toString()).toBe('<br>');
  expect(ImgTag.toString()).toBe('<img src="path/to/image">');
  expect(InputTag.toString()).toBe('<input type="submit" value="Save">');
});

test('paired tags', () => {
  const SpanTag = new Tag('span', {}, 'Text');
  const LabelTag = new Tag('label', { for: 'email' }, 'Email');
  const ButtonTag = new Tag('button', { type: 'button', disabled: true }, 'Click');
  const DivTag = new Tag('div');
  expect(SpanTag.toString()).toBe('<span>Text</span>');
  expect(LabelTag.toString()).toBe('<label for="email">Email</label>');
  expect(ButtonTag.toString()).toBe('<button type="button" disabled>Click</button>');
  expect(DivTag.toString()).toBe('<div></div>');
});

test('nested tags', () => {
  const HtmlTag = new Tag('html', { lang: 'en' }, [
    new Tag('head'),
    new Tag('body'),
  ]);
  expect(HtmlTag.toString()).toBe(
    '<html lang="en"><head></head><body></body></html>'
  );
});
