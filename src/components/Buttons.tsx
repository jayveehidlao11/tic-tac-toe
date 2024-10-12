import { useState } from "react";

interface Prop{
    value: number;
    handleClick: (value: number) => void; // Update the type here to accept a string
    index:number;
   
}
export default function Buttons({ index, value , handleClick} : Prop){

    return (
        <>
        <button  onClick={ () => {handleClick(index)}}>{value}</button>
        </>
    );
}