import React, { useEffect } from 'react'
import { decrement, fetchImages, increment, incrementByAmount } from '../redux/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../types'


export default function Counter() {
    const { count, loading, error, images } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch<AppDispatch>()


    useEffect(() => {
        dispatch(fetchImages())
    }, [])


    return (
        <>
            <div><button onClick={() => dispatch(incrementByAmount(5))}>+5</button></div>
            <div style={{ display: 'flex' }}>
                <div>
                    <button onClick={() => dispatch(increment())}>+</button>
                </div>
                <div>{count}</div>
                <div>
                    <button onClick={() => dispatch(decrement())}>-</button>
                </div>
            </div>
            <div><button onClick={() => dispatch(incrementByAmount(-5))}>-5</button></div>
            {loading && <div>Loading...</div> }
            <pre style={{ textAlign: 'left'}}>{JSON.stringify(images, null, 4)}</pre>
        </>
    )
}
