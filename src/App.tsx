import { useCallback, useState } from "react";

import "./App.css";
import words from "./data.json";
import Tank from "./components/Tank";
import HealthBar from "./components/HealthBar";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

import Confetti from "react-confetti";
import clickSound from "./assets/clickSound.wav";
import loseSound from "./assets/loseSound.wav";
import winSound from "./assets/winSound.wav";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [wordToGuess, setWordsToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = inCorrectLetters.length >= 10;
  const isWinner = wordToGuess
    .split("")
    .filter((letter) => letter !== " ")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function resetGame() {
    setWordsToGuess(getWord);
    setGuessedLetters([]);
    setGameStarted(true);
    playSound(clickSound);
  }

  function playSound(sound: string) {
    new Audio(sound).play();
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {gameStarted ? (
        <>
          <Tank isLoser={isLoser} />
          <HealthBar numberOfGuesses={inCorrectLetters.length} />
          <Word
            reveal={isLoser}
            guessedLetters={guessedLetters}
            wordToGuess={wordToGuess}
          />
          <Keyboard
            onClick={() => playSound(clickSound)}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={inCorrectLetters}
            addGuessedLetter={addGuessedLetter}
            disabled={isWinner || isLoser}
          />

          {isWinner && (
            <>
              <Confetti />
              {playSound(winSound)}
            </>
          )}
          {isLoser && <>{playSound(loseSound)}</>}

          {isWinner || isLoser ? (
            <button onClick={resetGame} className="btn">
              START A NEW GAME
            </button>
          ) : null}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tank isLoser={true} />
          <h1
            style={{
              fontSize: "64px",
              textAlign: "center",
              color: "#37362e",
              lineHeight: "108.15%",
              fontWeight: 700,
              margin: 20,
            }}
          >
            GUESS THE NAME OF <br /> A WORLD OF TANKS MAP
          </h1>
          <button onClick={resetGame} className="btn">
            START A NEW GAME
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
