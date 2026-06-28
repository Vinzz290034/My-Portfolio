import crypto from 'node:crypto';

// Polyfill crypto.hash for older Node.js versions (like 20.10.0) used by Vite 7
if (typeof (crypto as any).hash !== 'function') {
  (crypto as any).hash = function (
    algorithm: string,
    data: crypto.BinaryLike,
    outputEncodingFormat?: crypto.BinaryToTextEncoding
  ) {
    const hash = crypto.createHash(algorithm).update(data);
    return outputEncodingFormat ? hash.digest(outputEncodingFormat) : hash.digest();
  };
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
})

