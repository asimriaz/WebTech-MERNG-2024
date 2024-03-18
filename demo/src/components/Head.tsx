import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'


type Props = {
    msg: string, 
    num: number, 
    arr: number[]
  }
  
  
  function Head({ msg, num, arr }: Props) {
    return (
      <div>
        <h1>{msg}</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>{num}</p>
        <p>{JSON.stringify(arr)}</p>
      </div>
    )
  }

export default Head