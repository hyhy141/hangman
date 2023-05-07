type tankProps = {
  isLoser: boolean;
};

const Tank = ({ isLoser }: tankProps) => {
  return (
    <div>
      <img
        src="/tank.png"
        alt="tank"
        style={{
          width: "200px",
          height: "132.64px",
          transform: isLoser ? "rotate(180deg)" : "none",
        }}
      />
    </div>
  );
};

export default Tank;
