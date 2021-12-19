import React, { useState } from "react";

type ChatType = {
    id: string;
    sender: string;
    message: string;
    sendedAt: Date;
}

export const messages: ChatType[] = [
    { id: "a", sender: "me", message: "hi", sendedAt: new Date() },
    { id: "b", sender: "you", message: "hello", sendedAt: new Date() },
    { id: "a", sender: "me", message: "hi", sendedAt: new Date() },
    { id: "b", sender: "you", message: "hello", sendedAt: new Date() },
    { id: "a", sender: "me", message: "hi", sendedAt: new Date() },
    { id: "b", sender: "you", message: "hello", sendedAt: new Date() },
    { id: "a", sender: "me", message: "hi", sendedAt: new Date() },
    { id: "b", sender: "you", message: "hello", sendedAt: new Date() },
    { id: "a", sender: "me", message: "hi", sendedAt: new Date() },
    { id: "b", sender: "you", message: "hello", sendedAt: new Date() },
];