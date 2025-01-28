import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  sandboxInjectedGlobals: [
    'Math',
  ],
  setupFilesAfterEnv: ['./helpers/askui-helper.ts'],
  testEnvironment: '@askui/jest-allure-circus',
  testMatch: [
    "**/*.test.ts",
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};

export default config;
