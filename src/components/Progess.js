function Progess({index, num, points, sumPoints, answer}) {
    return (
        <header className="progress">
            <progress max={num} value={index + Number(answer !== null)} />
            <p>Question <strong>{index + 1}</strong> / {num}</p>

            <p><strong>{points}</strong> / {sumPoints}</p>
        </header>
    )
}

export default Progess
