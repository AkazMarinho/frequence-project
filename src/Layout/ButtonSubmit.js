

export function ButtonSubmit({textBtn}){
    return (
        <div >
            <button className="bg-[#134892] w-[178px] h-[44px] rounded-[7px] drop-shadow-[0_4px_6px_#00000040] hover:bg-[#0b2b57]">
               <span className="text-[#ffffff] text-[22px]" >{textBtn}</span> 
            </button>
            
        </div>
    )
}