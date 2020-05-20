import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './App.scss'
import { Button } from '@zeit-ui/react'
import { Image } from '@zeit-ui/react'
// import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

// const Application = () => (
//   <ZeitProvider>
//     <CssBaseline />
//     <App />
//   </ZeitProvider>
// )

interface Props {
  text: string,
}

function ZeitBtn() {
  return <Button>Click MeClick MeClick MeClick Me</Button>;
}

function SiteImage() {
  return <Image width="540" height="160"
    src="http://www.deelay.me/2000/https://react.zeit-ui.co/images/custom-domains.png" />;
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
      <ZeitBtn />
      <SiteImage />
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

// import { Button } from '@zeit-ui/react'

// export const MyComponent = () => <Button>Click Me</Button>
// ReactDOM.render(<MyComponent />, document.getElementById('button'));
