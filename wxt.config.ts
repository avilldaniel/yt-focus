import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  browser: 'chrome',
  manifest: {
    name: 'YT Focus',
    description: 'Auto-focuses the YouTube video player on window focus for immediate keyboard control',
  },
});
