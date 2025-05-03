import { motion } from 'framer-motion';

export default function PinVerification({ pin, setPin, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-orange-400">
          ENTER ADMINISTRATOR CREDENTIALS
        </label>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
          className="w-full p-2 bg-gray-700 rounded text-center text-2xl font-mono tracking-[0.5em] border border-orange-500/30"
          placeholder="••••"
          inputMode="numeric"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-medium transition-colors shadow-lg shadow-orange-500/20"
      >
        AUTHENTICATE
      </motion.button>
    </form>
  );
}