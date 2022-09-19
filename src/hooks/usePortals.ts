import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useOnClickOutside from "@/hooks/useOutSideClick";


const Portals = ({children, target, closeState}: {children: React.ReactElement, target: string, closeState?: (state: boolean) => void}) => {
    const element = document.getElementById(target);
    const elRef = useRef<any>(null);
    if (!elRef.current) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        if(!element) return;
        element.appendChild(elRef.current);
        return () => element.removeChild(elRef.current);
    }, []);

    // 외부 클릭 닫기
    if (closeState) {
        useOnClickOutside(elRef, () => closeState(false));
    }

    return target && element ? createPortal(children, elRef.current) : null;
};

export default Portals;