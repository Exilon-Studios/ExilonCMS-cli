#!/usr/bin/env node
// ESM dynamic import wrapper for CommonJS compatibility
import('../dist/index.js').catch((err) => {
  console.error('Failed to load ExilonCMS CLI:', err);
  process.exit(1);
});
