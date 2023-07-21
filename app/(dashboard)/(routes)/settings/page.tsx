import Heading from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

export default async function SettingPage() {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        subTitle="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="tex-muted-foreground text-sm">
          {isPro
            ? "You are currently on a pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
}