import React,{useId} from 'react'

function Inputbox({
    // props
    label,
    amt,
    amtChange,
    oncurrencyChange,
    currencyOptions = [],
    defaultCurrency = 'usd',
    amtDisable = false,
    checkCurrDisable = false,
    className = '',


})
{ //function
    const id = useId();

  return (
    <div 
    className={`w-full h-16 flex justify-center items-center gap-4 ${className}`}

    >
        <div className='flex flex-col gap-1'>

            <label htmlFor={id} className='text-sm text-gray-500'>{label}</label>
            <input 
            id={id}
            type='text' 
            value={amt} 
            disabled={amtDisable} 
            placeholder='AMT'
            onChange={(e) => amtChange && amtChange(Number(e.target.value))}
            className='w-40 h-10 rounded-md border border-gray-300 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:border-gray-200'
            />
            
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>

            <p className='text-sm text-black/40 mb-2 w-full'>Currency types</p>
            <select 
            name="" 
            id=""
            className='rounded-lg px-1 py-1 bg-blue-200 cursor-pointer outline-none '
            value={defaultCurrency}
            onChange={(e) => oncurrencyChange && oncurrencyChange(e.target.value)}
            disabled={checkCurrDisable}
            >
                {currencyOptions.map((curry) => (
                    <option key={curry} value={curry}>{curry.toUpperCase()}</option> //uppercase for better display
                ))}
            </select>
        </div>

        
    </div>
  )
}

export default Inputbox
