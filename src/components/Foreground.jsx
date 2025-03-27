import React, { useRef } from 'react'
import Cards from './Cards'
import { FlatTree } from 'framer-motion';

const Foreground = () => {
    const ref = useRef(null);

    const data = [
        {
            disc: "Drag the card as you like and this will be fun for you and you can enjoy it.",
            fileSize: "0.9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
        },
        {
            disc: "Drag and feel the properties of the cards.",
            fileSize: "2mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },
        },
        {
            disc: "lorem ispum drag the card in any direction that you wants.",
            fileSize: "0.5mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
        },
        {
            disc: "Enjoy this and feel the cards functionality",
            fileSize: "0.9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
        },
        {
            disc: "sdiu hsk lorem ipsum lorem ispf Enjoy this and feel the cards functionality",
            fileSize: "5mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
        }
    ];

    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
            {data.map((item, index) => (
                <Cards key={index} data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground