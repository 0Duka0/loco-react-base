import React from 'react';
// import Bugsnag from '@bugsnag/js';
// import BugsnagPluginReact from '@bugsnag/plugin-react';
import {createRoot} from 'react-dom/client';
import Routing from './routing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();

/**
 * Bugsnag 初期設定
 * @return {Object} Bugsnag tag
 */
// function initBugsnag() {
//   Bugsnag.start({
//     apiKey: '',
//     plugins: [new BugsnagPluginReact()],
//     releaseStage: process.env.ENV,
//   });
//   return Bugsnag.getPlugin('react').createErrorBoundary(React);
// }



const root = createRoot(document.getElementById('my_service'));
root.render(
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>,
);
