import React, { useState, MouseEvent } from 'react'


export default function Calculator() {
    const [display, setDisplay] = useState(0)
    const [nums, setNums] = useState<number[]>([0, 0]);
    const [index, setIndex] = useState(0)
    const [opr, setOpr] = useState("")

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        switch ((e.target as HTMLElement).innerText) {
            case "+":
                setOpr("+")
                setIndex(1)
                break;

            case "=":
                nums[0] = nums[0] + nums[1];
                setIndex(0)
                setDisplay(nums[0]);
                nums[1] = 0;
                break;

            default:
                let n = Number((e.target as HTMLElement).innerText);
                nums[index] = nums[index] * 10 + n;
                setDisplay(nums[index]);
                break;
        }
    }

    let digits = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "/", "C", "0", "=", "x",];
    return (
        <>
            <div style={{
                width: '200px',
                height: '20px',
                textAlign: 'right',
                border: '1px solid #808080',
                padding: '5px'
            }}>{display}</div>
            {digits.map((d, i) =>
                <>
                    <button onClick={handleClick}>{d}</button>
                    {(i + 1) % 4 === 0 ? <br /> : null}
                </>
            )}

            <pre style={{ textAlign: 'left' }}>{JSON.stringify({ display, nums, index, opr }, null, 2)}</pre>
        </>

    )
}
<p></p>