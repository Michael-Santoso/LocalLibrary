interface Props {
  onClick: any;
}

function TestingButton({ onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>TestingButton</button>
    </div>
  );
}

export default TestingButton;
