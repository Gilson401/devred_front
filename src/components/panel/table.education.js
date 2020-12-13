import { Button, Table, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEducation, getProfile } from "../../store/User/user.action";
import { AntdConfirmation } from "../../util/util";


export default function TableEducation() {
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(0)
const [todelete, setTodelete] = useState(null)
    const UserEducation = useSelector((state) => state.user.profile.education)
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {

        dispatch(getProfile())

    }, [dispatch, refresh])

    const handleOk = () => {
        setIsModalVisible(false);
        dispatch(deleteEducation(todelete));
        setRefresh(refresh + 1)
        setTodelete(null)

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleDelete = (id) => {
        setTodelete(id)
        setIsModalVisible(true)
    };

    const columns = [
        {
            title: "Area de Estudo",
            dataIndex: "fieldofstudy",
            key: "fieldofstudy",
        },
        {
            title: "Escola",
            dataIndex: "school",
            key: "school",
        },
        {
            title: "Grau",
            dataIndex: "degree",
            key: "degree",
        },
        {
            title: "Inicio",
            dataIndex: "from",
            key: "from",
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: "Fim",
            dataIndex: "to",
            key: "to",
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: "Ação",
            dataIndex: "",
            key: "",
            render: (v) => (
                <Button onClick={() => handleDelete(v._id)}>Deletar</Button>
            ),
        },
    ];

    return (
        <>
            <Modal
                title="Confirmar exclusão."
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Deseja deletar o registro de Education?</p>

            </Modal>








            <Table pagination={false} dataSource={UserEducation} columns={columns} />
        </>
    );
}
