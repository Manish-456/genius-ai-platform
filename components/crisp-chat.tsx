"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
      Crisp.configure("0996d9c8-1a94-438a-b16d-3403fd6b3e1d")
    }, []);

    return null;
}