'use client'

import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

const NavItems = () => {
    const [activeIdx, setActiveIdx] = useState<null | number>(null)

    useEffect(()=>{
        const handler = (e:KeyboardEvent) => {
            if(e.key === "Escape"){
                setActiveIdx(null)
            }
        }

        document.addEventListener('keydown', handler)

        return ()=>{
            document.removeEventListener('keydown',handler)
        }
    },[])

    const isAnyOpen = activeIdx !== null
    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, ()=>setActiveIdx(null))
    return (
       <div className="flex gap-4 h-full" ref={navRef}>
        {PRODUCT_CATEGORIES.map((category,i)=>{
                const handleOpen = () => {
                    if(activeIdx === i) {
                        setActiveIdx(null)
                    } else {
                        setActiveIdx(i)
                    }
                }

                const isOpen = i ===activeIdx
                return (
                    <NavItem category={category} handleOpen={handleOpen} isOpen={isOpen} key={category.value} isAnyOpen={isAnyOpen}/>
                )
            })
        }
       </div>
    )
}

export default NavItems