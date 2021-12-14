import React, { useState } from "react";

type TradeItem = {
    id: string;
    imageUrl: string;
    title: string;
    location: string;
    createAt: Date;
    updateAt?: Date;
    price: number;
    chat?: number;
    interest?: number;
};

export const tradeItems: TradeItem[] = [
    {
        id: "1",
        imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffootsell.com%2Fg2%2Fdata%2Ffile%2Fm34%2F1563379787_tyk7aRGd_5C4087AE-5BC6-4324-B4B4-0E9BB1E9E510.jpeg&f=1&nofb=1",
        title: "오프화이트 조던 1 시카고",
        location: "상일동",
        createAt: new Date(),
        price: 10000000,
        chat: 1,
        interest: 1,
    },
    {
        id: "2",
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA5MTZfMjEy%2FMDAxNTM3MDY0NTUxOTM4.GlxmCktYUW-XgncRJZG6Xl9cVpBTf6A1HiRb9Sllo-Yg.sHyH2Co-pwnX1LqYg7rZM2y_dMe8LQ8tkm658J73vRIg.JPEG.kanaldo78%2FIMG_7059.JPG&type=a340",
        title: "오프화이트 조던 1 유니버시티 블루",
        location: "상일동",
        createAt: new Date(),
        price: 5000000,
    },
];