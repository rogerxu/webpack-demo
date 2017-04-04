import lo from 'lodash';
import button from './button';
import logoImg from './images/webpack.png';

const Container = () => {
  const container = document.createElement('div');
  container.className = 'container';

  const title = document.createElement('h1');
  title.innerHTML = lo.join(['Hello', 'Webpack'], ' ');
  container.appendChild(title);

  const logo = document.createElement('img');
  logo.setAttribute('src', logoImg);
  logo.setAttribute('alt', 'Logo');
  container.appendChild(logo);

  const btn = button();
  container.appendChild(btn);

  return container;
};

export default Container;
