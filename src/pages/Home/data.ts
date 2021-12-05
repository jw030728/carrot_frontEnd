import React, { useState } from "react";

type TradeItem = {
    id: string;
    imageUrl: string;
    title: string;
    location: string;
    createAt: Date;
    updateAt?: Date;
    price: number;
};

export const tradeItems: TradeItem[] = [
    {
        id: "1",
        imageUrl: "http://gdimg.gmarket.co.kr/2105019653/still/300?ver=2021120512",
        title: "밥",
        location: "집",
        createAt: new Date(),
        price: 1,
    },
    {
        id: "1",
        imageUrl: "http://gdimg.gmarket.co.kr/2105019653/still/300?ver=2021120512",
        title: "밥",
        location: "집",
        createAt: new Date(),
        price: 1,
    },
];