import {  Modal } from "antd";

/** 
 * Uso:
 *  swalConfirmation(`TUA MENSAGEM`, 
 * ()=>{FUNÇÃO A SER EXECUTADA EM CASO DE SIM  })}  
 *  */
export const AntdConfirmation = async (title, isModalVisible, mensagem, callbackok, callbackno) => {

  return  ( 
  
  <Modal
    title= {title || "title"}
    visible={isModalVisible}
    onOk={callbackok}
    onCancel={callbackno}
    >
    <p>{mensagem}</p>

</Modal>
)}


/**elimima o primeiro item encontrad no array. O array original é alterado */
export function  apagarItem  (arrayOriginal, item) {
     
    var indice = arrayOriginal.indexOf(item)
    arrayOriginal.splice(indice,1)
    return arrayOriginal
}


/**substitui o primeiro item encontrad no array. O array original é alterado */
export function  substituirItem  (arrayOriginal, remover, adicionar) {
    // debugger
    var indice = arrayOriginal.indexOf(remover)
    arrayOriginal.splice(indice,1, adicionar)
    return arrayOriginal
}