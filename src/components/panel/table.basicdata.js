import React from 'react';
import { Descriptions} from 'antd';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/User/user.action";
import { AiFillDelete } from "react-icons/ai";
import styled from 'styled-components';
import { removeSkillService } from "../../services/userService";
import { actionDeleteUserInterestTopic, actionGetUserInterestTopic } from "../../store/Interests/interests.action";
import { toastr } from "react-redux-toastr";
import {  removeCodersPref } from '../../config/auth';

export default function TableBasicData() {
    const dispatch = useDispatch();

    const [refresh, setRefresh] = useState(2)

    const UserProfile = useSelector((state) => state.user.profile) || [{ title: "" }]


    useEffect(() => {
        dispatch(getProfile())
        dispatch(actionGetUserInterestTopic());
    }, [dispatch , refresh ])


    //O delete de interesses funciona mas a atualização da tela eatava randomica


    const callactionDeleteUserInterestTopic = async (item) => {

        const toastrConfirmOptions = {
            onOk: async() => {
                await dispatch(actionDeleteUserInterestTopic({ topics_of_interest: item }))
                .then(() => {
                     setRefresh(refresh + 1)
                 
                     removeCodersPref(item)
                 })
            },

            onCancel: () => {},
            okText: 'Sim, excluir',
            cancelText: 'Cancelar',
            closeOnShadowClick: true
          };

          toastr.confirm("Excluir Tópico de interesse?", toastrConfirmOptions)
    }

    const deleteSkill = async (param) => {

        const toastrConfirmOptions = {
            onOk: async() => {
                await removeSkillService(param)
                .then(() => {
                    setRefresh(refresh + 1)
                })
            },

            onCancel: () => {},
            okText: 'Sim, excluir',
            cancelText: 'Cancelar',
            closeOnShadowClick: true
          };

        toastr.confirm("Excluir skill?", toastrConfirmOptions)

        
        

    }

    /**Retorna <li> com o interesse da pessa */
    const interests = () => {
        if (UserProfile.topics_of_interest) {
            return UserProfile.topics_of_interest.map((item, index) =>
            (<li key={index}>
                <AiFillDeleteStyled onClick={() => callactionDeleteUserInterestTopic(item._id)} />
                {item.title}
            </li>))
        } else {
            return ""
        }
    }

    /**Retorna <li> com o skill do user */
    const habilidades = () => {
        if (UserProfile.skills) {
            return UserProfile.skills.map((item, index) => (<li key={index}> <AiFillDeleteStyled onClick={() => deleteSkill(item)} /> {item}</li>))
        } else {
            return ""
        }
    }

    return (
        <>
        
            <Descriptions title="" layout="vertical" bordered>
                <Descriptions.Item label="Username">{UserProfile.username}</Descriptions.Item>
                <Descriptions.Item label="Name">{UserProfile.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{UserProfile.email}</Descriptions.Item>
                <Descriptions.Item label="Gender">{UserProfile.gender}</Descriptions.Item>
                <Descriptions.Item label="Localização" span={2}>     {UserProfile.place}    </Descriptions.Item>

                <Descriptions.Item label="Tópicos de interesse" span={3}>
                    <UlStyled > {interests()} </UlStyled>
                </Descriptions.Item>

                <Descriptions.Item label="Skills" span={3}><UlStyled > {habilidades()} </UlStyled></Descriptions.Item>
            </Descriptions>
        </>
    );
}

const UlStyled = styled.ul`
list-style:none;
`

const AiFillDeleteStyled = styled(AiFillDelete)`
cursor: pointer;
margin-right:10px;
`

