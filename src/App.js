import Quiz from './components/quiz'

function App() {
  const questions = [
    'Primeira Pergunta',
    'Segunda Pergunta'
  ]

  const results = {
    0 : 'Nada',
    1 : 'Somente um acerto',
    2 : '2 Acertos'
  }

  return (
    <div>
      <Quiz questions={questions} results={results} />
    </div>
  );
}

export default App;
