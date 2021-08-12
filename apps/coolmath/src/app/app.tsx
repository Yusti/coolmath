import StyledApp from './styles';
import ReadTheWord from '../components/ReadTheWord';

export function App() {
  return (
    <StyledApp>
      <header className="flex">
        <h1>Welcome to coolmath!</h1>
      </header>
      <ReadTheWord />
    </StyledApp>
  );
}

export default App;
