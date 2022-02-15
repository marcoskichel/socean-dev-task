import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
