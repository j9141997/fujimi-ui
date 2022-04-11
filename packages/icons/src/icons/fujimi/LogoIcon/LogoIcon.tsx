import React from 'react';
import {Color} from '@fujimi/ui-core';

export type Props = React.ComponentPropsWithoutRef<'svg'>;

export const LogoIcon: React.VFC<Props> = ({
  color = Color.WHITE.WHITE_100,
  ...props
}) => {
  return (
    <svg width={462} height={70} viewBox="0 0 462 70" fill="none" {...props}>
      <path
        d="M12.3773 10.2427V30.7364H38.8885V41.0288H12.3773V69.9917H0V0H43.5095V10.2427H12.3773Z"
        fill={color}
      />
      <path
        d="M13.2322 10.2427V30.7364H39.7433V41.0288H13.2322V69.9917H0.854805V0H44.3643V10.2427H13.2322Z"
        fill={color}
      />
      <path
        d="M115.172 58.8457C117.552 58.8457 119.686 58.4314 121.566 57.6027C123.445 56.774 125.03 55.6055 126.31 54.1056C127.59 52.6057 128.583 50.7825 129.265 48.6445C129.954 46.5064 130.299 44.1115 130.299 41.4597V0H142.627V41.4597C142.627 45.5783 141.995 49.382 140.723 52.8791C139.451 56.3762 137.637 59.3927 135.265 61.9285C132.893 64.4643 130.02 66.4449 126.622 67.862C123.232 69.279 119.407 69.9917 115.164 69.9917C110.887 69.9917 107.054 69.279 103.656 67.862C100.267 66.4449 97.3857 64.4643 95.0136 61.9285C92.6416 59.3927 90.8276 56.3762 89.5636 52.8791C88.2914 49.382 87.6594 45.5783 87.6594 41.4597V0H99.9875V41.4183C99.9875 44.0701 100.332 46.465 101.022 48.6031C101.711 50.7411 102.704 52.5725 104.001 54.089C105.298 55.6055 106.89 56.7823 108.77 57.611C110.658 58.4231 112.792 58.8457 115.172 58.8457Z"
        fill={color}
      />
      <path
        d="M212.533 44.6253C212.533 48.5202 212.073 52.0339 211.154 55.158C210.234 58.2905 208.872 60.9506 207.05 63.155C205.228 65.3593 202.962 67.0498 200.246 68.2266C197.521 69.4116 194.361 70 190.757 70C189.108 70 187.491 69.8923 185.898 69.6851C184.306 69.4779 182.648 69.1547 180.9 68.7072C180.99 67.431 181.097 66.1548 181.22 64.8787C181.343 63.6025 181.45 62.3263 181.54 61.0418C181.63 60.3457 181.901 59.7739 182.344 59.343C182.788 58.912 183.42 58.6966 184.249 58.6966C184.766 58.6966 185.447 58.8126 186.292 59.0281C187.13 59.2518 188.197 59.3595 189.477 59.3595C191.217 59.3595 192.76 59.1026 194.106 58.5723C195.452 58.0502 196.577 57.2049 197.48 56.0613C198.382 54.9094 199.064 53.4178 199.515 51.5864C199.975 49.7549 200.205 47.5257 200.205 44.9071V0H212.533V44.6253Z"
        fill={color}
      />
      <path d="M275.995 70H263.618V0H275.995V70Z" fill={color} />
      <path
        d="M398.538 0V69.9917H387.671V24.5128C387.671 22.7229 387.761 20.792 387.95 18.7203L367.923 58.0253C366.979 59.9065 365.526 60.8512 363.564 60.8512H361.824C359.871 60.8512 358.418 59.9065 357.466 58.0253L337.209 18.5711C337.299 19.6235 337.373 20.6594 337.439 21.6787C337.505 22.698 337.529 23.6427 337.529 24.5046V69.9834H326.662V0H335.97C336.52 0 336.996 0.0165739 337.39 0.0497218C337.792 0.0828696 338.145 0.165739 338.465 0.290044C338.785 0.414348 339.072 0.621522 339.335 0.911566C339.598 1.20161 339.844 1.58281 340.09 2.06345L359.937 40.5067C360.454 41.526 360.938 42.5867 361.381 43.664C361.824 44.7496 362.259 45.8684 362.686 47.012C363.113 45.8269 363.556 44.6916 364.016 43.5894C364.475 42.4873 364.96 41.4265 365.485 40.4072L385.061 2.06345C385.307 1.58281 385.561 1.20161 385.84 0.911566C386.119 0.621522 386.415 0.414348 386.735 0.290044C387.055 0.165739 387.416 0.0828696 387.81 0.0497218C388.204 0.0165739 388.68 0 389.23 0H398.538V0Z"
        fill={color}
      />
      <path d="M462 69.9917H449.622V0H462V69.9917Z" fill={color} />
    </svg>
  );
};
