// import '@testing-library/jest-dom/extend-expect'; // Certifique-se de que este import está presente
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormsLogin } from '@/components/Login/FormsLogin';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

test('should render login form', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FormsLogin />
      </BrowserRouter>
    </QueryClientProvider>
  );
  
  expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});
