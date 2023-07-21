"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface SubscriptionButtonProps {
    isPro : boolean
}

export const SubscriptionButton = ({
    isPro
} : SubscriptionButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const onClick = async() => {
        try {
            setIsLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            console.log(`[Billing_Error]`, error)
        }finally{
            setIsLoading(false)
    }
    }
    return (
        <Button
         onClick={onClick}
         disabled={isLoading}
        variant={isPro ? "default" : "premium"}>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {
                !isPro && <Zap className="w-4 h-4 ml-2 fill-white"/>
            }
        </Button>
    )
}