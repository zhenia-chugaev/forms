const formatHtml = (html: string): string => {
  const formattedHtml = html.replace(/>\s+</g, '><').trim();
  return formattedHtml;
};

export default formatHtml;
