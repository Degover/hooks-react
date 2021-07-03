import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store/Index';
import { numberAdd2, login } from '../../store/actions';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <div className="center">
                <span className="text">{state.user
                    ? state.user.name
                    : "Sem usuário"
                }</span>

                <span className="text">
                    {state.number}
                </span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'Luquinha')}>Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: -2 })}>-2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberMultiplyBy7' })}>x7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberDivideBy25' })}>/25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberParseInt' })}>Floor</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
