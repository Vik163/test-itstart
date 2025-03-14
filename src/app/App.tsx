import { getSeminarsError } from '@/entities/Seminars';
import { SeminarsPage } from '@/pages/SeminarPage';
import { ErrorPage } from '@/widgets/ErrorPage';
import { useSelector } from 'react-redux';

const App = () => {
   const error = useSelector(getSeminarsError);

   // отображение обработанных ошибок
   if (error) return <ErrorPage errorMessage={error} />;

   return (
      <main id="app" className="app">
         <SeminarsPage />
      </main>
   );
};

export default App;
