import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IScriptSnapshot } from 'typescript';
import { Component } from 'react';
import styled from '@emotion/styled'

import { Button } from 'components/Button';
import { Label } from 'components/Label';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = Record<string, never>; //App 컴포넌트는 기본적으로 어떠한 Prop도 받지 않는다는 것을 명시

interface State {
  readonly counter: number;
}

export class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  private sub = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  }

  private add = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps: ', nextProps);
    console.log('prevState: ', prevState);

    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps: ', prevProps);
    console.log('prevState: ', prevState);

    return {
      testData: true,
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: IScriptSnapshot) {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    console.log('nextProps: ', nextProps);
    console.log('nextState: ', nextState);

    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('componentDidCatch');
    console.log('error: ', error);
    console.log('info: ', info);
    // this.setState({
    //   error: true,
    // });
  }
  render() {
    const { counter } = this.state;

    return (
      <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={this.sub} />
          <Label data={counter} />
          <Button label="+" onClick={this.add} />
        </Contents>
      </Container>
    );
  }
}

// function App() {
//   const [counter, setCounter] = useState(0);
  
//   const sub = () => {
//     setCounter(counter - 1);
//   };

//   const add = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <Container>
//       <Title>Counter App</Title>
//       <Contents>
//         <Button label="-" onClick={sub} />
//         <Label data={counter} />
//         <Button label="+" onClick={add} />
//       </Contents>
//     </Container>
//   );
// }

export default App;
