interface Prop{
    isWinner:number;
}
export default function Winner({isWinner}: Prop ){
    return (
        <>
        { isWinner ?  <h1>WINNER!!</h1> : ''}
        </> 
    )
}