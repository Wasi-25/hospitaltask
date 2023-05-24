import React from 'react'

const Bill = () => {
  return (
    <div>
        <div>
            <table>
              <tr>
                <th>Patient Name</th>
                <th>Age/Gender</th>
                <th>Bill No</th>
                <th>Date/Time</th>
                <th>Reciept No</th>
              </tr>
              <tr>
                <td>Wasiullah Khalique</td>
                <td>24, Male</td>
                <td>854543</td>
                <td>24 Feb / 22:14</td>
                <td>5656543</td>
              </tr>
            </table>
          </div>

          <div>
            <table className='maintable' style={{background:"white"}}>
              <thead>
              <tr>
                <th  style={{borderBottom:"2px solid black"}}>Sr.no</th>
                <th  style={{borderBottom:"2px solid black"}}>Service Name</th>
                <th  style={{borderBottom:"2px solid black"}}>Price</th>
                <th style={{borderBottom:"2px solid black"}}>Quantity</th>
                <th  style={{borderBottom:"2px solid black"}}>Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Consultaion</td>
                <td>500</td>
                <td>1</td>
                <td>500</td>
              </tr>
              <tr>
                <td>2</td>
                <td>X Ray</td>
                <td>1500</td>
                <td>2</td>
                <td>3000</td>
              </tr>
              </tbody>
            </table>
          </div>

          <table className='down'>
          <tbody>
            <tr>
              <th>Mobile</th>
              <td>9565785478</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>18%</td>
            </tr>
            <tr>
              <th>Discount</th>
              <td>50</td>
            </tr><hr style={{border:"1px solid black"}} />
            <tr>
              <th>Total</th>
              <td>3500</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Bill