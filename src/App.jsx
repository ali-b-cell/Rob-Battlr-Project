import React, { useState } from "react";

const initialBots = [
  {
    id: 1,
    name: "Bot One",
    avatar_url: "https://robohash.org/bot1",
    health: 80,
    damage: 65,
    bot_class: "Assault"
  },
  {
    id: 2,
    name: "Bot Two",
    avatar_url: "https://robohash.org/bot2",
    health: 50,
    damage: 90,
    bot_class: "Medic"
  }
];

export default function App() {
  const [allBots, setAllBots] = useState(initialBots);
  const [army, setArmy] = useState([]);

  const enlistBot = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
      setAllBots(allBots.filter((b) => b.id !== bot.id));
    }
  };

  const releaseFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
    setAllBots([...allBots, bot]);
  };

  const BotCard = ({ bot, onClick, actionLabel }) => (
    <div
      className="bg-gray-600 rounded-xl p-4 w-64 text-center cursor-pointer hover:bg-blue-500 transition"
      onClick={() => onClick(bot)}
    >
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-24 h-24 mx-auto rounded-full mb-2"
      />
      <h3 className="text-xl font-bold">{bot.name}</h3>
      <p className="text-sm text-gray-300">{bot.bot_class}</p>
      <div className="text-sm mt-2">
         {bot.health}Health | Damage {bot.damage}
      </div>
      <p className="mt-2 text-white font-semibold">{actionLabel}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-300 text- flex flex-col items-center py-10 space-y-8">
      <h1 className="text-4xl font-bold bg-orange-700 px-10 py-4 rounded-xl">
        Bot Battlr
      </h1>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Your Bot Army</h2>
        {army.length === 0 ? (
          <div className="bg-cyan-500 px-6 py-4 rounded-xl text-lg">
            No bots enlisted yet.
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center">
            {army.map((bot) => (
              <BotCard
                key={bot.id}
                bot={bot}
                onClick={releaseFromArmy}
                actionLabel="Release"
              />
            ))}
          </div>
        )}
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">All Bots</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {allBots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClick={enlistBot}
              actionLabel="Enlist"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
