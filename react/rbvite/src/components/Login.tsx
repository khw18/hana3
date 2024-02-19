type Props= {
};

import {FormEvent, useRef, useState} from "react";

export const Login = ({ login }: Props) => {
    const idRef = useRef<HTMLInputElement | null>(null);
    // const [name, setName] = useState('');
    const nameRef = useRef<HTMLInputElement | null>(null);

    const makeLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //submit 기본 기능 무력화
        console.log('makeLogin!!!', idRef);

        if (!idRef.current || !idRef.current?.value) {
            alert('User ID 입력 하십쇼!');
            idRef.current?.focus();
            return;
        }else if (!nameRef.current?.value) {
            alert('User name을 입력 하십쇼!');
            nameRef.current?.focus();
            return;
        }

        const id = idRef.current?.value; //current = input. .value해야 값. 돔이면돔.
        const name = nameRef.current?.value


    }

    return (
        <>
            <form onSubmit={makeLogin}>
                <div>
                    <span style={{ marginRight: '2em'}}>LoginID:</span>
                    <input type='number' ref={idRef}/>
                </div>
                <div>
                    {/*LoginName: <input type='text' onChange={e => setName(e.currentTarget.value)}/>*/}
                    <span style={{ marginRight: '0em'}}>LoginName: </span>
                    <input type='text' ref={nameRef}/>
                </div>
                <button type='submit'>Sign-in</button>
            </form>
        </>
    );
};