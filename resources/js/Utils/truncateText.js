//truncate text and strip html tags
export default function truncateText(text, length) {
    if (text.length > length) {
        return text.substring(0, length) + '...';
    }
    return text;
}
