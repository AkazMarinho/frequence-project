

export function Input({type, name, placeholder, label, handleOnChange}){
    return(
        <div className="w-[475] h-[67]">
            <label htmlFor={name} className="block mb-[6px] text-[18px] font-bold">{label}</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange}
                className={`
                    w-[460px] 
                    h-[38px]
                    outline-none 
                    bg-[#D9D9D9] 
                    p-[8px] 
                    placeholder-[#383838] 
                    placeholder-[16px] 
                    rounded-[5px]
                    drop-shadow-[0_4px_4px_#00000040]
                    `}
                    
            />
        </div>
    )
}