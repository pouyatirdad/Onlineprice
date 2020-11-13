import React from 'react'
import img from '../image/moneyimg.png';

export default function Head() {
    return (
        <div className=' d-flex justify-content-between mb-1 p-2 bold' style={{ background: '#1e1f26', color: 'white ' }}>
            <img width='100px' height='100px' src={img} alt='logo' />
            <h3 className='pt-4'>محاسبه ارز</h3>
        </div>
    )
}
