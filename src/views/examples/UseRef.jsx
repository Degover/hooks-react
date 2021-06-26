import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(val1, val2) {
    const arr1 = val1?.split('') || [];
    const arr2 = val2?.split('') || [];

    const length = arr1.length > arr2.length ? arr2.length : arr1.length;
    let finalStr = "";
    for(let i = 0; i < length; i++) {
        console.log((arr1[i] || '') + (arr2[i] || ''))
        finalStr += (arr1[i] || '') + (arr2[i] || '');
    }

    return finalStr 
        + (val1.substr(length) || '')
        + (val2.substr(length) || '');
}

const UseRef = (props) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(function() { 
        count.current++;
        myInput2.current.focus();
    }, [value1]);
    
    useEffect(function() { 
        count.current++;
        myInput1.current.focus();
    }, [value2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!" />

            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
