import styles from "./Keyboard.module.css";
const KEYS = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  const rows = [
    [...KEYS.slice(0, 10)],
    [...KEYS.slice(10, 19)],
    [...KEYS.slice(19)],
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {rows.map((row) => (
        <div
          key={row[0]}
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
        >
          {row.map((key) => {
            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);
            return (
              <button
                onClick={() => addGuessedLetter(key)}
                className={`${styles.btn} ${
                  isInactive ? styles.inactive : ""
                } ${isActive ? styles.active : ""}`}
                disabled={isActive || disabled || isInactive}
                key={key}
              >
                <p style={{ padding: "5px 10px" }}>{key}</p>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
