import { SVGProps } from 'react';

function LockPassword({ viewBox = '0 0 24 24', ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox={viewBox} {...rest}>
      <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zM5 10v10h14V10H5zm6 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm1-6V7a4 4 0 1 0-8 0v1h8z" />
    </svg>
  );
}

export default LockPassword;
