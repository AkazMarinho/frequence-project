import { ButtonSubmit } from "../../Layout/ButtonSubmit";
import { Input } from "../../Layout/input";


export function Login(){
    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[880px] h-[482px] bg-[#4983D4] flex justify-center items-center rounded-[10px] relative">

                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[45px] left-[46px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[50px] right-[90px] w-[94px] h-[94px] z-[1]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[30px] left-[20px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[80px] right-[40px] w-[94px] h-[94px]"></div>

                <div className="w-[522px] h-[405px] bg-[#F5F6F8] flex flex-col justify-around items-center p-[30px] rounded-[10px] z-[2]">

                    <h1 className="text-[28px] font-bold">Entrar</h1>

                    <div>
                        <Input label='Email' name='email' type='text' placeholder='Digite seu email'/>
                    </div>

                    <div>
                        <Input label='Senha' name='email' type='text' placeholder='Digite seu senha'/>
                    </div>

                    <ButtonSubmit textBtn='Enviar'/>

                </div>
            </div>

        </div>
    )
}