import type { Card } from "../cards";

type SummaryProps = {
  cards: Card[];
  answers: boolean[];
  onRestart: () => void;
};

function Summary({ cards, answers, onRestart }: SummaryProps) {
  const knownCount = answers.filter((knew) => knew).length;
  const toPractice = cards.filter((_, i) => !answers[i]);

  return (
    <section className="summary">
      <h2>
        Þú kunnir {knownCount} af {cards.length}
      </h2>

      {toPractice.length === 0 ? (
        <p className="perfect">Fullkomið! 🎉</p>
      ) : (
        <>
          <p className="muted">Æfðu þessi betur:</p>
          <ul className="practice-list">
            {toPractice.map((card) => (
              <li key={card.id}>{card.front}</li>
            ))}
          </ul>
        </>
      )}

      <button onClick={onRestart}>Byrja aftur</button>
    </section>
  );
}

export default Summary;
