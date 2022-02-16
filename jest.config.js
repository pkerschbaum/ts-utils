module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/$1',
  },
};
