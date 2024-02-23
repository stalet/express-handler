import type { JestConfigWithTsJest } from 'ts-jest'

export default {
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts'],
} as JestConfigWithTsJest
