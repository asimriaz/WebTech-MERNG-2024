import React from 'react'
type Props = {}

type State = {
    count: number
}


class Counter extends React.Component<Props, State>{
    state = { count: 0 }


    handleClick(inc: number){
        this.setState(({ count: this.state.count + inc }))
    }

    render() {
        return (
            <button onClick={()=> this.handleClick(1)}>
                count is {this.state.count}
            </button>
        );
    }
}

export default Counter