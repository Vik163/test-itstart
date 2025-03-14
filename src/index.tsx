import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import './app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
   throw new Error(
      'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
   );
}

const root = createRoot(container);

// ErrorBoundary - перехватчик непредвиденных ошибок
root.render(
   <StoreProvider>
      <ErrorBoundary>
         <App />
      </ErrorBoundary>
   </StoreProvider>,
);
