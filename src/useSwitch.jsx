import { useState } from "react"

export default function useSwitch(initialValue = false) {

    const [isOn, setIsOn] = useState(initialValue);

    function toggle() {

        setIsOn(prev => !prev)
    }

    return [isOn, toggle]
}