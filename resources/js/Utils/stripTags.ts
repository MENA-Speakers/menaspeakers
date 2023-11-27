export default function stripTags(text: string) {
  return text.replace(/<(?:.|\n)*?>/gm, '');
}
