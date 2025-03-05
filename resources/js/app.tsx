import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import posthog from 'posthog-js'

posthog.init('phc_5O2GnTcnikc0fd7iKLMrPoYdw49KP9nTfe2GcATX2BN', { api_host: 'https://us.i.posthog.com' })

/**
 * Represents the name of the application.
 * Retrieves the text content of the first <title> element in the document, if available.
 * If the <title> element does not exist or is unavailable, defaults to 'MENA Speakers'.
 */
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
