import React, {useRef, useEffect} from 'react'

export const Ref: React.FC = () => {
    const ref = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (ref.current === null) return
        ref.current.focus()
    }, [])

    return (<input ref={ref} />)
}
