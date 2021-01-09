import React, { useEffect, useState } from 'react';
import { Input, AutoComplete } from 'antd';

import { actionGetTopic} from '../../store/Topics/topics.action'
import { useDispatch, useSelector } from 'react-redux';

const Complete = () => {

    const [skillId , setSkillId] = useState("www")
    const [options, setOptions] = useState([{s:"s"}]);

    const topicsList = useSelector((state) => state.topics.topic)

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(actionGetTopic())

    }, [dispatch])
    
//Pegar a lista de topicos
//Associar a lista de ópicos num array
//passar para  a asearch


const searchResult = (query) => {



var filtrado = topicsList.filter((item) => item.title.includes(query))

return filtrado.map((item, idx) => {
      const itemValue = `${item.title}`;
      const itemLabel = `${item.title}`;
     // debugger
      return {
        value: itemValue,
        label: ( <div  style={{ display: 'flex',  justifyContent: 'space-between',  }} >
            <span>  {itemLabel}  </span>
            
          </div>
        ),
      };
    });
};


  

  const handleSearch = (value) => {
    //  debugger
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    setSkillId(value)
  }

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default Complete