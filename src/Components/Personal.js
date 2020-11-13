import React, { useState } from 'react'
import moneyfishing from '../image/moneyfishing,png.webp'


export default function Personal(props) {
    const [Euro,] = useState(props.Euro)
    const [Dollar,] = useState(props.Dollar)
    const [Gold,] = useState(props.Gold)
    const [Toman,] = useState(props.Toman)
    const [Pound,] = useState(props.Pound)
    ////////////////////////////////////////////////////
    const [myEuro, setmyEuro] = useState(0)
    const [myDollar, setmyDollar] = useState(0)
    const [myGold, setmyGold] = useState(0)
    const [myPound, setmyPound] = useState(0)

    let sodeeuro = myEuro * (Euro / Toman);
    let sodedollar = myDollar * (Dollar / Toman);
    let sodegold = myGold * (Gold / Toman);
    let sodepond = myPound * (Pound / Toman);
    let sodekol = sodeeuro + sodedollar + sodegold + sodepond
    const separate = (Number) => {
        Number += '';
        Number = Number.replace(',', '');
        let x = Number.split('.');
        let y = x[0];
        let z = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(y))
            y = y.replace(rgx, '$1' + ',' + '$2');
        return y + z;
    }
    return (
        <div className='container-fluid mb-3' style={{ fontFamily: 'yekan' }}>
            <h3 className='d-flex justify-content-center bold'>محاسبه شخصی</h3>
            <div className='row mt-3 d-flex justify-content-center'>

                <div className=' col-9 products-li'>
                    <p className='d-flex justify-content-between'>
                        <img width="100px" height='100px' src={moneyfishing} alt='moneyfishing' />
                        <div>   : میزان درآمد شما</div>
                    </p>
                    <div className='d-flex justify-content-around'>
                        <div>
                            <p className='mt-3 mb-1'>
                                <input className='form-control col products-my' placeholder="یورو" onChange={(e) => setmyEuro(e.target.value)} />
                                Euro : <br />{sodeeuro.toFixed(3)}
                            </p>
                            <p className='mt-4 mb-1'>
                                <input className='form-control col products-my' placeholder="دلار" onChange={(e) => setmyDollar(e.target.value)} />
                                Dollar : <br />{sodedollar.toFixed(3)}
                            </p>
                        </div>
                        <div>
                            <p className='mt-3 mb-1'>
                                <input className='form-control col products-my' placeholder="طلا" onChange={(e) => setmyGold(e.target.value)} />
                                Gold : <br />{sodegold.toFixed(3)}
                            </p>
                            <p className='mt-4 mb-1'>
                                <input className='form-control col products-my' placeholder="پوند" onChange={(e) => setmyPound(e.target.value)} />
                                Pound : <br />{sodepond.toFixed(3)}
                            </p>
                        </div>
                    </div>
                    <hr className='bg-white' />
                    <div className='bold d-flex justify-content-around'>مجموع</div>
                    <br />
                    <p className='d-flex justify-content-around bold' style={{ textAlign: 'right' }}>
                        {separate(sodekol.toFixed(3))}
                    </p>
                </div>
            </div>
        </div >
    )
}
