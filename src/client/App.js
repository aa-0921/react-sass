import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  text: string,
}

function Text(props: Props) {
  return <div style={{ color: 'green' }}>{props.text}</div>;
}

export default function App() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>
        <Text text={text} />
        入力して下さい
      </h1>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));



export const Index = () => {
  return <div>name</div>;
};
ReactDOM.render(<Index />, document.getElementById('index'));
