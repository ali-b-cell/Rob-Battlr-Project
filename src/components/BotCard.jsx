const BotCard = ({ bot, onClick, actionLabel }) => (
  <div
    className="bg-gray-500 rounded-xl p-4 w-64 text-center cursor-pointer hover:bg-blue-400 transition"
    onClick={() => onClick(bot)}
  >
    <img
      src={bot.avatar_url}
      alt={bot.name}
      className="w-24 h-24 mx-auto rounded-full mb-2"
    />
    <h3 className="text-xl font-bold">{bot.name}</h3>
    <p className="text-sm text-cyan-300">{bot.bot_class}</p>

    <p className="text-sm mt-2 text-white">
      Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}
    </p>

    {bot.catchphrase && (
      <p className="text-sm mt-1 text-cyan-100 italic">
        {bot.catchphrase}
      </p>
    )}

    <p className="mt-2 text-white font-semibold">{actionLabel}</p>
  </div>
);
