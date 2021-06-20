import { render } from '@testing-library/react'

import CssReset from './css-reset'

describe('CssReset', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CssReset>abc</CssReset>)
    expect(baseElement).toBeTruthy()
  })
})
