import ButtonTic from './components/Buttons';
import WinnerDisplay from './components/Winner';
import './App.css';
import { useState } from 'react';
let isWinner = 0;

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default function App(){
  const [history , setHistory] = useState(Array(9).fill(null)); 
  const [target , setTarget] = useState('O')
  const handleClick = (index: number) => {
   
    const nextSquare = history.slice();
    nextSquare[index] =target;
    setHistory(nextSquare);
    target == 'O' ? setTarget('X') : setTarget('O')
   
  };

 lines.map( i => {
  if(history[i[0]] != null){
    if( history[i[0]] == history[i[1]] && history[i[1]] == history[i[2]]){
      isWinner = 1;
    }
  }
 })


  return (<>
  <WinnerDisplay isWinner={isWinner}/>
    <div className='grid'>
        
        <ButtonTic index={0} value={history[0]} handleClick={handleClick} /> 
        <ButtonTic index={1} value={history[1]} handleClick={handleClick} /> 
        <ButtonTic index={2} value={history[2]} handleClick={handleClick} /> 

        <ButtonTic index={3} value={history[3]} handleClick={handleClick} /> 
        <ButtonTic index={4} value={history[4]} handleClick={handleClick} /> 
        <ButtonTic index={5} value={history[5]} handleClick={handleClick} /> 

        <ButtonTic index={6} value={history[6]} handleClick={handleClick} /> 
        <ButtonTic index={7} value={history[7]} handleClick={handleClick} /> 
        <ButtonTic index={8} value={history[8]} handleClick={handleClick} /> 

        
    </div>
  </>);
}