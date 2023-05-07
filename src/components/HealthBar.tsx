import styles from "./HealthBar.module.css";

// Here we can choose the number of misses we want to have in future. Not static values are involved.
const MAX_MISSES = 10;

type HealthBarProps = {
  numberOfGuesses: number;
};

const HealthBar = ({ numberOfGuesses }: HealthBarProps) => {
  return (
    <div
      style={{
        position: "relative",
        height: "34px",
        width: "254px",
        backgroundColor: "#37362E",
      }}
    >
      <div
        style={{
          height: "30px",
          maxWidth: "250px",
          minWidth: "4px",
          width: `${((MAX_MISSES - numberOfGuesses) / MAX_MISSES) * 100}%`,
          margin: "2px 0",
          marginLeft: "2px",
          backgroundColor:
            numberOfGuesses === MAX_MISSES
              ? "#B70000"
              : numberOfGuesses === 0
              ? "#7AB300"
              : "#EE7000",
          color: numberOfGuesses === MAX_MISSES ? "#FF2717" : "#FFFFFF",
        }}
      >
        <span className={styles.num}>
          {MAX_MISSES - numberOfGuesses}/{MAX_MISSES}
        </span>
      </div>
    </div>
  );
};

export default HealthBar;
