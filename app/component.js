import lo from 'lodash';

export default function () {
  const element = document.createElement('h1');

  element.className = 'pure-button';
  element.innerHTML = lo.join(['Hello', 'Webpack'], ' ');

  return element;
}
