import Quiz from './components/quiz'

function App() {
  const questions = [
    'Primeira Pergunta',
    'Segunda Pergunta',
    'Nova Pergunta'
  ]

  const results = {
    2 : '2 ou menos marcadas',
    3 : '3 marcadas'
  }

  return (
    <div>
      <Quiz questions={questions} results={results} />
    </div>
  );
}

export default App;
