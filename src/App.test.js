import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('should render app', () => {
  render(<MemoryRouter>
          <App />
        </MemoryRouter>);
});
