import { render, screen, fireEvent, waitFor } from '@testing-library/react-native'
import { SignInContainer } from '../components/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments whena  valid form is submitted', async () => {
      const mockSubmit = jest.fn()
      render(<SignInContainer onSubmit={mockSubmit}/>)

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'matti')
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password')
      fireEvent.press(screen.getByText('sign in'))
    
      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalledTimes(1)

        expect(mockSubmit.mock.calls[0][0]).toEqual({
          username: 'matti',
          password: 'password'
        })
      })
    })
  })
})