import { generatePath as _generatePath } from 'react-router';

import routes from 'config/routes';

export function generatePath(routeName, params) {
  const path = routes[routeName] && routes[routeName].path;

  return _generatePath(path, params);
}
