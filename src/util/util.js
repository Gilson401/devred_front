import {  Modal } from "antd";

/** 
 * Uso:
 *  swalConfirmation(`TUA MENSAGEM`, 
 * ()=>{FUNÇÃO A SER EXECUTADA EM CASO DE SIM  })}  
 *  */
export const AntdConfirmation = async (title, isModalVisible, mensagem, callbackok, callbackno) => {

    <Modal
    title= {title || "title"}
    visible={isModalVisible}
    onOk={callbackok}
    onCancel={callbackno}
>
    <p>{mensagem}</p>

</Modal>

    return

}
