import React from "react";
import BotCard from "./BotCard";

export default function BotCollection({ bots, onEnlist }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Available Bots</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={onEnlist} />
        ))}
      </div>
    </div>
  );
}
