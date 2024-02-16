import { IoIosCloseCircleOutline } from "react-icons/io";
import style from './QRcode.module.css';

import { useContext, useEffect, useState } from "react";
import  {QrcodeContext} from '../../context/QrcodeProvider.js'
import { Loader } from "../../Layout/Loader.js";


export function QRcode({close}) {
  const {QRcodeImage, QRcodeImageData} = useContext(QrcodeContext)

  
  const [qrCodeImage, setQRCodeImage] = useState('');

  const nameStudente = localStorage.getItem("studentInfo");

  useEffect(() => {
      QRcodeImage()

    if(QRcodeImageData){

        // String base64 simulada (substitua isso pelos dados reais)
        const base64String = QRcodeImageData;
        // Convertendo a string base64 para um array de bytes
        const binaryData = atob(base64String);
    
        // Criando um array de bytes a partir dos dados binários
        const byteArray = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
        }
    
        // Criando um Blob a partir dos dados binários
        const blob = new Blob([byteArray], { type: 'image/png' });
    
        // Criando uma URL de objeto a partir do Blob
        const imageUrl = URL.createObjectURL(blob);
    
        // Agora, imageUrl contém a URL da imagem PNG que você pode usar conforme necessário.
        setQRCodeImage(imageUrl)
    }

  }, []);
  return (
    // onClick={() => close(null)}
    <div  className={style.content} >
        <div onClick={() => close(null)} className={style.content}>

        </div>
        <div className={style.contentQrcode} >
            <div className={style.close}>
                <button onClick={() => close(null)}><IoIosCloseCircleOutline /></button>
            </div>

            {QRcodeImageData ? (
                <>
                    <img src={`data:imge/png;base64, ${QRcodeImageData}`} alt="" />
                    <a href={qrCodeImage} download={`QRCode ${nameStudente}`}>
                        <button className={style.button}>

                            Baixar
                        </button>
                    </a>
                </>
            ) : 
            (
                <div className={style.loaderContent}>
                    <div>
                    <Loader/>

                    </div>

                </div>

            )
            }

        </div>

    </div>
  )
}
