export function createURL(relativePath) {
    return new URL(relativePath, import.meta.url).toString();
}