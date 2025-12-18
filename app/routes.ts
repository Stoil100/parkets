import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('routes/home.tsx'),

    route('/burgas', 'routes/burgas.tsx'),
    route('/plovdiv', 'routes/plovdiv.tsx'),
    route('/slanchev-bryag', 'routes/slanchev-bryag.tsx'),
    route('/slanchev-den', 'routes/slanchev-den.tsx'),
    route('/sofia', 'routes/sofia.tsx'),
    route('/varna', 'routes/varna.tsx'),
    route('/zlatni-pyasatsi', 'routes/zlatni-pyasatsi.tsx'),
] satisfies RouteConfig;
