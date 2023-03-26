export const jestConfigJsdom = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  roots: ['<rootDir>/src/'],
  modulePaths: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json' }],
  },
};
