import { useState } from "react"

const NestedCheckbox = ({ childrenData }) => {
    const [checked, setChecked] = useState(childrenData.checked)
    const [children, setChildren] = useState(childrenData.children || []);


    const handleChange = (e, data) => { 
        const isChecked= e.target.checked;
        setChecked(isChecked)

        console.log('Children', children)

        const updatedChildren =  children.map((child => updateChildChecked(child, isChecked)));
        console.log(updatedChildren)
        setChildren(updatedChildren);

    }

    const updateChildChecked = (child, isChecked) => {
        console.log('Child', child)
        return {
            ...child,
            checked: isChecked,
            children: child.children ? child.children.map(sub => updateChildChecked(sub, isChecked)): []
        }
    }
    return (
        <li>
            <input type="checkbox" checked={checked} onChange={(e) => handleChange(e)} />{childrenData.name}
            {children && children.map((item, index) => (
                <ul>
                    <NestedCheckbox childrenData={item} />
                </ul>
            ))}
        </li>
    )
}

export default NestedCheckbox