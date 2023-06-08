interface Props {
  onClick: any;
}

function TestingButton({ onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>Press to Test</button>
    </div>
  );
}

export default TestingButton;
