import Image from "next/image";

interface MyPhotoProps {
  className: string;
}

export default function MyPhoto({ className }: MyPhotoProps) {
  return (
    <div className={`bg-[url("/images/bbburst.svg")] ${className}`}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="100%"
        id="blobSvg"
        filter="blur(0px)"
        style={{ opacity: 1 }}
      >
        <image
          x="0"
          y="0"
          width="100%"
          height="100%"
          clip-path="url(#shape)"
          xlinkHref="/images/me.jpg"
          preserveAspectRatio="none"
        />
        <defs>
          {/* <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}="stop-color: rgb(238, 205, 163);"></stop>
          <stop offset="100%" style="stop-color: rgb(239, 98, 159);"></stop>
        </linearGradient> */}
        </defs>

        <clipPath id="shape">
          <path id="blob" fill="url(#gradient)">
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
            />
          </path>
        </clipPath>
      </svg>
    </div>
    // <div className={className}>
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     xmlnsXlink="http://www.w3.org/1999/xlink"
    //     viewBox="0 0 100 100"
    //   >
    //     <defs>
    //       <clipPath id="theClippingPath">
    //         <path
    //           d="M23.7,-28.7C31.2,-21.9,38.2,-14.9,40,-6.7C41.9,1.5,38.7,11,33.3,18.3C28,25.6,20.5,30.7,12.1,34.2C3.7,37.7,-5.7,39.5,-13.2,36.7C-20.7,33.8,-26.4,26.2,-31.4,17.9C-36.4,9.7,-40.7,0.9,-40.6,-8.5C-40.6,-17.9,-36.2,-27.9,-28.7,-34.7C-21.2,-41.5,-10.6,-45.1,-1.3,-43.6C8.1,-42,16.2,-35.5,23.7,-28.7Z"
    //           transform="translate(50 50)"
    //         />
    //       </clipPath>
    //     </defs>
    //     <image
    //       xlinkHref="/images/me.jpg"
    //       width="100%"
    //       height="100%"
    //       clip-path="url(#theClippingPath)"
    //     />
    //   </svg>
    // </div>
  );
}
