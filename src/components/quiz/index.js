import { useState } from "react";

export default function Quiz({questions, results}) {
    const [answers, setAnswers] = useState(() => {
        let initAnswers = []
        questions.forEach(q => {
            const answer = {key : (initAnswers.length), id : 'q' + (initAnswers.length), question: q, value: false}
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
            if(q['value'])
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

    return (
        <form>
            {answers.map((q) => (
                <label className='checkbox'>
                    {q.question}
                    <input key={q['key']} id={q['key']} name={q['id']} type='checkbox' onChange={handleChecked} />
                </label>
            ))}
            <button type="button" onClick={handleClick}>Verificar</button>
        </form>
    );
}