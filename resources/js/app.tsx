import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import posthog from 'posthog-js'

posthog.init('phc_5O2GnTcnikc0fd7iKLMrPoYdw49KP9nTfe2GcATX2BN', { api_host: 'https://us.i.posthog.com' })

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'MENA Speakers';

createInertiaApp({
  title: (title) => `${title} | ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
        <App {...props} />
    );
  },
  progress: {
    color: '#14b8a6',
  },
});



// color: '#2A72A9',
