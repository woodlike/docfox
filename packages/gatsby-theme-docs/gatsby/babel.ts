// Using require to avoid error TS7016:
// Could not find a declaration file for module
const BabelPluginPluckImports = require('babel-plugin-pluck-imports');

export interface BabelOption {
  configFile: boolean;
  plugins: unknown[];
  presets: unknown[];
}

export function createOptions(): BabelOption {
  return {
    configFile: false,
    plugins: [
      new BabelPluginPluckImports().plugin,
      require('@babel/plugin-proposal-object-rest-spread'),
      require('gatsby-plugin-mdx/utils/babel-plugin-html-attr-to-jsx-attr'),
      require('babel-plugin-remove-export-keywords'),
    ],
    presets: [
      require('@babel/preset-react'),
      [
        require('@babel/preset-env'),
        {
          useBuiltIns: `entry`,
          corejs: 2,
          modules: false,
        },
      ],
    ],
  };
}
