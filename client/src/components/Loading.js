import styled, { keyframes } from "styled-components/macro";

const LeafAnimation = keyframes`
from {
   transform: rotateZ(-4deg);
   transform-origin: bottom ;
}
to {
   transform: rotateZ(6deg);
   transform-origin: bottom right;
}
`;

const Image = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    text-align: center;
  }
  #plant {
    animation-name: ${LeafAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

export default function Loading() {
  return (
    <Image>
      <svg
        width="790"
        height="314"
        viewBox="0 0 790 314"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="undraw_annotation_7das 1">
          <g id="plant">
            <path
              id="Vector"
              d="M670.803 266.379C670.803 266.379 694.814 185.593 603.505 139.598L670.803 266.379Z"
              fill="#CFD5E1"
            />
            <path
              id="Vector_2"
              d="M673.796 266.81C673.796 266.81 683.313 187.079 789.655 182.081L673.796 266.81Z"
              fill="#CFD5E1"
            />
          </g>
          <g id="men">
            <path
              id="Vector_3"
              d="M742.511 283.792C728.615 309.668 -0.937568 307.496 0.167942 283.79C14.0644 257.916 743.616 260.088 742.511 283.792Z"
              fill="#CFD5E1"
            />
            <path
              id="Vector_4"
              d="M265.823 254.05L241.004 252.396L249.277 289.624L277.405 278.042L265.823 254.05Z"
              fill="#FFD2C4"
            />
            <path
              id="Vector_5"
              d="M493.332 184.556L435.421 128.3L402.329 153.946L336.971 232.54L344.417 244.122L423.839 190.348L477.613 260.669L528.906 235.022L493.332 184.556Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_6"
              opacity="0.1"
              d="M493.332 184.556L435.421 128.3L402.329 153.946L336.971 232.54L344.417 244.122L423.839 190.348L477.613 260.669L528.906 235.022L493.332 184.556Z"
              fill="black"
            />
            <path
              id="Vector_7"
              d="M498.296 221.785L490.85 227.576L430.457 206.894L416.393 201.103L388.264 206.894C388.264 206.894 388.264 183.729 414.738 184.556L442.039 191.175L474.304 193.657L498.296 221.785Z"
              fill="#FFD2C4"
            />
            <path
              id="Vector_8"
              d="M552.071 283.006L533.87 294.588H512.36L412.256 257.359L265.823 283.833L261.686 252.396L395.71 193.657L513.188 232.54L552.071 283.006Z"
              fill="#313042"
            />
            <path
              id="Vector_9"
              d="M434.594 135.745L422.184 138.227L419.48 135.072C417.339 132.575 415.983 129.501 415.581 126.236C415.179 122.971 415.749 119.66 417.22 116.717V116.717L451.967 71.2155C451.967 71.2155 461.895 48.8782 477.614 57.9786C493.332 67.079 464.377 81.9705 464.377 81.9705L447.003 109.272L448.658 123.336L434.594 135.745Z"
              fill="#FFD2C4"
            />
            <path
              id="Vector_10"
              d="M513.188 81.9704C531.007 81.9704 545.453 67.5249 545.453 49.7055C545.453 31.886 531.007 17.4405 513.188 17.4405C495.368 17.4405 480.923 31.886 480.923 49.7055C480.923 67.5249 495.368 81.9704 513.188 81.9704Z"
              fill="#FFD2C4"
            />
            <path
              id="Vector_11"
              d="M498.71 73.2837L513.601 108.858L549.176 93.9664C549.176 93.9664 537.593 65.8379 537.593 65.0106C537.593 64.1833 498.71 73.2837 498.71 73.2837Z"
              fill="#FFD2C4"
            />
            <path
              id="Vector_12"
              d="M596.671 178.525C596.671 197.998 593.602 217.349 587.579 235.866L585.163 243.295L573.581 296.243L561.171 299.552L552.071 287.97L533.87 274.733L520.633 253.223L509.283 234.311L505.742 228.404L493.332 166.356L446.176 139.882L430.457 137.4L433.766 128.3L447.83 109.272L461.895 107.617L466.031 104.308L469.34 105.962L482.577 98.5165L486.714 100.171L510.904 102.421L525.597 99.3439L546.727 88.0015L555.38 89.4162L585.163 114.235C592.777 134.815 596.674 156.583 596.671 178.525V178.525Z"
              fill="#BDC8DD"
            />
            <path
              id="Vector_13"
              opacity="0.1"
              d="M587.645 171.32L556.208 192.002L509.283 234.311L505.742 228.404L495.814 178.765H498.296L523.943 131.609L587.645 171.32Z"
              fill="#434141"
            />
            <path
              id="Vector_14"
              d="M523.943 126.645L498.296 173.801H489.196L483.405 190.348L470.168 193.657L505.742 232.54L556.208 187.038L587.645 166.356L523.943 126.645Z"
              fill="#BDC8DD"
            />
            <path
              id="Vector_15"
              d="M488.092 25.7151L484.596 27.0601C484.059 26.696 483.599 26.2283 483.244 25.6844C482.89 25.1404 482.647 24.5311 482.531 23.8923C482.415 23.2534 482.427 22.5978 482.568 21.9638C482.708 21.3298 482.974 20.7302 483.349 20.2001L476.889 19.8978C481.036 14.3746 486.308 9.795 492.357 6.46196C498.407 3.12892 505.095 1.11842 511.979 0.563521C518.864 0.00862001 525.787 0.921957 532.293 3.24309C538.798 5.56422 544.736 9.24023 549.714 14.0279C550.008 13.0149 553.214 14.9858 554.523 16.9842C554.963 15.3358 557.969 23.3041 559.032 28.9366C559.525 27.0612 561.418 30.0888 559.759 32.9939C560.81 32.8404 561.285 35.5285 560.471 37.0261C561.621 36.4861 561.427 39.695 560.181 41.8394C561.821 41.6936 547.245 64.3151 541.344 77.5354C539.63 69.6619 537.703 61.3711 532.178 55.5062C531.239 54.5093 530.21 53.6013 529.184 52.695L523.63 47.7927C517.172 42.0923 511.297 35.0568 502.694 32.9263C496.782 31.4621 493.044 31.1316 496.266 24.4695C493.355 25.6842 490.636 27.4908 487.699 28.619C487.739 27.6882 488.149 26.6465 488.092 25.7151Z"
              fill="#313042"
            />
            <path
              id="Vector_16"
              d="M529.32 59.2195C532.518 59.2195 535.111 56.6267 535.111 53.4283C535.111 50.23 532.518 47.6372 529.32 47.6372C526.122 47.6372 523.529 50.23 523.529 53.4283C523.529 56.6267 526.122 59.2195 529.32 59.2195Z"
              fill="#FFD2C3"
            />
          </g>
          <path
            id="shoe"
            d="M248.622 266.861C248.622 266.861 256.032 254.302 252.903 252.836C249.773 251.37 236.481 245.524 236.481 245.524L216.989 239.065C216.989 239.065 188.863 197.264 188.245 233.614C187.628 269.965 208.725 278.703 208.725 278.703C208.725 278.703 227.54 319.196 238.198 312.739C248.857 306.282 259.522 284.363 259.522 284.363C259.522 284.363 240.302 274.031 248.622 266.861Z"
            fill="#313042"
          />
        </g>
      </svg>
    </Image>
  );
}
