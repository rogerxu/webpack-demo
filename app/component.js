import lo from 'lodash';
import button from './button';

const Container = () => {
  const container = document.createElement('div');
  container.className = 'container';

  const title = document.createElement('h1');
  title.innerHTML = lo.join(['Hello', 'Webpack'], ' ');
  container.appendChild(title);

  const btn = button();
  container.appendChild(btn);

  return container;
};

export default Container;
