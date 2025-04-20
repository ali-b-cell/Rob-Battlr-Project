import React from "react";
import BotCard from "./BotCard";

export default function YourBotArmy({ army, onRemove, onDischarge }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Your Bot Army</h2>
      {army.length === 0 ? (
        <p className="text-center text-gray-500">No bots enlisted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              isInArmy={true}
              onClick={() => onRemove(bot)}
              onDischarge={() => onDischarge(bot)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
