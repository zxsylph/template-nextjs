"use client"

import { atom, useAtom } from 'jotai';

import Test from "@/components/Test"

import { countAtom } from '@/datas/count'
const counter = atom(0);


function JotaiPage() {
    const [count, setCounter] = useAtom(countAtom);
    const onClick = () => setCounter(prev => prev + 1);

    return (<>
        <div>Jotai Page</div>
        <div>
            <h1>{count}</h1>
            <button onClick={onClick}>Click</button>
        </div>
        <Test></Test>
    </>)
}

export default JotaiPage