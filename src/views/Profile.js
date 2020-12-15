import { useEffect, useState } from "react";
import styled from "styled-components";
import LayoutBase from "../components/layout";

const BreadCrumb = ["Home", "Perfil"];

const Profile = () => {
    const Actions = "";

    const diver = (x, y) => (<Diverx x={x} y={y}> {x}  </Diverx>)

    const [mousePos, setMousepos] = useState([])
    const [update, setUpdate] = useState(false)

    function handleMouseMove(event) {
        var add =  -40
        var mousePosi = {
            x: event.pageX +add,
            y: event.pageY +add 
        };

        
        mousePos.push(mousePosi)
        setUpdate(!update)
        event = event || window.event; // IE-ism
    }


    useEffect(() => {
        console.log("mousePos")
    }, [update])

    return (
        <LayoutBase breadcrumb={BreadCrumb} title="Perfil" actions={Actions}>


            <Div onClick={handleMouseMove}>
                <h1> TODO: Avaliar conteúdo deste componetne. Parece redundar com painel</h1>


                {mousePos.map((item) => (
                    diver(item.x, item.y)
                ))}


            </Div>

        </LayoutBase>
    );
};

export default Profile;

const Div = styled.div`
background-color:green;
height:100vh;

@keyframes example {
    0%   {background-color:red;}
  25%  {background-color:yellow; }
  50%  {background-color:blue; }
  75%  {background-color:green; }
  100% {background-color:red; }
}

`

const Diverx = styled.div`
background-color:black;
height: 100px;
width:100px;
border-radius: 50%;
animation-name: example;
animation-duration: 4s;
animation-iteration-count: infinite;
position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;

  border: 3px solid #73AD21;


`