import { useCallback } from "react";
import useSound from "use-sound";

import winSound0 from "../sounds/explosion0.mp3";
import winSound1 from "../sounds/explosion1.mp3";
import winSound2 from "../sounds/explosion2.mp3";
import winSound3 from "../sounds/explosion3.mp3";

const useWinSounds = () => {
  const [playWin0] = useSound(winSound0);
  const [playWin1] = useSound(winSound1);
  const [playWin2] = useSound(winSound2);
  const [playWin3] = useSound(winSound3);

  const playRandomExplosionSound = useCallback(
    (remainingPlays) => {
      if (remainingPlays <= 0) return;

      const totalWinSounds = 4;
      const randomIndex = Math.floor(Math.random() * totalWinSounds);
      switch (randomIndex) {
        case 0:
          playWin0();
          break;
        case 1:
          playWin1();
          break;
        case 2:
          playWin2();
          break;
        case 3:
          playWin3();
          break;
        default:
          break;
      }

      setTimeout(() => {
        playRandomExplosionSound(remainingPlays - 1);
      }, 1000);
    },
    [playWin0, playWin1, playWin2, playWin3]
  );

  return playRandomExplosionSound;
};

export default useWinSounds;
