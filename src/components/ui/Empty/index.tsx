'use client';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  indicator?: React.ReactNode;
  inTable?: boolean;
  indicatorSize?: number | string;
  description?: React.ReactNode;
  colSpan?: number;
}

const empty = cva('relative', {
  variants: {
    inTable: {
      false: 'flex flex-col items-center justify-center gap-2',
    },
  },
  defaultVariants: {
    inTable: false,
  },
});

export default function Empty({ className, indicator, indicatorSize, description, inTable, colSpan = 999, ...props }: EmptyProps) {
  const indicatorNode = indicator ?? <DefaultIndicator size={indicatorSize} className="dark:opacity-80" />;
  const descriptionNode = description ?? <div className="text-description text-sm">No Data</div>;

  if (inTable) {
    return (
      <tr className={cn(empty({ inTable }), className)} {...props}>
        <td colSpan={colSpan} className="p-4 text-center">
          <div className="inline-flex flex-col items-center justify-center gap-2">
            {indicatorNode}
            {descriptionNode}
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div className={cn(empty({ inTable }), className)} {...props}>
      {indicatorNode}
      {descriptionNode}
    </div>
  );
}

function DefaultIndicator({ className, size = 64 }: { className?: string; size?: number | string }) {
  const _size = typeof size === 'number' ? `${size}px` : size;
  return (
    <svg data-slot="empty-indicator" width={_size} height={_size} viewBox="0 0 165 165" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1610_349)">
        <path
          d="M148.459 30.2129H19.7478C18.0114 30.214 16.3463 30.9042 15.1184 32.1321C13.8906 33.36 13.2003 35.025 13.1992 36.7615V154.856C13.2003 156.592 13.8906 158.257 15.1184 159.485C16.3463 160.713 18.0114 161.403 19.7478 161.404H148.459C150.196 161.403 151.861 160.713 153.089 159.485C154.317 158.257 155.008 156.592 155.009 154.856V36.7615C155.008 35.0249 154.317 33.3598 153.089 32.1319C151.861 30.904 150.196 30.2138 148.459 30.2129Z"
          fill="#C6C6C6"
        />
        <path
          d="M139.986 120.367H28.2224C24.606 120.367 21.6738 117.435 21.6738 113.819V9.47634C21.6738 5.85987 24.606 2.92773 28.2224 2.92773H139.986C143.603 2.92773 146.535 5.85987 146.535 9.47634V113.819C146.535 117.435 143.603 120.367 139.986 120.367Z"
          fill="#F9F9F9"
        />
        <path
          d="M23.7471 115.891V11.5497C23.7471 7.93319 26.6793 5.00105 30.2958 5.00105H142.06C143.337 5.00105 144.524 5.3723 145.531 6.00458C144.374 4.15847 142.326 2.92773 139.986 2.92773H28.2224C24.606 2.92773 21.6738 5.85987 21.6738 9.47634V113.819C21.6738 116.159 22.9046 118.206 24.7507 119.364C24.1184 118.357 23.7471 117.169 23.7471 115.892V115.891Z"
          fill="url(#paint0_linear_1610_349)"
        />
        <path
          d="M126.235 24.9736H41.9746V29.7755H126.235V24.9736ZM126.235 43.3089H41.9746V48.1108H126.235V43.3089ZM126.235 61.6483H41.9746V66.4502H126.235V61.6483ZM126.235 79.9835H41.9746V84.7861H126.235V79.9835Z"
          fill="white"
        />
        <path d="M52.0156 64.4844L73.1891 85.6585H52.0156V64.4844Z" fill="url(#paint1_linear_1610_349)" />
        <path d="M155.009 87.405V38.6874L146.535 30.2129V87.4043H155.009V87.405Z" fill="#C6C6C6" />
        <path
          d="M164.934 91.8117L155.805 156.44C155.348 159.671 152.583 162.073 149.32 162.073H18.8877C15.6249 162.073 12.8598 159.671 12.4033 156.44L0.0655295 69.1114C-0.491007 65.169 2.56825 61.6465 6.54989 61.6465H46.8302C50.093 61.6465 52.8581 64.0478 53.3145 67.2781L54.9314 78.7145C55.3879 81.9455 58.153 84.3468 61.4158 84.3468H158.451C162.432 84.3468 165.492 87.8693 164.935 91.8117H164.934Z"
          fill="url(#paint2_linear_1610_349)"
        />
        <path
          d="M132.587 133.246H35.6227C35.0912 133.245 34.578 133.051 34.1793 132.7C33.7806 132.349 33.5237 131.864 33.4567 131.337L32.2435 121.731C32.205 121.424 32.2322 121.112 32.3235 120.816C32.4147 120.52 32.5678 120.247 32.7726 120.015C32.9774 119.783 33.2293 119.597 33.5115 119.469C33.7937 119.342 34.0998 119.276 34.4095 119.275H133.8C134.109 119.276 134.415 119.342 134.698 119.469C134.98 119.597 135.232 119.783 135.437 120.015C135.641 120.247 135.795 120.52 135.886 120.816C135.977 121.112 136.004 121.424 135.966 121.731L134.752 131.337C134.686 131.864 134.429 132.349 134.03 132.7C133.631 133.051 133.118 133.245 132.587 133.246V133.246Z"
          fill="#D5D5D5"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_1610_349" x1="87.9443" y1="65.4803" x2="5.1265" y2="-17.3382" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_1610_349" x1="66.0048" y1="89.0558" x2="40.4115" y2="63.4633" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C2CECE" stopOpacity="0" />
          <stop offset="0.179" stopColor="#AFBCBC" stopOpacity="0.179" />
          <stop offset="1" stopColor="#5B6A6A" />
        </linearGradient>
        <linearGradient id="paint2_linear_1610_349" x1="82.4999" y1="61.6465" x2="82.4999" y2="162.073" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EEF0F4" />
          <stop offset="0.927" stopColor="#E4E4E4" />
        </linearGradient>
        <clipPath id="clip0_1610_349">
          <rect width="165" height="165" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
