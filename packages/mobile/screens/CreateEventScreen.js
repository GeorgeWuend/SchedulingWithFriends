import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity   } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Julia',
    id: 'JUVE',
  },
  {
    item: 'George',
    id: 'RM',
  },
  {
    item: 'Katya',
    id: 'BR',
  },
  {
    item: 'Filmore',
    id: 'PSG',
  },
  {
    item: 'XxXMelloettaxXx',
    id: 'FBM',
  }
]



export default function CreateEventScreen( {onClose} ) {
  const [textTitle, setTextTitle] = useState('');
  const [textDesc, setTextDesc] = useState('');

  const handleChangeTitle = (inputText) => {
    setTextTitle(inputText);
  };

  const handleChangeDescription = (inputText) => {
    setTextDesc(inputText);
  };

  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  return (
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
      </View>
      <TextInput
        style={{ fontSize: 29, paddingBottom: 20, paddingTop: 20}}
        placeholder="Add Event Name"
        onChangeText={handleChangeTitle}
        value={textTitle}
      />
      <TextInput
        style={{ fontSize: 20, paddingBottom: 20}}
        multiline={true}
        placeholder="Description"
        onChangeText={handleChangeDescription}
        value={textDesc}
      />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Invited friends:</Text>
      <Text style={{ fontSize: 20, paddingTop: 10}}>Bob</Text>
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Friends who are also free:</Text>
      <SelectBox
        label="Select multiple"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        open={true}
      />

      <TouchableOpacity
        onPress={onClose}
      >
        <Text style={{alignSelf: 'flex-start'}}>Go Back</Text>
      </TouchableOpacity>

    </View>
  )


  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }

}


