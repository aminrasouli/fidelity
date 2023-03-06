import { render } from '@testing-library/react'
import Loading from './Loading'

describe('test Loading', (): void => {
  it('to be non empty dom element', (): void => {
    const { container } = render(<Loading />)
    expect(container).not.toBeEmptyDOMElement()
  })
})
