import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import CustomColors from '../stylus/colors';

const DropSheds = ({ addShed }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Arapata', value: 'arapata' },
        { label: 'Coripata', value: 'coripata' },
        { label: 'Coroico', value: 'coroico' },
        { label: 'Milluhuaya', value: 'milluhuaya' },
        { label: 'Milluhuaya2', value: 'milluhuaya2' },
        { label: 'Milluhuaya3', value: 'milluhuaya3' },
        { label: 'Milluhuaya4', value: 'milluhuaya4' },
        { label: 'Milluhuaya5', value: 'milluhuaya5' },
        { label: 'Milluhuaya6', value: 'milluhuaya6' },
        { label: 'Milluhuaya7', value: 'milluhuaya7' },
        { label: 'Milluhuaya9', value: 'milluhuaya9' },
        { label: 'Milluhuaya10', value: 'milluhuaya10' },
        { label: 'Milluhuaya11', value: 'milluhuaya11' },
        { label: 'Milluhuaya12', value: 'milluhuaya12' },
        { label: 'Milluhuaya13', value: 'milluhuaya13' },
        { label: 'Milluhuaya14', value: 'milluhuaya14' },
        { label: 'Milluhuaya15', value: 'milluhuaya15' },
        { label: 'Milluhuaya16', value: 'milluhuaya16' },
        { label: 'Milluhuaya17', value: 'milluhuaya17' },
        { label: 'Milluhuaya18', value: 'milluhuaya18' },
        { label: 'Milluhuaya19', value: 'milluhuaya19' },
        { label: 'Milluhuaya20', value: 'milluhuaya20' },
        { label: 'Milluhuaya21', value: 'milluhuaya21' },
        { label: 'Milluhuaya22', value: 'milluhuaya22' },
    ]);

    const sendName = (value) => {
        addShed(value)
    }

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder='Select an Shed'
            onChangeValue={(value) => {
                sendName(value)
            }}
            dropDownContainerStyle={{
                backgroundColor: "#dfdfdf"
            }}
            selectedItemContainerStyle={{
                backgroundColor: CustomColors.secondary
            }}
            listMode="MODAL"
            searchable={false}
            modalTitle="Select an item"
            modalAnimationType="slide"
            modalTitleStyle={{
                fontWeight: "bold",
                color: CustomColors.primary
            }}
            modalContentContainerStyle={{
                // backgroundColor: CustomColors.grey,
                height: 200,
                weight: 200
            }}
            
        />
    )
}

export default DropSheds