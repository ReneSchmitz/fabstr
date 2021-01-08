import styled, { keyframes } from "styled-components/macro";

const Container = styled.div`
  position: fixed;
  top: 10%;
  display: grid;
  @media (max-device-height: 800px) {
    transform: scale(0.8);
  }
`;

const HeadAnimation = keyframes`
from {
   transform: translateY(5%) ;
   transform-origin: top;
}
to {
   transform: translateY(-6%) scale(1.2);
   transform-origin: top;
}
`;

const ArmsAnimation = keyframes`
from {
   transform: translateY(0%) ;
   transform-origin: top;
}
to {
   transform: translateY(-11%) scale(1.155);
   transform-origin: top;
}
`;

const Image = styled.div`
  * {
    margin: 0;
    padding: 0;
    width: 15em;
    box-sizing: border-box;
  }

  body {
    text-align: center;
  }

  #Head {
    animation-name: ${HeadAnimation};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }

  #Arms {
    animation-name: ${ArmsAnimation};
    animation-duration: 3.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }
`;

export default function Loading() {
  return (
    <Container>
      <Image>
        <svg
          width="432"
          height="401"
          viewBox="-64 0 552 641"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="breathing">
            <g id="FeetLeft">
              <path
                id="Vector"
                d="M367.87 525.347C367.87 573.017 347.956 613.906 319.588 631.391C314.838 634.354 309.706 636.653 304.334 638.227C294.25 641.194 283.53 641.225 273.429 638.317C267.387 636.577 261.644 633.932 256.394 630.473C233.746 615.723 216.746 585.933 211.368 549.848C208.969 533.608 208.969 517.104 211.368 500.865C219.085 449.039 250.781 410.219 288.719 410.219C332.432 410.219 367.87 461.757 367.87 525.347Z"
                fill="#605E79"
              />
              <path
                id="Vector_2"
                d="M273.429 569.42V638.317C267.387 636.577 261.644 633.932 256.394 630.473L273.429 569.42Z"
                fill="#313042"
              />
              <path
                id="Vector_3"
                d="M319.588 631.391C314.838 634.354 309.706 636.653 304.334 638.227L312.518 579.152L319.588 631.391Z"
                fill="#313042"
              />
            </g>
            <g id="FeetRight">
              <path
                id="Vector_4"
                d="M213.167 525.347C213.177 533.547 212.576 541.737 211.368 549.848C205.359 590.143 184.852 622.594 158.175 635.007C153.114 637.391 147.733 639.027 142.201 639.864C139.492 640.276 136.756 640.48 134.016 640.475C126.275 640.465 118.619 638.855 111.53 635.744C105.837 633.281 100.515 630.036 95.7182 626.102C71.3613 606.495 54.8657 568.718 54.8657 525.347C54.8657 461.757 90.3036 410.219 134.016 410.219C171.955 410.219 203.651 449.039 211.368 500.865C212.576 508.969 213.177 517.153 213.167 525.347Z"
                fill="#605E79"
              />
              <path
                id="Vector_5"
                d="M111.53 569.42V635.744C105.837 633.281 100.515 630.036 95.7182 626.102L111.53 569.42Z"
                fill="#313042"
              />
              <path
                id="Vector_6"
                d="M158.175 635.007C153.114 637.391 147.733 639.027 142.201 639.864L150.62 579.152L158.175 635.007Z"
                fill="#313042"
              />
            </g>
            <path
              id="Arms"
              d="M215.865 583.811C335.084 583.811 431.73 487.165 431.73 367.946C431.73 248.727 335.084 152.081 215.865 152.081C96.646 152.081 0 248.727 0 367.946C0 487.165 96.646 583.811 215.865 583.811Z"
              fill="#313042"
            />
            <g id="Body">
              <path
                id="Vector_7"
                d="M331.892 391.331C331.892 398.293 331.623 405.146 331.083 411.892C331.011 412.989 330.921 414.087 330.813 415.184C323.294 498.292 276.955 562.872 220.092 566.541H220.074C219.445 566.595 218.815 566.631 218.185 566.649C217.106 566.703 216.045 566.721 214.966 566.721C211.161 566.726 207.361 566.45 203.597 565.894C203.381 565.858 203.165 565.822 202.949 565.786C147.67 557.331 103.777 491.115 98.5783 407.989C98.5424 407.413 98.5064 406.837 98.4884 406.262C98.1826 401.333 98.0327 396.356 98.0387 391.331C98.0387 294.462 150.386 215.941 214.966 215.941C279.545 215.941 331.892 294.462 331.892 391.331Z"
                fill="#605E79"
              />
              <path
                id="Vector_8"
                opacity="0.1"
                d="M213.167 509.157C213.177 517.358 212.576 525.547 211.368 533.658C209.773 544.649 206.949 555.425 202.949 565.786C147.67 557.331 103.777 491.115 98.5783 407.989C98.5424 407.413 98.5064 406.837 98.4884 406.262C109.174 398.437 121.244 394.029 134.016 394.029C171.954 394.029 203.651 432.849 211.368 484.675C212.576 492.779 213.177 500.963 213.167 509.157V509.157Z"
                fill="black"
              />
              <path
                id="Vector_9"
                opacity="0.1"
                d="M331.083 411.892C331.011 412.989 330.921 414.087 330.813 415.184C323.294 498.292 276.955 562.872 220.092 566.541H220.074C215.928 555.948 213.007 544.915 211.368 533.658C208.969 517.418 208.969 500.914 211.368 484.675C219.085 432.849 250.781 394.029 288.719 394.029C304.298 394.029 318.833 400.577 331.083 411.892Z"
                fill="black"
              />
            </g>
            <g id="Head">
              <path
                id="Vector_10"
                d="M211.368 323.873C292.834 323.873 358.876 257.832 358.876 176.365C358.876 94.8992 292.834 28.8578 211.368 28.8578C129.902 28.8578 63.86 94.8992 63.86 176.365C63.86 257.832 129.902 323.873 211.368 323.873Z"
                fill="#605E79"
              />
              <path
                id="Vector_11"
                d="M211.368 305.884C228.257 305.884 241.949 302.663 241.949 298.689C241.949 294.715 228.257 291.493 211.368 291.493C194.478 291.493 180.787 294.715 180.787 298.689C180.787 302.663 194.478 305.884 211.368 305.884Z"
                fill="#313042"
              />
              <path
                id="Vector_12"
                d="M164.597 224.935C171.551 224.935 177.189 219.297 177.189 212.343C177.189 205.389 171.551 199.751 164.597 199.751C157.643 199.751 152.005 205.389 152.005 212.343C152.005 219.297 157.643 224.935 164.597 224.935Z"
                fill="#313042"
              />
              <path
                id="Vector_13"
                d="M258.139 224.935C265.093 224.935 270.731 219.297 270.731 212.343C270.731 205.389 265.093 199.751 258.139 199.751C251.184 199.751 245.546 205.389 245.546 212.343C245.546 219.297 251.184 224.935 258.139 224.935Z"
                fill="#313042"
              />
              <path
                id="Vector_14"
                d="M211.368 206.946C166.661 206.946 130.418 237.31 130.418 268.108C130.418 286.169 142.893 302.216 162.218 312.407C169.413 299.172 188.697 289.695 211.368 289.695C234.038 289.695 253.323 299.172 260.517 312.407C279.843 302.216 292.317 286.169 292.317 268.108C292.317 237.31 256.075 206.946 211.368 206.946Z"
                fill="#98E6B9"
              />
              <path
                id="Vector_15"
                d="M207.77 289.695C219.692 289.695 229.357 281.641 229.357 271.706C229.357 261.771 219.692 253.717 207.77 253.717C195.848 253.717 186.184 261.771 186.184 271.706C186.184 281.641 195.848 289.695 207.77 289.695Z"
                fill="#313042"
              />
              <path
                id="Vector_16"
                d="M64.5 165C81.3447 165 95 148.435 95 128C95 107.565 81.3447 91 64.5 91C47.6553 91 34 107.565 34 128C34 148.435 47.6553 165 64.5 165Z"
                fill="#98E6B9"
              />
              <path
                id="Vector_17"
                d="M349 165C366.121 165 380 148.435 380 128C380 107.565 366.121 91 349 91C331.879 91 318 107.565 318 128C318 148.435 331.879 165 349 165Z"
                fill="#98E6B9"
              />
              <path
                id="Vector_18"
                d="M244.647 9.9696C240.581 9.96671 236.636 11.3482 233.46 13.8865C230.786 9.50408 226.916 5.97667 222.305 3.71948C217.694 1.46229 212.534 0.56927 207.433 1.14553C202.332 1.72179 197.501 3.74334 193.51 6.97225C189.519 10.2012 186.533 14.503 184.904 19.3715C182.995 15.8567 179.969 13.0785 176.304 11.4761C172.639 9.87374 168.544 9.53854 164.668 10.5236C160.791 11.5086 157.353 13.7576 154.897 16.9151C152.442 20.0726 151.109 23.9584 151.109 27.9583C151.109 31.9583 152.442 35.8441 154.897 39.0016C157.353 42.1591 160.791 44.4081 164.668 45.3931C168.544 46.3781 172.639 46.0429 176.304 44.4405C179.969 42.8382 182.995 40.06 184.904 36.5452C186.533 41.4136 189.519 45.7155 193.51 48.9444C197.501 52.1733 202.332 54.1949 207.433 54.7712C212.534 55.3474 217.694 54.4544 222.305 52.1972C226.916 49.94 230.786 46.4126 233.46 42.0302C235.707 43.8171 238.35 45.0399 241.167 45.5964C243.983 46.1528 246.892 46.0267 249.651 45.2287C252.409 44.4306 254.936 42.9837 257.02 41.0091C259.104 39.0344 260.686 36.5894 261.632 33.8784C262.578 31.1675 262.861 28.2695 262.457 25.4267C262.054 22.584 260.976 19.8791 259.313 17.5384C257.65 15.1976 255.451 13.2891 252.899 11.9723C250.348 10.6555 247.518 9.96881 244.647 9.9696V9.9696Z"
                fill="#605E79"
              />
              <path
                id="Vector_19"
                d="M167.865 213.975C170.074 213.975 171.865 212.184 171.865 209.975C171.865 207.766 170.074 205.975 167.865 205.975C165.656 205.975 163.865 207.766 163.865 209.975C163.865 212.184 165.656 213.975 167.865 213.975Z"
                fill="white"
              />
              <path
                id="Vector_20"
                d="M261.865 213.975C264.074 213.975 265.865 212.184 265.865 209.975C265.865 207.766 264.074 205.975 261.865 205.975C259.656 205.975 257.865 207.766 257.865 209.975C257.865 212.184 259.656 213.975 261.865 213.975Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
      </Image>
    </Container>
  );
}