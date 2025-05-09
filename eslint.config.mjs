import { defineConfig } from 'eslint/config';
import { jest, react, recommended, vitest } from './index.mjs';

export default defineConfig({
  extends: [recommended, react, jest, vitest],
});
