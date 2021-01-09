import React from 'react';
import { Descriptions, Badge } from 'antd';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/User/user.action";
import { AiFillDelete } from "react-icons/ai";
import styled from 'styled-components';


export default function TableBasicData() {
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(0)
    const UserProfile = useSelector((state) => state.user.profile) || [{ title: "" }]

    useEffect(() => {

        dispatch(getProfile())

    }, [dispatch, refresh])

    /**Retorna <li> com o interesse da pessa */
    const interests = () => {
        if (UserProfile.topics_of_interest) {
            return UserProfile.topics_of_interest.map((item, index) => (<li key={index}><AiFillDeleteStyled onClick={()=> console.log("Deletar", item._id)}/> {item.title} </li>))
        } else {
            return ""
        }
    }

        /**Retorna <li> com o skill do user */
    const habilidades = () => {
        if (UserProfile.skills) {
            return UserProfile.skills.map((item, index) => (<li key={index}> <AiFillDeleteStyled onClick={()=> console.log("Deletar", item)}/> {item}</li>))
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