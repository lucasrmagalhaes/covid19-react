import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// sem globals do vitest, o Testing Library não registra o cleanup sozinho
afterEach(() => cleanup())
