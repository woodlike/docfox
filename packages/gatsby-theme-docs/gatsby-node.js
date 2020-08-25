require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'ES5',
    typeRoots: ['./node_modules/@types', './typings'],
  },
});

const {
  createPages,
  createSchema,
  createCustomResolvers,
  sourceNodes,
  verifyDir,
} = require('./src/gatsby');

exports.onPreBootstrap = args => verifyDir(args);
exports.sourceNodes = ({ actions }) => sourceNodes(actions);
exports.createSchemaCustomization = args => createSchema(args);
exports.createResolvers = ({ createResolvers, reporter }) =>
  createCustomResolvers(createResolvers, reporter);
exports.createPages = async args => await createPages(args);
