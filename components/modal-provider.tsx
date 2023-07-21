"use client";

import React, { useEffect, useState } from 'react'
import ProModal from './pro-modal';

type Props = {}

export default function ModalProvider({}: Props) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
     setIsMounted(true);
    }, [])

    if(!isMounted) return null;
    
  return (
    <ProModal />
  )
}