import { defineConfig } from 'vitest/config'

const config = defineConfig({
  test: {
    coverage: {
      provider: 'v8'
    }
  }
})

export default config;