import React, { useEffect, useState } from 'react'

export default function DoLogin(props) {

    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState()
    const [Password2, setPassword2] = useState()
    const [Signin, setSignin] = useState(false)




    let userchng = (e) => {
        setUsername(e.target.value)
    }
    let passchng = (e) => {
        setPassword(e.target.value)
    }
    let sbm = (e) => {
        const data = localStorage.getItem('signin').split(',')
        e.preventDefault()
        if (data[0] == Username && data[1] == Password) {
            props.islogin()
        } else {
            alert('اطلاعات اشتباه است')
        }
    }
    let sbm2 = (e) => {
        e.preventDefault()
        if (Password == Password2) {
            localStorage.setItem('signin',
                [Username, Password]
            )
            setSignin(true)
        } else {
            alert('اطلاعات را درست وارد کنید')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('signin')) {
            setSignin(true)
        }
    }, [])
    return (
        <div className='mt-5'>
            {Signin ? <div className='container-fluid'>
                <div className='mt-3 mb-5 d-flex justify-content-around'>
                    <form onSubmit={sbm} className='d-flex flex-column login p-2'>
                        <h5 className='d-flex justify-content-around' style={{ textAlign: 'right' }}>🚨لطفا لاگین کنید🚨</h5>
                        <label>Username :</label>
                        <input onChange={userchng} className='form-control rounded-pill' />
                        <label>Password :</label>
                        <input onChange={passchng} type='Password' className='form-control mb-2 rounded-pill' />
                        <button type='submit' className='btn btn-info rounded-pill'>Login</button>
                    </form>
                </div>
            </div>
                : <div className='container-fluid'>
                    <div className='mt-3 mb-5 d-flex justify-content-around'>
                        <form onSubmit={sbm2} className='d-flex flex-column  login p-2'>
                            <h5 className='d-flex justify-content-around' style={{ textAlign: 'right' }}>🚨لطفا ثبت نام کنید🚨</h5>
                            <label>Username :</label>
                            <input onChange={userchng} className='form-control rounded-pill' />
                            <label>Password :</label>
                            <input onChange={passchng} type='Password' className='form-control mb-2 rounded-pill' />
                            <label>Password :</label>
                            <input onChange={(e) => setPassword2(e.target.value)} type='Password' className='form-control mb-2 rounded-pill' />
                            <button type='submit' className='btn btn-info rounded-pill'>Sign in</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}
