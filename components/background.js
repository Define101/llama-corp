import React from "react";

function useConstellation(points) {
  // "loop" number in boundaries [min, max]:
  // if outside the boundaries, "circle" the other way
  function loop(res, min, max) {
    if (res < min) {
      return max + res;
    }
    return res % max;
  }

  React.useEffect(() => {
    const progressDelta = 0.002;
    let progress = 0;
    let rAFId;

    function movePoints() {
      progress += progressDelta;

      for (const point of points) {
        const { pathId, circleId, speed, offset } = point;
        const sprite = document.getElementById(circleId);
        const track = document.getElementById(pathId);

        if (sprite && track) {
          const len = track.getTotalLength();

          const p1 = track.getPointAtLength(
            loop(speed * (progress - offset) * len, 0, len)
          );

          sprite.setAttribute("cx", p1.x);
          sprite.setAttribute("cy", p1.y);
        }
      }

      rAFId = requestAnimationFrame(movePoints);
    }

    movePoints();

    return () => {
      if (rAFId) {
        cancelAnimationFrame(rAFId);
      }
    };
  }, [points]);
}

export function Background0(props) {
  const points = [
    { pathId: "bg0p0", circleId: "bg0c0", speed: 0.2, offset: 0.3 },
    { pathId: "bg0p1", circleId: "bg0c1", speed: 0.4, offset: 0.2 },
    { pathId: "bg0p2", circleId: "bg0c2", speed: 0.6, offset: 0.3 },
    { pathId: "bg0p3", circleId: "bg0c3", speed: 0.6, offset: 0.6 },
    { pathId: "bg0p4", circleId: "bg0c4", speed: 0.3, offset: 0.3 },
    { pathId: "bg0p5", circleId: "bg0c5", speed: 0.2, offset: 0.8 },
    { pathId: "bg0p6", circleId: "bg0c6", speed: 0.5, offset: 0.4 },
    { pathId: "bg0p7", circleId: "bg0c7", speed: 0.5, offset: 0.4 },
    { pathId: "bg0p8", circleId: "bg0c8", speed: 0.3, offset: 0.4 },
  ];

  useConstellation(points);

  return (
    <svg
      width="981"
      height="1767"
      viewBox="0 0 981 1767"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="84.127"
        cy="692.53"
        rx="720"
        ry="273.42"
        fill="url(#paint0_linear_2_3)"
      />
      <path
        id="bg0p0"
        d="M827.814 582.916C818.261 671.744 729.97 743.929 594.186 788.601C458.498 833.241 275.778 850.253 78.2031 829.006C-119.372 807.758 -294.296 752.284 -417.39 679.814C-540.571 607.292 -611.495 517.985 -601.942 429.157C-592.389 340.329 -504.098 268.144 -368.314 223.472C-232.626 178.832 -49.906 161.82 147.669 183.067C345.243 204.315 520.168 259.789 643.262 332.259C766.443 404.781 837.367 494.088 827.814 582.916Z"
        stroke="url(#paint1_linear_2_3)"
        strokeWidth="2"
      />
      <path
        id="bg0p1"
        opacity="0.5"
        d="M715.59 792.677C758.312 871.141 726.829 980.752 640.637 1094.79C554.506 1208.74 413.98 1326.76 239.459 1421.78C64.9378 1516.81 -110.45 1570.8 -252.906 1581.31C-395.462 1591.82 -504.616 1558.79 -547.338 1480.32C-590.06 1401.86 -558.577 1292.25 -472.385 1178.21C-386.254 1064.26 -245.728 946.239 -71.2068 851.215C103.314 756.191 278.702 702.2 421.158 691.692C563.715 681.176 672.868 714.214 715.59 792.677Z"
        stroke="url(#paint2_linear_2_3)"
        strokeWidth="2"
      />
      <path
        id="bg0p2"
        opacity="0.5"
        d="M817.535 755.244C835.326 842.795 773.036 938.325 657.151 1022.01C541.348 1105.64 372.356 1177.18 177.622 1216.75C-17.1121 1256.32 -200.622 1256.41 -339.881 1224.62C-479.238 1192.8 -573.873 1129.15 -591.664 1041.6C-609.455 954.053 -547.165 858.524 -431.28 774.836C-315.477 691.207 -146.484 619.67 48.2496 580.099C242.984 540.527 426.494 540.434 565.752 572.232C705.109 604.052 799.744 667.693 817.535 755.244Z"
        stroke="url(#paint3_linear_2_3)"
        strokeWidth="2"
      />
      <path
        id="bg0p3"
        d="M801.288 600.02C798.733 635.677 776.42 668.352 737.969 696.896C699.521 725.438 645.045 749.764 578.436 768.718C445.227 806.625 263.714 822.988 65.4853 808.784C-132.789 794.576 -303.335 764.942 -422.99 720.871C-482.821 698.833 -529.858 673.211 -561.276 644.159C-592.676 615.124 -608.421 582.724 -605.865 547.052C-603.31 511.395 -580.997 478.721 -542.546 450.176C-504.098 421.635 -449.621 397.309 -383.012 378.354C-249.804 340.447 -68.2907 324.085 129.938 338.289C328.213 352.497 498.758 382.13 618.413 426.202C678.245 448.239 725.281 473.862 756.699 502.913C788.1 531.948 803.844 564.348 801.288 600.02Z"
        stroke="url(#paint4_linear_2_3)"
        strokeWidth="2"
      />
      <path
        d="M803.127 692.53C803.127 729.898 783.188 765.613 746.878 798.213C710.568 830.814 657.97 860.218 592.889 884.932C462.734 934.359 282.86 964.95 84.127 964.95C-114.606 964.95 -294.48 934.359 -424.635 884.932C-489.716 860.218 -542.314 830.814 -578.624 798.213C-614.934 765.613 -634.873 729.898 -634.873 692.53C-634.873 655.162 -614.934 619.447 -578.624 586.846C-542.314 554.246 -489.716 524.842 -424.635 500.127C-294.48 450.701 -114.606 420.11 84.127 420.11C282.86 420.11 462.734 450.701 592.889 500.127C657.97 524.842 710.568 554.246 746.878 586.846C783.188 619.447 803.127 655.162 803.127 692.53Z"
        stroke="url(#paint5_linear_2_3)"
        strokeWidth="2"
      />
      <path
        id="bg0p4"
        opacity="0.5"
        d="M803.127 727.746C803.127 756.163 783.321 783.449 746.979 808.442C710.669 833.413 658.062 855.941 592.964 874.876C462.784 912.743 282.882 936.177 84.127 936.177C-114.629 936.177 -294.53 912.743 -424.711 874.876C-489.808 855.941 -542.415 833.413 -578.725 808.442C-615.067 783.449 -634.873 756.163 -634.873 727.746C-634.873 699.328 -615.067 672.042 -578.725 647.049C-542.415 622.078 -489.808 599.551 -424.711 580.615C-294.53 542.749 -114.629 519.314 84.127 519.314C282.882 519.314 462.784 542.749 592.964 580.615C658.062 599.551 710.669 622.078 746.979 647.049C783.321 672.042 803.127 699.328 803.127 727.746Z"
        stroke="url(#paint6_linear_2_3)"
        strokeWidth="2"
      />
      <path
        opacity="0.5"
        d="M803.127 786.613C803.127 795.687 798.298 804.673 788.818 813.487C779.339 822.299 765.304 830.848 747.136 839.02C710.806 855.361 658.173 870.101 593.057 882.49C462.841 907.263 282.906 922.593 84.127 922.593C-114.653 922.593 -294.587 907.263 -424.803 882.49C-489.919 870.101 -542.552 855.361 -578.882 839.02C-597.05 830.848 -611.085 822.299 -620.564 813.487C-630.044 804.673 -634.873 795.687 -634.873 786.613C-634.873 777.539 -630.044 768.553 -620.564 759.739C-611.085 750.926 -597.05 742.378 -578.882 734.206C-542.552 717.865 -489.919 703.124 -424.803 690.736C-294.587 665.963 -114.653 650.633 84.127 650.633C282.906 650.633 462.841 665.963 593.057 690.736C658.173 703.124 710.806 717.865 747.136 734.206C765.304 742.378 779.339 750.926 788.818 759.739C798.298 768.553 803.127 777.539 803.127 786.613Z"
        stroke="url(#paint7_linear_2_3)"
        strokeWidth="2"
      />
      <path
        id="bg0p5"
        opacity="0.5"
        d="M803.127 880.191C803.127 885.519 798.562 891.042 788.996 896.61C779.513 902.13 765.462 907.488 747.275 912.61C710.915 922.849 658.254 932.082 593.126 939.839C462.881 955.352 282.923 964.95 84.127 964.95C-114.669 964.95 -294.628 955.352 -424.872 939.839C-490.001 932.082 -542.661 922.849 -579.021 912.61C-597.208 907.488 -611.259 902.13 -620.742 896.61C-630.308 891.042 -634.873 885.519 -634.873 880.191C-634.873 874.863 -630.308 869.34 -620.742 863.772C-611.259 858.252 -597.208 852.894 -579.021 847.773C-542.661 837.534 -490.001 828.301 -424.872 820.544C-294.628 805.03 -114.669 795.433 84.127 795.433C282.923 795.433 462.881 805.03 593.126 820.544C658.254 828.301 710.915 837.534 747.275 847.773C765.462 852.894 779.513 858.252 788.996 863.772C798.562 869.34 803.127 874.863 803.127 880.191Z"
        stroke="url(#paint8_linear_2_3)"
        strokeWidth="2"
      />
      <path
        opacity="0.5"
        d="M803.127 946.508C803.127 946.805 802.987 947.21 802.474 947.737C801.958 948.266 801.135 948.841 799.954 949.446C797.596 950.653 794.025 951.872 789.253 953.084C779.724 955.506 765.63 957.851 747.424 960.089C711.025 964.564 658.331 968.596 593.192 971.983C462.92 978.758 282.938 982.948 84.127 982.948C-114.684 982.948 -294.666 978.758 -424.938 971.983C-490.078 968.596 -542.771 964.564 -579.17 960.089C-597.376 957.851 -611.471 955.506 -620.999 953.084C-625.771 951.872 -629.342 950.653 -631.7 949.446C-632.881 948.841 -633.704 948.266 -634.22 947.737C-634.733 947.21 -634.873 946.805 -634.873 946.508C-634.873 946.211 -634.733 945.805 -634.22 945.279C-633.704 944.75 -632.881 944.175 -631.7 943.57C-629.342 942.363 -625.771 941.144 -620.999 939.932C-611.471 937.51 -597.376 935.165 -579.17 932.927C-542.771 928.452 -490.078 924.42 -424.938 921.032C-294.666 914.258 -114.684 910.068 84.127 910.068C282.938 910.068 462.92 914.258 593.192 921.032C658.331 924.42 711.025 928.452 747.424 932.927C765.63 935.165 779.724 937.51 789.253 939.932C794.025 941.144 797.596 942.363 799.954 943.57C801.135 944.175 801.958 944.75 802.474 945.279C802.987 945.805 803.127 946.211 803.127 946.508Z"
        stroke="url(#paint9_linear_2_3)"
        strokeWidth="2"
      />
      <path
        id="bg0p6"
        d="M859.488 635.337C826.386 742.531 719.701 816.095 573.579 848.186C427.49 880.269 242.202 870.83 52.3658 812.207C-137.47 753.583 -295.817 656.903 -398.378 548.034C-500.963 439.14 -547.591 318.23 -514.489 211.037C-481.386 103.843 -374.702 30.2784 -228.579 -1.81211C-82.4904 -33.8952 102.798 -24.4566 292.634 34.1672C482.47 92.7909 640.817 189.471 743.378 298.34C845.963 407.234 892.591 528.143 859.488 635.337Z"
        stroke="url(#paint10_linear_2_3)"
        strokeWidth="2"
      />
      <g opacity="0.4">
        <path
          id="bg0p7"
          d="M289.811 594.188C238.864 594.188 230.382 549.138 229.597 543.032V542.246C224.256 495.938 246.064 421.09 245.279 403.348V400.046C245.279 371.638 261.903 359.399 261.903 359.399C264.73 356.254 268.945 353.581 274.443 352.035H274.757L274.443 351.72C272.558 349.362 271.459 346.846 271.459 344.356C271.459 338.224 276.799 332.903 284.941 330.073C296.068 310.916 309.708 295.716 320.834 285.18C331.803 274.514 340.443 268.696 341.202 268.067C348.716 261.463 357.669 255.514 365.34 245.477C367.696 242.175 372.252 240.917 375.995 242.489C376.781 242.961 377.566 243.432 378.194 244.061C384.006 252.684 377.409 269.325 371.283 286.124C366.256 299.935 358.429 313.589 356.229 316.576C329.735 354.236 372.225 314.69 386.494 298.048C399.662 304.18 415.658 314.375 414.087 334.292C417.229 335.393 420.056 337.437 421.915 339.953C423.957 342.626 425.057 345.771 425.057 349.204C425.057 350.777 424.743 352.192 424.428 353.607C440.11 357.695 451.708 368.362 458.907 383.116C466.133 398.028 471.762 444.336 426.915 439.619C420.475 438.99 399.479 436.002 390.709 432.569C384.137 429.896 376.755 426.306 370.786 421.117C367.644 418.286 365.445 417.657 369.215 423.79C373.77 430.997 380.498 440.117 389.766 447.009C389.609 447.324 389.452 447.638 389.295 448.11C386.31 454.085 384.111 463.336 383.326 477.147C392.096 483.28 396.18 516.537 390.839 521.726C408.406 519.21 442.885 560.014 420.161 579.171C418.904 579.958 417.805 580.901 416.548 581.687C415.92 582.002 415.292 582.474 414.663 582.788C401.181 590.624 385.656 594.555 367.932 594.555H290.177L289.706 594.241L289.811 594.188Z"
          stroke="url(#paint11_linear_2_3)"
          strokeWidth="2"
        />
        <g opacity="0.5">
          <path
            id="bg0p8"
            opacity="0.5"
            d="M275.071 592.223C224.623 585.121 222.476 539.337 222.554 533.178L222.659 532.392C223.811 485.796 255.803 414.722 257.505 397.032L257.976 393.756C261.929 365.636 280.098 355.835 280.098 355.835C283.344 353.109 287.873 351.065 293.528 350.279L293.842 350.331L293.581 349.964C292.036 347.37 291.303 344.723 291.643 342.259C292.507 336.179 298.529 331.672 306.985 329.994C320.677 312.567 336.28 299.411 348.768 290.527C361.099 281.485 370.471 276.925 371.309 276.427C379.661 270.924 389.373 266.285 398.353 257.427C401.154 254.492 405.841 253.863 409.323 255.959C410.029 256.536 410.736 257.113 411.286 257.82C415.841 267.176 406.993 282.717 398.589 298.52C391.703 311.492 382.043 323.914 379.451 326.588C347.983 360.185 395.552 326.954 411.993 312.462C424.193 320.376 438.592 332.694 434.272 352.192C437.23 353.712 439.744 356.149 441.236 358.901C442.885 361.836 443.54 365.086 443.069 368.493C442.859 370.039 442.336 371.402 441.838 372.764C456.787 379.002 466.788 391.188 471.867 406.781C476.945 422.558 476.082 469.207 432.335 458.278C426.052 456.758 405.657 450.862 397.463 446.249C391.337 442.685 384.504 438.099 379.32 432.123C376.597 428.874 374.503 427.957 377.383 434.561C380.891 442.344 386.284 452.303 394.505 460.427C394.295 460.715 394.112 461.004 393.876 461.449C390.08 466.953 386.624 475.811 383.928 489.36C391.756 496.645 391.18 530.164 385.158 534.541C402.908 534.488 431.366 579.722 406.207 595.525C404.846 596.127 403.641 596.914 402.28 597.516C401.626 597.752 400.919 598.119 400.264 598.355C385.813 604.225 369.895 605.955 352.355 603.492L275.359 592.668L274.941 592.301H275.045L275.071 592.223Z"
            stroke="url(#paint12_linear_2_3)"
            strokeWidth="2"
          />
        </g>
        <g opacity="0.2">
          <path
            opacity="0.4"
            d="M261.301 570.602C212.894 554.746 218.811 509.303 219.962 503.25L220.198 502.489C229.492 456.811 273.474 392.446 278.239 375.359L279.26 372.214C288.083 345.221 307.692 338.748 307.692 338.748C311.357 336.651 316.2 335.419 321.907 335.655L322.195 335.76L321.986 335.367C320.939 332.537 320.651 329.811 321.436 327.426C323.347 321.608 330.076 318.201 338.689 318.044C355.208 303.289 372.906 293.095 386.755 286.543C400.5 279.808 410.501 276.977 411.417 276.611C420.606 272.68 430.973 269.797 441.367 262.642C444.639 260.231 449.352 260.467 452.415 263.114C453.017 263.795 453.619 264.503 454.012 265.289C456.865 275.3 445.425 289.059 434.377 303.106C425.318 314.663 413.616 325.199 410.605 327.374C373.718 354.917 426.392 330.571 445.111 319.171C455.713 329.103 467.756 343.753 460.086 362.203C462.73 364.221 464.772 367.051 465.767 370.013C466.866 373.184 466.945 376.512 465.871 379.788C465.374 381.282 464.641 382.54 463.908 383.771C477.548 392.551 485.245 406.283 487.522 422.558C489.747 438.99 480.715 484.747 439.56 466.298C433.644 463.703 414.611 454.321 407.333 448.319C401.914 443.733 396.023 438.02 391.965 431.232C389.845 427.563 387.96 426.279 389.635 433.277C391.73 441.532 395.29 452.303 401.966 461.737C401.73 462 401.468 462.235 401.181 462.629C396.494 467.372 391.52 475.496 386.494 488.364C392.934 496.934 386.494 529.797 379.791 533.073C397.28 536.139 417.36 585.671 389.818 596.809C388.378 597.176 387.043 597.726 385.603 598.067C384.923 598.172 384.163 598.434 383.457 598.512C368.22 601.762 352.224 600.661 335.39 595.158L261.484 570.969L261.144 570.523H261.248L261.301 570.602Z"
            stroke="url(#paint13_linear_2_3)"
            strokeWidth="2"
          />
        </g>

        <circle id="bg0c0" r="4" fill="#C4C4C4" />
        <circle id="bg0c1" r="6" fill="#C4C4C4" />
        <circle id="bg0c2" r="6" fill="#C4C4C4" />
        <circle id="bg0c3" opacity="0.4" r="4" fill="#C4C4C4" />
        <circle id="bg0c4" r="4" fill="#C4C4C4" />
        <circle id="bg0c5" r="4" fill="#C4C4C4" />
        <circle id="bg0c6" r="4" fill="#C4C4C4" />
      </g>
      <circle id="bg0c7" opacity="0.4" r="4" fill="#C4C4C4" />
      <circle id="bg0c8" opacity="0.4" r="4" fill="#C4C4C4" />
      <defs>
        <linearGradient
          id="paint0_linear_2_3"
          x1="84.1269"
          y1="179.53"
          x2="84.1269"
          y2="654.058"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4C4C4" stopOpacity="0.27" />
          <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2_3"
          x1="147.776"
          y1="182.073"
          x2="78.0961"
          y2="830"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2_3"
          x1="-71.685"
          y1="850.337"
          x2="239.937"
          y2="1422.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2_3"
          x1="48.0504"
          y1="579.119"
          x2="177.821"
          y2="1217.73"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2_3"
          x1="102.84"
          y1="287.481"
          x2="65.4137"
          y2="809.781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2_3"
          x1="84.127"
          y1="419.11"
          x2="84.127"
          y2="965.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2_3"
          x1="84.127"
          y1="518.314"
          x2="84.127"
          y2="937.177"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2_3"
          x1="84.127"
          y1="649.633"
          x2="84.127"
          y2="923.593"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_2_3"
          x1="84.127"
          y1="794.433"
          x2="84.127"
          y2="965.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_2_3"
          x1="84.127"
          y1="909.068"
          x2="84.127"
          y2="983.948"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_2_3"
          x1="292.929"
          y1="33.2117"
          x2="52.0708"
          y2="813.162"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_2_3"
          x1="346.281"
          y1="240.917"
          x2="346.281"
          y2="595.446"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_2_3"
          x1="380.106"
          y1="250.246"
          x2="330.709"
          y2="601.329"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_2_3"
          x1="424.69"
          y1="252.421"
          x2="314.371"
          y2="589.325"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Background1(props) {
  const points = [
    { pathId: "bg1p0", circleId: "bg1c0", speed: 0.2, offset: 0.3 },
    { pathId: "bg1p1", circleId: "bg1c1", speed: 0.4, offset: 0.2 },
    { pathId: "bg1p2", circleId: "bg1c2", speed: 0.6, offset: 0.3 },
    { pathId: "bg1p3", circleId: "bg1c3", speed: 0.6, offset: 0.6 },
    { pathId: "bg1p4", circleId: "bg1c4", speed: 0.4, offset: 0.2 },
  ];

  useConstellation(points);

  return (
    <svg
      width="1186"
      height="927"
      viewBox="0 0 1186 927"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.5">
        <ellipse
          rx="720"
          ry="273.42"
          transform="matrix(1 0 0 -1 720.763 291.468)"
          fill="url(#paint0_linear_2_104)"
        />
        <path
          id="bg1p0"
          opacity="0.2"
          d="M1439.76 481.786C1439.76 392.445 1359.7 311.233 1229.47 252.299C1099.33 193.406 919.477 156.954 720.763 156.954C522.049 156.954 342.195 193.406 212.058 252.299C81.8288 311.233 1.76257 392.445 1.76257 481.786C1.76257 571.126 81.8288 652.338 212.058 711.272C342.195 770.165 522.049 806.617 720.763 806.617C919.477 806.617 1099.33 770.165 1229.47 711.272C1359.7 652.338 1439.76 571.126 1439.76 481.786Z"
          stroke="url(#paint1_linear_2_104)"
          strokeWidth="2"
        />
        <path
          d="M1439.76 435.367C1439.76 399.618 1419.84 365.432 1383.53 334.213C1347.22 302.997 1294.62 274.839 1229.54 251.172C1099.38 203.841 919.5 174.547 720.763 174.547C522.025 174.547 342.146 203.841 211.987 251.172C146.904 274.839 94.305 302.997 57.9957 334.213C21.6831 365.432 1.76257 399.618 1.76257 435.367C1.76257 471.115 21.6831 505.301 57.9957 536.521C94.305 567.737 146.904 595.895 211.987 619.561C342.146 666.892 522.025 696.186 720.763 696.186C919.5 696.186 1099.38 666.892 1229.54 619.561C1294.62 595.895 1347.22 567.737 1383.53 536.521C1419.84 505.301 1439.76 471.115 1439.76 435.367Z"
          stroke="url(#paint2_linear_2_104)"
          strokeWidth="2"
        />
        <path
          id="bg1p4"
          d="M1439.76 291.468C1439.76 254.1 1419.82 218.385 1383.51 185.784C1347.2 153.184 1294.61 123.78 1229.52 99.0654C1099.37 49.6391 919.496 19.0475 720.763 19.0475C522.029 19.0475 342.155 49.6391 212.001 99.0654C146.92 123.78 94.3219 153.184 58.0118 185.784C21.7013 218.385 1.76257 254.1 1.76257 291.468C1.76257 328.836 21.7013 364.551 58.0118 397.151C94.3219 429.752 146.92 459.156 212.001 483.87C342.155 533.297 522.029 563.888 720.763 563.888C919.496 563.888 1099.37 533.297 1229.52 483.87C1294.61 459.156 1347.2 429.752 1383.51 397.151C1419.82 364.551 1439.76 328.836 1439.76 291.468Z"
          stroke="url(#paint3_linear_2_104)"
          strokeWidth="2"
        />
        <path
          opacity="0.5"
          d="M1439.76 256.252C1439.76 227.835 1419.96 200.548 1383.61 175.556C1347.3 150.585 1294.7 128.057 1229.6 109.122C1099.42 71.2551 919.518 47.8203 720.763 47.8203C522.007 47.8203 342.106 71.2551 211.925 109.122C146.828 128.057 94.2207 150.585 57.9104 175.556C21.5686 200.548 1.76257 227.835 1.76257 256.252C1.76257 284.669 21.5686 311.956 57.9104 336.948C94.2207 361.919 146.828 384.447 211.925 403.382C342.106 441.249 522.007 464.684 720.763 464.684C919.518 464.684 1099.42 441.249 1229.6 403.382C1294.7 384.447 1347.3 361.919 1383.61 336.948C1419.96 311.956 1439.76 284.669 1439.76 256.252Z"
          stroke="url(#paint4_linear_2_104)"
          strokeWidth="2"
        />
        <path
          id="bg1p2"
          opacity="0.5"
          d="M1439.76 197.385C1439.76 188.311 1434.93 179.324 1425.45 170.511C1415.97 161.698 1401.94 153.15 1383.77 144.978C1347.44 128.637 1294.81 113.896 1229.69 101.508C1099.48 76.7343 919.542 61.4051 720.763 61.4051C521.983 61.4051 342.049 76.7343 211.833 101.508C146.716 113.896 94.0837 128.637 57.754 144.978C39.5858 153.15 25.5501 161.698 16.0713 170.511C6.59155 179.324 1.76257 188.311 1.76257 197.385C1.76257 206.458 6.59155 215.445 16.0713 224.259C25.5501 233.071 39.5858 241.619 57.754 249.791C94.0837 266.132 146.716 280.873 211.833 293.262C342.049 318.035 521.983 333.364 720.763 333.364C919.542 333.364 1099.48 318.035 1229.69 293.262C1294.81 280.873 1347.44 266.132 1383.77 249.791C1401.94 241.619 1415.97 233.071 1425.45 224.259C1434.93 215.445 1439.76 206.458 1439.76 197.385Z"
          stroke="url(#paint5_linear_2_104)"
          strokeWidth="2"
        />
        <path
          id="bg1p1"
          opacity="0.5"
          d="M1439.76 103.806C1439.76 98.4783 1435.2 92.9552 1425.63 87.3871C1416.15 81.8673 1402.1 76.5094 1383.91 71.3876C1347.55 61.1486 1294.89 51.9161 1229.76 44.1586C1099.52 28.6454 919.558 19.0475 720.763 19.0475C521.967 19.0475 342.008 28.6454 211.764 44.1586C146.635 51.9161 93.9744 61.1486 57.6148 71.3876C39.4273 76.5094 25.3765 81.8673 15.8935 87.3871C6.32756 92.9552 1.76257 98.4783 1.76257 103.806C1.76257 109.134 6.32756 114.657 15.8935 120.225C25.3765 125.745 39.4273 131.103 57.6148 136.225C93.9744 146.464 146.635 155.696 211.764 163.454C342.008 178.967 521.967 188.565 720.763 188.565C919.558 188.565 1099.52 178.967 1229.76 163.454C1294.89 155.696 1347.55 146.464 1383.91 136.225C1402.1 131.103 1416.15 125.745 1425.63 120.225C1435.2 114.657 1439.76 109.134 1439.76 103.806Z"
          stroke="url(#paint6_linear_2_104)"
          strokeWidth="2"
        />
        <path
          opacity="0.5"
          d="M1439.76 37.4897C1439.76 37.1928 1439.62 36.7872 1439.11 36.2611C1438.59 35.7318 1437.77 35.1564 1436.59 34.5518C1434.23 33.3445 1430.66 32.1261 1425.89 30.9134C1416.36 28.4921 1402.27 26.1471 1384.06 23.9089C1347.66 19.4339 1294.97 15.4015 1229.83 12.0142C1099.56 5.24007 919.573 1.04964 720.763 1.04964C521.952 1.04964 341.97 5.24007 211.698 12.0142C146.558 15.4015 93.8648 19.4339 57.4658 23.9089C39.2601 26.1471 25.1651 28.4921 15.6367 30.9134C10.8645 32.1261 7.29341 33.3445 4.93562 34.5518C3.75488 35.1564 2.93144 35.7318 2.4155 36.2611C1.90262 36.7872 1.76257 37.1928 1.76257 37.4897C1.76257 37.7866 1.90262 38.1922 2.4155 38.7184C2.93144 39.2476 3.75488 39.8231 4.93562 40.4277C7.29341 41.6349 10.8645 42.8533 15.6367 44.066C25.1651 46.4874 39.2601 48.8323 57.4658 51.0706C93.8648 55.5455 146.558 59.5779 211.698 62.9652C341.97 69.7394 521.952 73.9298 720.763 73.9298C919.573 73.9298 1099.56 69.7394 1229.83 62.9652C1294.97 59.5779 1347.66 55.5455 1384.06 51.0706C1402.27 48.8323 1416.36 46.4874 1425.89 44.066C1430.66 42.8533 1434.23 41.6349 1436.59 40.4277C1437.77 39.8231 1438.59 39.2476 1439.11 38.7184C1439.62 38.1922 1439.76 37.7866 1439.76 37.4897Z"
          stroke="url(#paint7_linear_2_104)"
          strokeWidth="2"
        />
        <path
          id="bg1p3"
          d="M1439.76 518.754C1439.76 406.565 1359.53 304.797 1229.39 231.02C1099.27 157.26 919.445 111.607 720.763 111.607C522.081 111.607 342.257 157.26 212.139 231.02C81.9909 304.797 1.76257 406.565 1.76257 518.754C1.76257 630.943 81.9909 732.71 212.139 806.487C342.257 880.247 522.081 925.901 720.763 925.901C919.445 925.901 1099.27 880.247 1229.39 806.487C1359.53 732.71 1439.76 630.943 1439.76 518.754Z"
          stroke="url(#paint8_linear_2_104)"
          strokeWidth="2"
        />

        <circle id="bg1c0" opacity="0.3" r="4" fill="#C4C4C4" />
        <circle id="bg1c1" r="6" fill="#C4C4C4" />
        <circle id="bg1c2" opacity="0.8" r="6" fill="#C4C4C4" />
        <circle id="bg1c3" opacity="0.4" r="4" fill="#C4C4C4" />
        <circle id="bg1c4" r="4" fill="#C4C4C4" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2_104"
          x1="720"
          y1="-239.579"
          x2="720"
          y2="234.948"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4C4C4" stopOpacity="0.2" />
          <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2_104"
          x1="720.763"
          y1="807.617"
          x2="720.763"
          y2="155.954"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2_104"
          x1="720.763"
          y1="697.186"
          x2="720.763"
          y2="173.547"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2_104"
          x1="720.763"
          y1="564.888"
          x2="720.763"
          y2="18.0475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2_104"
          x1="720.763"
          y1="465.684"
          x2="720.763"
          y2="46.8203"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2_104"
          x1="720.763"
          y1="334.364"
          x2="720.763"
          y2="60.4051"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2_104"
          x1="720.763"
          y1="189.565"
          x2="720.763"
          y2="18.0475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2_104"
          x1="720.763"
          y1="74.9298"
          x2="720.763"
          y2="0.0496368"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_2_104"
          x1="720.763"
          y1="926.901"
          x2="720.763"
          y2="110.607"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
