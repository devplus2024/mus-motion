import React from "react";

interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {
  "xmlns:inkscape"?: string;
  "xmlns:sodipodi"?: string;
  "xmlns:svg"?: string;
  "sodipodi:docname"?: string;
  "inkscape:version"?: string;
}

const SvgLogo: React.FC = () => {
  const version: string = "1.1"; // Ensure this is a string

  const customProps: CustomSVGProps = {
    "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
    "xmlns:sodipodi": "http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:svg": "http://www.w3.org/2000/svg",
    version: "1.0",
    className: "dark:fill-white w-[30px] h-[30px]",
    id: "svg2",
    "sodipodi:docname": "Odal_rune.svg",
    "inkscape:version": "1.2.2 (732a01da63, 2022-12-09)",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
  };

  return (
    <svg {...customProps}>
      <path
        d="M 64.98808,279 0,213.4826 32.000356,180.52309 65.00665,213.48391 91.49048,187.00009 14.001338,109.49184 124.50682,0 234,109.4986 l -76.48123,77.49237 26.95661,27.0122 33.52393,-33.48042 L 250,213.49405 v 1.01749 L 184.48796,279 124.51251,219.99979 Z m 104.0121,-169.48351 -44.48369,-44.516669 -44.51667,44.483689 44.48369,44.51667 z"
        id="path2384"
      />
    </svg>
  );
};

export default SvgLogo;
