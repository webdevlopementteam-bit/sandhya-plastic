function Arrow({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <path d="M20 12H4M10 6l-6 6 6 6" />
      ) : (
        <path d="M4 12h16M14 6l6 6-6 6" />
      )}
    </svg>
  );
}

export function ArrowLeft() {
  return <Arrow direction="left" />;
}

export function ArrowRight() {
  return <Arrow direction="right" />;
}
