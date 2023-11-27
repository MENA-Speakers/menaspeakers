//truncate text and strip html tags
export default function truncateText(text : string, length : number) : string {
  //null check
  if (text == null) {
    return '';
  }
  //strip html tags
  text = text.replace(/<(?:.|\n)*?>/gm, '');
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
}
