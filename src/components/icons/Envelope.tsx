import { SVGProps } from 'react';

function Envelope({ viewBox = '0 0 491.1 491.1', ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox={viewBox} {...rest}>
      <path d="M470.3 46.35H20.9C9.4 46.35 0 55.75 0 67.25v356.6c0 11.5 9.4 20.9 20.9 20.9h448.3c11.5 0 20.9-9.4 21.9-19.8V67.15c0-11.4-9.4-20.8-20.8-20.8zm-225.2 232.5L67.4 86.95h355.4l-177.7 191.9zm204.3-159.5v247l-106.3-132.4 106.3-114.6zm-299.2 117.8L40.7 368.45v-249.1l109.5 117.8zm28.2 30.2 52.1 55.3c8.3 8.3 22.9 8.3 30.2 0l54.2-58.4 111.9 139.7H64.4l114-136.6z" />
    </svg>
  );
}

export default Envelope;
