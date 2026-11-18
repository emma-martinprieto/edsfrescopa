/**
 * Landing template: no header or footer, centered content.
 * Removes the header and footer elements so loadLazy does not fetch nav/footer.
 * @param {Document} doc The document
 */
export default function decorate(doc) {
  doc.querySelector('body > header')?.remove();
  doc.querySelector('body > footer')?.remove();
}
