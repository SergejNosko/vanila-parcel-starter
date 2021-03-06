import Handlebars from 'handlebars';
import RootTemplate from './index.hbs';


const Root = () => {
  const template = Handlebars.compile(RootTemplate);

  return template();
};

export default Root;
