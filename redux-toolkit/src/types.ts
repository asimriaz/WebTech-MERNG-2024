import { store } from './redux/store.ts'

export interface CounterState {
    count: number
    images: Image[]
    loading: boolean
    error: string
}

export type Image ={
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch