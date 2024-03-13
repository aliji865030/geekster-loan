import React from 'react'
import SliderWithInfo from '../components/SliderWithInfo'

const LandinScreen = () => {
  return (
    <div>
     <div className=' w-1/2'>
     <SliderWithInfo min={1000} max={10000} value={1700} symbole={"$"} title={"Home Value"} step={100}></SliderWithInfo>
     <SliderWithInfo min={0} max={3000} value={600} symbole={"$"} title={"Down Payment"} step={100}></SliderWithInfo>
     <SliderWithInfo min={0} max={3000} value={2400} symbole={"$"} title={"Loan Amount"} step={100}></SliderWithInfo>
     <SliderWithInfo min={2} max={18} value={5} symbole={"%"} title={"Interest Rate"} step={1}></SliderWithInfo>
     </div>
    </div>
  )
}

export default LandinScreen
