// useCustomPointer.js
import { useEffect, useState } from "react";

export default function useCustomPointer(pointer) {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const update = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", update);

        return () => window.removeEventListener("mousemove", update);
    }, []);

    return (
        <div style={{ position: "fixed", left: pos.x, top: pos.y, transform: "translate(-50%, -50%)", cursor: "none" }}>
            {pointer}
        </div>
    );
}