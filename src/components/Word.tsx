type WordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const Word = ({ guessedLetters, wordToGuess, reveal = false }: WordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        fontSize: "64px",
        color: "#37362E",
        fontWeight: "bold",
        textTransform: "uppercase",
        lineHeight: "108.15%",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        if (letter === " ") {
          return (
            <div key={index} style={{ width: ".5em" }}>
              &nbsp;
            </div>
          );
        } else {
          return (
            <div
              style={{
                borderBottom: ".15em solid #37362E",
                width: ".5em",

                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "hidden"
                    : "visible",
                textAlign: "center",
              }}
              key={index}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  visibility:
                    guessedLetters.includes(letter) || reveal
                      ? "visible"
                      : "hidden",
                  color:
                    !guessedLetters.includes(letter) && reveal
                      ? "#FF2717"
                      : "#37362E",
                }}
              >
                {letter}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Word;
