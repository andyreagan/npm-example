import { nodeResolve } from '@rollup/plugin-node-resolve';
import * as meta from "./package.json";

export default [
    {
        input: `${meta.module}`,
        output: {
            file: 'dist/npm-example-bundle.js',
            name: 'npmExample',
            format: 'umd',
            banner: `// ${meta.name} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`
        },
        plugins: [nodeResolve()],
        // known error with circular deps:
        // https://github.com/d3/d3-selection/issues/168
        onwarn: function (warning, warn) {
           if (warning.code === 'CIRCULAR_DEPENDENCY') return;
           warn(warning);
        }
    },
    {
        input: `${meta.module}`,
        external: ['d3'],
        output: {
            file: 'dist/npm-example.js',
            name: 'npmExample',
            format: 'umd',
            banner: `// ${meta.name} v${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}`,
            globals: {
                  d3: 'd3'
                }
            },
        plugins: []
    }
];
