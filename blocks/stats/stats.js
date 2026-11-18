import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * Stats block.
 * Each row: [number] [label]. If a row has a single cell,
 * its first element is the number and the rest is the label.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.className = 'stats-list';

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    let numberSource;
    let labelSource;

    if (cells.length >= 2) {
      [numberSource, labelSource] = cells;
    } else if (cells[0]) {
      const [first, ...rest] = [...cells[0].children];
      numberSource = first || cells[0];
      labelSource = document.createElement('div');
      labelSource.append(...rest);
    }

    const numberText = numberSource?.textContent.trim();
    if (!numberText) return;

    const li = document.createElement('li');
    li.className = 'stats-item';
    moveInstrumentation(row, li);

    const number = document.createElement('p');
    number.className = 'stats-number';
    number.textContent = numberText;

    const label = document.createElement('p');
    label.className = 'stats-label';
    label.textContent = labelSource?.textContent.trim() || '';

    li.append(number);
    if (label.textContent) li.append(label);
    ul.append(li);
  });

  block.replaceChildren(ul);
}
