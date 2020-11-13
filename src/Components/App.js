import React, { useEffect, useState } from 'react';
import Head from './Head';
import Personal from './Personal';
import moneychart from '../image/moneychart.png'
import DoLogin from './DoLogin';


export default function App() {

  const [Login, setLogin] = useState(false)

  const [Prices, setPrices] = useState(0)
  const [Name, setName] = useState('')
  const [Prices2, setPrices2] = useState(0)
  const [Name2, setName2] = useState('')
  const [Exchange, setExchange] = useState(0)

  const [Euro, setEuro] = useState(0)
  const [Dollar, setDollar] = useState(0)
  const [Gold, setGold] = useState(0)
  const [Pound, setPound] = useState(0)
  const [Toman, setToman] = useState(0)

  useEffect(() => {
    setEuro(28000)
    setDollar(24000)
    setGold(100000)
    setPound(34000)
    setToman(1000)
  }, [])

  let CheckPrice = (e) => {
    setPrices(e)
  }
  let CheckName = (e) => {
    setName(e)
  }
  let CheckPrice2 = (e) => {
    setPrices2(e)
  }
  let CheckName2 = (e) => {
    setName2(e)
  }
  let ExchangeHandler = (e) => {
    setExchange(e.target.value)
  }
  const jam = Exchange * (Prices / Prices2)
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
    <div>
      <div>
        <Head />
      </div>

      <div>
        <div className='container-fluid'>
          <div className='mt-3 mb-5 lahzeyi'>
            <h3 className='d-flex flex-column align-items-center mb-2 p-2 text-light bold'>
              نرخ لحظه ای
              <img className='' width='100px' height='100px' src={moneychart} alt='moneychart' />
            </h3>
            <div className='row d-flex justify-content-around pb-2'>
              <div className=' items'>
                <h6>Dollar</h6>
                {Dollar}
              </div>
              <div className=' items'>
                <h6>Euro</h6>
                {Euro}
              </div>
              <div className=' items'>
                <h6>Pound</h6>
                {Pound}
              </div>
              <div className=' items'>
                <h6>Gold</h6>
                {Gold}
              </div>
            </div>
          </div>
          {
            Login ? <Personal Euro={Euro} Dollar={Dollar} Pound={Pound} Gold={Gold} Toman={Toman} /> : <DoLogin islogin={() => setLogin(true)} />
          }
          <div className=''>
            <h3 className='d-flex justify-content-around bold'>محاسبه آنلاین</h3>
            <div className='row'>
              <div className='col-3 ' >
                <div className=' products-lft' onClick={(e) => {
                  setPrices(Pound)
                  setName(e.target.textContent)
                }}>
                  <h5>Pound</h5>
                </div>
                <div className='  products-lft' onClick={(e) => {
                  setPrices(Euro)
                  setName(e.target.textContent)
                }}>
                  <h5>Euro</h5>
                </div>
                <div className='  products-lft' onClick={(e) => {
                  setPrices(Dollar)
                  setName(e.target.textContent)
                }}>
                  <h5>Dollar</h5>
                </div>
                <div className='  products-lft' onClick={(e) => {
                  setPrices(Gold)
                  setName(e.target.textContent)
                }}>
                  <h5>Gold</h5>
                </div>
                <div className='  products-lft' onClick={(e) => {
                  setPrices(Toman)
                  setName(e.target.textContent)
                }}>
                  <h5>Toman</h5>
                </div>
                <br />
              </div>
              <div className='col-6 '>
                <div className='uper   mt-1 p-1 '>
                  <div className=' d-flex justify-content-around p-1'>
                    <div className=''>
                      <p style={{ textAlign: 'left' }}>از</p>
                      <hr className='bg-white' />
                      <div className=''>
                        <p>{Name}</p>
                        <p>{Prices}</p>
                      </div>
                    </div>
                    <input className='form-control w-50' placeholder='مقدار را وارد کنید' onChange={ExchangeHandler} />
                    <div className=''>
                      <p style={{ textAlign: 'right' }}>به</p>
                      <hr className='bg-white' />
                      <div className=''>
                        <p>{Name2}</p>
                        <p>{Prices2}</p>
                      </div>
                    </div>
                  </div>
                  <hr className='bg-white ' />
                  <h6 className='d-flex justify-content-center ' style={{ fontFamily: 'yekan' }}>
                    {isNaN(jam) ? 'مقادیر را وارد کنید' : separate(jam.toFixed(3))}
                  </h6>
                </div>

              </div>
              <div className='col-3 ' >
                <div className='   products-right' onClick={(e) => {
                  setPrices2(Pound)
                  setName2(e.target.textContent)
                }}>
                  <h5>Pound</h5>
                </div>
                <div className='  products-right' onClick={(e) => {
                  setPrices2(Euro)
                  setName2(e.target.textContent)
                }}>
                  <h5>Euro</h5>
                </div>
                <div className='  products-right' onClick={(e) => {
                  setPrices2(Dollar)
                  setName2(e.target.textContent)
                }}>
                  <h5>Dollar</h5>
                </div>
                <div className='  products-right' onClick={(e) => {
                  setPrices2(Gold)
                  setName2(e.target.textContent)
                }}>
                  <h5>Gold</h5>
                </div>
                <div className=' products-right' onClick={(e) => {
                  setPrices2(Toman)
                  setName2(e.target.textContent)
                }}>
                  <h5>Toman</h5>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
