import { useState } from "react";
import '../../css/bootstrap.css'
import './style.css'

export default function Quiz({questions, results}) {
    const [answers, setAnswers] = useState(() => {
        let initAnswers = []
        questions.forEach(q => {
            const answer = {key : (initAnswers.length), id : 'q' + (initAnswers.length), question: q, value: 'off'}
            initAnswers.push(answer)
        })
        return initAnswers
    })

    function handleChecked(event) {
        let newAnswers = answers
        newAnswers[event.target.id]['value'] = !answers[event.target.id]['value']
        setAnswers(newAnswers)
        console.log(answers)
    }

    function handleClick(event) {
        let contCheck = 0
        answers.map((q) => {
            if(q['value'] === 'on')
                contCheck++
            return contCheck
        })

        for(const item in results) {
            if(contCheck <= item) {
                alert(results[item])
                break
            }
        }
    }

    function handleSelect(event) {
        let newAnswers = answers
        newAnswers[event.target.id]['value'] = event.target.value
        setAnswers(newAnswers)
        console.log(answers)
    }

    return (
        <form>
            {answers.map((q) => (
                <div className="question">
                    <label class="form-label">
                        {q.question}
                        <input class="form-check-input" key={q['key'] + 's'} id={q['key']} name={q['id']} value="on" type='radio' onChange={handleSelect} />Sim
                        <input class="form-check-input" key={q['key'] + 'n'} id={q['key']} name={q['id']} value='off' type='radio' onChange={handleSelect} />Não
                    </label>
                </div>
            ))}
            <button class="btn btn-primary" type="button" onClick={handleClick}>Verificar</button>
        </form>
    );
}