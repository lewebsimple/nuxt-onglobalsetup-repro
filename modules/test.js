import { resolve } from 'path';

export default function(moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'test-plugin.js'),
    options: moduleOptions,
  })
}