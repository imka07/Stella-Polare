<template>
  <section class="w-full mt-[94px]" id="products">
    <h2
      class="text-2xl md:text-3xl xl:text-4xl font-medium mx-5 bg-[linear-gradient(to_right,_rgba(153,172,190,1)_0%,_rgba(224,240,255,1)_37%,_rgba(153,172,190,1)_63%,_rgba(50,61,72,1)_100%)] bg-clip-text text-transparent"
    >
      Наша продукция
    </h2>
    <div class="products_nav_container overflow-x-scroll w-full">
      <ul
        class="products_nav flex h-fit py-1 items-center border border-solid border-white/10 bg-white/5 mx-5 rounded-[0.5rem] mt-7 xl:mt-15 w-fit"
      >
        <li
          class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
          :class="{ active: activeTab === 'Apple_content' }"
        >
          <button
            class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
            type="button"
            @click="setActive('Apple_content', $event)"
          >
            <div
              class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
            >
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_37_85)">
                  <path
                    d="M14.6914 19.3724C13.7816 20.2505 12.7883 20.1118 11.8321 19.6959C10.8202 19.2707 9.89191 19.2522 8.82433 19.6959C7.48754 20.269 6.78201 20.1026 5.98365 19.3724C1.45342 14.723 2.12182 7.64266 7.26474 7.38385C8.51798 7.44855 9.39061 8.06785 10.124 8.12331C11.2194 7.90147 12.2684 7.26368 13.4381 7.34687C14.8399 7.45779 15.8982 8.01239 16.5944 9.01066C13.698 10.7392 14.385 14.5381 17.04 15.6011C16.5109 16.9876 15.8239 18.3649 14.6821 19.3816L14.6914 19.3724ZM10.0312 7.32839C9.89191 5.26714 11.5722 3.56637 13.5031 3.39999C13.7723 5.78476 11.3308 7.55947 10.0312 7.32839Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_37_85"
                    x="0.234096"
                    y="0.674068"
                    width="19.5319"
                    height="22.0919"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1.36296" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_37_85"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_37_85"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none">Apple</span>
          </button>
        </li>
        
        <li
          class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
          :class="{ active: activeTab === 'Dyson_content' }"
        >
          <button
            class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none w-full"
            type="button"
            @click="setActive('Dyson_content', $event)"

          >
            <div
              class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.38442 12.2108C3.38442 12.8171 2.89974 13.3022 2.29388 13.3022C1.68803 13.3022 1.20334 12.8171 1.20334 12.2108C1.20334 11.6044 1.68803 11.1193 2.29388 11.1193H3.38442V12.2108ZM4.59613 7.72365H3.38442V9.93082H2.29388C1.0337 9.93082 0.0158691 10.9495 0.0158691 12.2108C0.0158691 13.472 1.0337 14.4907 2.29388 14.4907C3.55406 14.4907 4.5719 13.472 4.5719 12.2108V9.93082L4.59613 7.72365Z"
                  fill="white"
                />
                <path
                  d="M16.6408 13.3021C17.2467 13.3021 17.7313 12.817 17.7313 12.2107C17.7313 11.6043 17.2467 11.1192 16.6408 11.1192C16.0349 11.1192 15.5503 11.6043 15.5503 12.2107C15.5745 12.817 16.0592 13.3021 16.6408 13.3021ZM14.387 12.2107C14.387 10.9494 15.4049 9.93074 16.665 9.93074C17.9252 9.93074 18.9431 10.9494 18.9431 12.2107C18.9431 13.4719 17.9252 14.4906 16.665 14.4906C15.4049 14.4906 14.387 13.4719 14.387 12.2107Z"
                  fill="white"
                />
                <path
                  d="M22.7479 12.2107C22.7479 11.6286 22.2633 11.1435 21.6816 11.1435C21.1 11.1435 20.6153 11.6286 20.6153 12.2107V14.3936H19.4279V12.2107C19.4279 10.9494 20.4457 9.93074 21.7059 9.93074C22.966 9.93074 23.9839 10.9494 23.9839 12.2107V14.3936H22.7964C22.7479 14.3936 22.7479 12.5017 22.7479 12.2107Z"
                  fill="white"
                />
                <path
                  d="M11.6006 11.4345C11.431 11.3132 11.4795 11.1192 11.7703 11.0464C12.1338 10.9494 12.7639 11.0222 13.297 11.2647L13.8544 10.4886C13.6121 10.2945 13.0789 10.0277 12.3034 9.97923C12.3034 9.97923 10.9948 9.80945 10.4616 10.8039C10.4616 10.8039 10.0012 11.7256 10.9221 12.3077C11.4795 12.6472 12.4488 12.7928 12.7639 12.9383C13.0062 13.0838 12.9335 13.3506 12.57 13.4234C11.9399 13.5689 11.116 13.2051 10.8494 13.0111L10.2678 13.8115C10.6555 14.1025 11.1402 14.3693 11.9157 14.4906C11.9157 14.4906 13.1516 14.7089 13.8302 13.86C13.9514 13.7144 14.5087 12.6715 13.394 12.0651C12.8124 11.7498 11.8915 11.6043 11.6006 11.4345Z"
                  fill="white"
                />
                <path
                  d="M6.02666 15.2668C6.07513 15.2911 6.63251 15.6792 7.16566 15.6792C8.47431 15.7034 8.54701 14.3452 8.54701 14.0298C8.30467 14.2967 7.79575 14.4664 7.48071 14.4664C6.22053 14.4664 5.22693 13.4962 5.22693 12.235V10.0278H6.4144V12.235C6.4144 12.8171 6.89909 13.3022 7.48071 13.3022C8.06233 13.3022 8.54701 12.8171 8.54701 12.235V10.0278H9.73449V12.235C9.73449 14.1996 9.83142 16.2128 7.91692 16.6736C6.48711 17.0132 5.46927 16.1158 5.39657 16.0672L6.02666 15.2668Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none">Dyson</span>
          </button>
        </li>
        <li
          class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
          :class="{ active: activeTab === 'Sony_content' }"
        >
          <button
            class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
            type="button"
            @click="setActive('Sony_content', $event)"
          >
            <div
              class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
            >
              <svg
                width="24"
                height="4"
                viewBox="0 0 24 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.55 0C9.471 0 10.208 0.217804 10.771 0.702652C11.156 1.03314 11.371 1.50379 11.365 1.99716C11.3641 2.24066 11.3109 2.48145 11.2088 2.70494C11.1067 2.92843 10.9578 3.12997 10.771 3.29735C10.244 3.75568 9.423 4 8.551 4C7.679 4 6.871 3.75568 6.336 3.29735C6.1427 3.13441 5.98877 2.93393 5.88471 2.70955C5.78065 2.48517 5.72891 2.24219 5.733 1.99716C5.733 1.50663 5.951 1.03599 6.336 0.702652C6.836 0.272728 7.72 0 8.55 0ZM8.553 3.47538C9.014 3.47538 9.441 3.32292 9.741 3.04167C10.041 2.75758 10.174 2.41667 10.174 1.99716C10.174 1.59564 10.026 1.2197 9.741 0.952652C9.447 0.678031 9.008 0.522727 8.553 0.522727C8.098 0.522727 7.66 0.677084 7.363 0.952652C7.078 1.2197 6.929 1.59564 6.929 1.99716C6.92291 2.38584 7.07885 2.76113 7.363 3.04167C7.66 3.32008 8.096 3.47538 8.553 3.47538ZM3.712 1.61174C3.872 1.65025 4.02734 1.7017 4.178 1.7661C4.31765 1.82726 4.4457 1.90981 4.557 2.01042C4.754 2.20549 4.866 2.46686 4.863 2.73674C4.86515 2.87907 4.83197 3.01988 4.76614 3.14785C4.70031 3.27581 4.60367 3.38735 4.484 3.47348C4.27188 3.62514 4.03129 3.73729 3.775 3.80398C3.38898 3.91912 2.98562 3.9735 2.581 3.96496C2.229 3.96496 2.035 3.92614 1.768 3.87311L1.691 3.85795C1.39675 3.79645 1.10943 3.70829 0.833002 3.5947C0.820641 3.58676 0.805924 3.58278 0.791002 3.58333C0.769073 3.58383 0.748217 3.59243 0.732894 3.60729C0.717571 3.62215 0.708996 3.64211 0.709002 3.66288V3.85511H0.121002V2.45549H0.645002C0.648467 2.59734 0.69613 2.73505 0.782002 2.85133C0.994002 3.09754 1.222 3.19223 1.439 3.26799C1.806 3.38163 2.191 3.44223 2.575 3.4536C3.128 3.4536 3.451 3.3267 3.521 3.29924L3.53 3.29545L3.536 3.29356C3.598 3.27178 3.848 3.18561 3.848 2.92235C3.848 2.66288 3.614 2.60606 3.461 2.56913L3.439 2.56439C3.269 2.52083 2.877 2.48106 2.449 2.43845L2.297 2.4233C1.89567 2.38441 1.49629 2.32912 1.1 2.25758C0.602002 2.15341 0.406002 1.98106 0.284002 1.87405L0.276002 1.86648C0.0981552 1.6869 -0.000568722 1.44979 2.46475e-06 1.2036C2.46475e-06 0.733902 0.340002 0.449811 0.758002 0.275568C1.21273 0.0917336 1.70258 -0.00142658 2.197 0.0018947C3.017 0.00473561 3.684 0.257577 3.924 0.375001C4.021 0.424243 4.069 0.363637 4.069 0.318182V0.177084H4.596V1.39678H4.124C4.08203 1.21563 3.97881 1.05239 3.83 0.931818C3.73944 0.863009 3.63955 0.806 3.533 0.762311C3.13748 0.603742 2.71147 0.524736 2.282 0.530303C1.839 0.530303 1.415 0.610796 1.202 0.733902C1.06934 0.812185 1.00267 0.908775 1.002 1.02367C1.002 1.1875 1.148 1.25284 1.222 1.27273C1.418 1.32955 1.854 1.37027 2.193 1.40246L2.397 1.42235C2.724 1.4536 3.409 1.53977 3.712 1.61174ZM21.879 0.667614V0.214016H24V0.659091H23.524C23.352 0.659091 23.282 0.690341 23.152 0.828598L21.725 2.37216C21.7101 2.39122 21.7033 2.41488 21.706 2.43845V3.1411C21.7082 3.17379 21.7122 3.20634 21.718 3.23864C21.7265 3.25923 21.74 3.27766 21.7573 3.29246C21.7747 3.30726 21.7955 3.31801 21.818 3.32386C21.8611 3.32969 21.9045 3.33286 21.948 3.33333H22.434V3.77841H19.86V3.33333H20.32C20.3635 3.33286 20.4069 3.32969 20.45 3.32386C20.4729 3.31787 20.4942 3.30712 20.5122 3.29237C20.5302 3.27763 20.5444 3.25927 20.554 3.23864C20.5587 3.20723 20.5617 3.17563 20.563 3.14394V2.44129C20.563 2.41761 20.563 2.41761 20.53 2.38068L19.119 0.863637C19.043 0.788826 18.913 0.668561 18.713 0.668561H18.255V0.223485H20.843V0.668561H20.531C20.461 0.668561 20.413 0.734849 20.473 0.806818L21.352 1.80208C21.361 1.81345 21.367 1.81345 21.379 1.80492C21.391 1.7964 22.273 0.815341 22.279 0.806818C22.2864 0.797808 22.2918 0.787482 22.2949 0.776451C22.298 0.76542 22.2988 0.753909 22.2971 0.742603C22.2954 0.731297 22.2914 0.720426 22.2852 0.710635C22.279 0.700844 22.2707 0.692333 22.261 0.685607C22.2434 0.673987 22.2224 0.668011 22.201 0.668561L21.879 0.667614ZM15.595 0.664773H16.08C16.301 0.664773 16.34 0.745265 16.343 0.940341L16.371 2.4233L13.789 0.222538H11.944V0.667614H12.356C12.653 0.667614 12.674 0.822917 12.674 0.961174V3.05682C12.674 3.17803 12.675 3.33617 12.492 3.33617H11.986V3.77841H14.15V3.33333H13.622C13.41 3.33333 13.402 3.24148 13.398 3.0464V1.2642L16.371 3.77462H17.128L17.088 0.9375C17.092 0.731061 17.107 0.661932 17.331 0.661932H17.804V0.216856H15.595V0.664773Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none">Sony</span>
          </button>
        </li>
        <li
          class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
          :class="{ active: activeTab === 'Xiaomi_content' }"
        >
          <button
            class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
            type="button"
            @click="setActive('Xiaomi_content', $event)"
          >
            <div
              class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
            >
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6438 8.74959C11.5943 8.74927 11.547 8.73071 11.5121 8.69794C11.4771 8.66516 11.4573 8.62081 11.457 8.57446V0.17517C11.4573 0.128822 11.4771 0.0844635 11.5121 0.0516898C11.547 0.018916 11.5943 0.000361407 11.6438 3.91621e-05H13.8084C13.8333 -0.000450954 13.858 0.00371081 13.8812 0.0122821C13.9044 0.0208534 13.9255 0.0336626 13.9433 0.0499631C13.9612 0.0662636 13.9754 0.0857294 13.9851 0.107226C13.9948 0.128722 13.9999 0.151819 14 0.17517V8.57446C14 8.67289 13.9134 8.75164 13.8084 8.74959H11.6438ZM8.01406 8.74959C8.01406 8.74959 7.84082 8.70037 7.84082 8.57446V3.41775C7.84614 3.25696 7.81673 3.09683 7.75437 2.94697C7.692 2.79711 7.59797 2.66062 7.47792 2.54569C7.35786 2.43076 7.21427 2.33978 7.05576 2.27819C6.89725 2.21661 6.7271 2.1857 6.55553 2.18732H2.50891C2.27442 2.18732 2.33348 2.35179 2.33348 2.35179V8.57446C2.33348 8.7217 2.15805 8.74959 2.15805 8.74959H0.191613C0.166711 8.75008 0.141954 8.74592 0.118786 8.73735C0.0956171 8.72878 0.0744999 8.71597 0.0566653 8.69967C0.0388307 8.68337 0.0246353 8.6639 0.0149066 8.6424C0.00517796 8.62091 0.000110631 8.59781 0 8.57446V0.17517C0 0.0767357 0.0866196 -0.00201155 0.191613 3.91621e-05H7.69471C8.35266 0.00468186 8.98209 0.252511 9.44627 0.689696C9.91046 1.12688 10.1719 1.71811 10.1739 2.33498L10.1782 8.57487C10.1783 8.59788 10.1735 8.62068 10.1641 8.64195C10.1548 8.66322 10.141 8.68255 10.1237 8.69883C10.1063 8.7151 10.0857 8.728 10.063 8.73678C10.0403 8.74556 10.016 8.75005 9.99144 8.75L8.01406 8.74959ZM3.99019 8.74959C3.94366 8.74959 3.89904 8.73226 3.86614 8.70142C3.83324 8.67057 3.81476 8.62874 3.81476 8.58512V3.66342C3.81476 3.5736 3.89438 3.49896 3.99019 3.49896H6.18893C6.28473 3.50306 6.35735 3.57606 6.35735 3.66342V8.58512C6.35758 8.60661 6.35328 8.62792 6.34468 8.64784C6.33608 8.66776 6.32337 8.68589 6.30726 8.70117C6.29116 8.71646 6.27199 8.72861 6.25085 8.73692C6.22971 8.74523 6.20703 8.74954 6.18411 8.74959H3.99019Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none"
              >Xiaomi</span
            >
          </button>
        </li>
        <li
          class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
          :class="{ active: activeTab === 'Xbox_content' }"
        >
          <button
            class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
            type="button"
            @click="setActive('Xbox_content', $event)"
          >
            <div
              class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 5.788C10.3256 8.1448 11.9648 10.908 13.3344 13.9616C11.8691 15.2766 9.96887 16.0027 8 16C6.03114 16.0027 4.13094 15.2766 2.66561 13.9616C4.03521 10.908 5.6736 8.1448 8 5.788ZM2.80721 1.91441C4.24707 2.68992 5.59732 3.62138 6.8336 4.692C4.52481 7.0392 2.86561 9.7432 1.50001 12.6648C0.522144 11.3062 -0.00271106 9.67394 1.05311e-05 8C-0.00116313 6.84278 0.249289 5.69914 0.734014 4.64833C1.21874 3.59752 1.92614 2.66466 2.80721 1.91441ZM13.1928 1.91441C14.0739 2.66466 14.7813 3.59752 15.266 4.64833C15.7507 5.69914 16.0012 6.84278 16 8C16 9.7408 15.444 11.352 14.5 12.664C13.1344 9.7432 11.4752 7.04 9.1664 4.692C10.4027 3.6214 11.7529 2.68994 13.1928 1.91441ZM8 8.69552e-06C9.34 8.69552e-06 10.6032 0.329608 11.7128 0.912008C10.3914 1.68098 9.14796 2.57666 8 3.58641C6.85204 2.57667 5.60859 1.68099 4.28721 0.912008C5.43242 0.311113 6.70672 -0.00190205 8 8.69552e-06Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none">Xbox</span>
          </button>
        </li>
        <li
          class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
          :class="{ active: activeTab === 'Samsung_content' }"
        >
          <button
            class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
            type="button"
            @click="setActive('Samsung_content', $event)"
          >
            <div
              class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
            >
              <img
                src="../images/SamsungIcon.png"
                alt="Samsung"
                class="w-[25px] h-[25px] object-contain"
                draggable="false"
              />
            </div>
            <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none">Samsung</span>
          </button>
        </li>

        <li
          class="products_nav_item mx-[2px] xl:mx-1 px-2 py-1 xl:py-3 xl:px-4 rounded-[0.375rem] xl:rounded-[0.75rem]"
          :class="{ active: activeTab === 'StellaPolare_content' }"
        >
          <button
            class="xl:py-3 xl:px-4 flex gap-x-3 items-center justify-center bg-none border-none"
            type="button"
            @click="setActive('StellaPolare_content', $event)"
          >
            <div
              class="w-[32px] h-[32px] bg-[#424447] bg-no-repeat bg-center rounded-[9.6px] flex items-center justify-center"
            >
              <img
                src="/logo.png"
                alt="Samsung"
                class="w-[20px] h-[20px] object-contain"
                draggable="false"
              />
            </div>
            <span class="text-xl xl:text-[2rem] font-medium text-white/70 leading-none whitespace-nowrap">Stella Polare</span>
          </button>
        </li>
      </ul>
    </div>

    <ul
      class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
      id="Apple_content"
      v-show="activeTab === 'Apple_content'"
    >
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/iPhone17ProOrange.png"
          alt="Apple iPhone 17 Pro Max 256 GB Orange"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPhone 17 Pro Max<br />256 GB Orange</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >125000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Apple/iPhone17ProMax 256GbDeep BlueSIM+eSIM.png"
          alt="Apple iPhone 17 Pro 256 GB Blue Titanium"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPhone 17 Pro<br />256 GB Deep Blue</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >115000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Apple/iPhone17Pro Max256Gb SilverSIM+eSIM.png"
          alt="Apple iPhone 15 Pro 256 GB Blue Titanium"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPhone 17 Pro<br />256 GB SilverSIM</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >105000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Apple/iPhoneAir256GBSkyBlueeSIM.png"
          alt="Apple iPhone 14 Pro 256 GB Purple Titanium"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPhone 17 Air<br />256 GB Sky Blue</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >95000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Apple/iPhoneAir256GBLightGoldeSIM-Photoroom.png"
          alt="Apple iPhone 13 Pro 256 GB Graphite"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPhone 17 Air<br />256 GB Light Golde</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >85000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Apple/iPhone16ProMax256GbDesertTitaniumSIM+eSIM.png"
          alt="Apple iPhone 12 Pro 256 GB Pacific Blue"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPhone 16 Pro<br />256 GB Desert Titanium</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >75000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Apple/AppleiPhone16ProMax256GbNaturalTitaniumSIM+eSIM.png"
          alt="Apple iPhone 12 Pro 256 GB Pacific Blue"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPhone 16 Pro<br />256 GB Natural Titanium</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >75000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Apple/AppleiPadAir613M2(2024)128GbWi-FiPurple.png"
          alt="Apple iPhone 12 Pro 256 GB Pacific Blue"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPad Air 13 M2 16<br />256 GB Purple</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >75000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Apple/AppleiPadAir613M2(2024)128GbWi-FiBlue.png"
          alt="Apple iPhone 12 Pro 256 GB Pacific Blue"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Apple iPad Air 13 M2 16<br />256 GB Blue</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >75000₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
    </ul>
    <ul
      class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
      id="Dyson_content"
      v-show="activeTab === 'Dyson_content'"
    >
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Dyson/DysonAirstraitHT01PrussianBlueCopper.png"
          alt="Dyson product"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Выпрямитель Dyson Airstrait <br>  HT01<br />Prussian Blue / Copper</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Dyson/DysonAirstraitHT01StrawberryBronzeBlushPink.png"
          alt="Dyson Airstrait HT01 Strawberry Bronze / Blush Pink"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Выпрямитель Dyson Airstrait<br />HT01<br />Strawberry Bronze / Blush Pink</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Dyson/DysonAirwrap_HS05_BlueBlush.png"
          alt="Dyson Airwrap Complete Long HS05 Blue Blush"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Стайлер Dyson Airwrap <br />Complete Long HS05<br /> Blue Blush</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Dyson/DysonAirwrap_HS05_Gold.png"
          alt="Dyson Airwrap Complete Long HS05 Ceramic Pink/Rose Gold"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Стайлер Dyson Airwrap <br />Complete Long HS05<br />Ceramic Pink / Rose Gold</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Dyson/DysonSupersonicHD15BlueBlue.png"
          alt="Фен Dyson Supersonic HD15 Blue/Blue"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Фен Dyson Supersonic<br />HD15 Blue/Blue</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <!-- // -->
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Dyson/DysonSupersonicHD08FuchsiNickel.png"
          alt="Фен Dyson Supersonic HD08 Fuchsia/Nickel"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Фен Dyson Supersonic<br />HD08 Fuchsia/Nickel</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
    </ul>
    <ul
      class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
      id="Sony_content"
      v-show="activeTab === 'Sony_content'"
    >
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/PS/ps5Digital.png"
          alt="Sony PlayStation 5 Slim"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Sony PlayStation 5 Slim<br />1 ТБ</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/PS/ps5Discovod.png"
          alt="Sony PlayStation 5 Slim с дисководом"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Sony PlayStation 5 Slim<br />1 ТБ с дисководом</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/PS/dualSenseBlue.png"
          alt="Sony DualSense Wireless Controller для PlayStation 5, коллекция «Галактика»"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Беспроводной геймпад Sony <br> DualSense для PlayStation 5, <br> коллекция «Галактика»</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/PS/dualSenseWhite.png"
          alt="Sony DualSense Wireless Controller для PlayStation 5, коллекция «Галактика»"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Беспроводной геймпад Sony <br> DualSense для PlayStation 5 <br> белый</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>

      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/PS/dualSenseBlack.png"
          alt="Sony DualSense Wireless Controller для PlayStation 5, коллекция «Галактика»"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Беспроводной геймпад Sony <br> DualSense для PlayStation 5 <br> "Черная полночь»"</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>

    
    </ul>
    <ul
      class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
      id="Xiaomi_content"
      v-show="activeTab === 'Xiaomi_content'"
    >
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Xiaomi/XiaomiPOCOF712ГБ+512ГБWhite.png"
          alt="Xiaomi POCO F7 12ГБ+512ГБ (Белый White)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Xiaomi POCO F7<br />12ГБ + 512ГБ (Белый)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Xiaomi/XiaomiPOCOF712ГБ+512ГБBlack.png"
          alt="Xiaomi POCO F7 12ГБ+512ГБ (Чёрный Black)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Xiaomi POCO F7<br />12ГБ + 512ГБ (Чёрный)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
     
    </ul>
    <ul
      class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
      id="Xbox_content"
      v-show="activeTab === 'Xbox_content'"
    >
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Xbox/xboxX.png"
          alt="Игровая консоль Microsoft Xbox Series X (1ТБ)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Игровая консоль<br />Microsoft Xbox Series X (1ТБ)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Xbox/xboxS.png"
          alt="Игровая консоль Microsoft Xbox Series S (1ТБ)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Игровая консоль<br />Microsoft Xbox Series S (1ТБ)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Xbox/xboxgpblack.png"
          alt="Беспроводной геймпад Microsoft Xbox Wireless Controller (Чёрный)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Беспроводной геймпад<br />Microsoft Xbox <Br></Br> Wireless Controller (Чёрный)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Xbox/xboxgppurple.png"
          alt="Беспроводной геймпад Microsoft Xbox Wireless Controller (Фиолетовый)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Беспроводной геймпад<br />Microsoft Xbox <Br></Br> Wireless Controller (Фиолетовый)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-no-repeat bg-[center_top_22px] bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Xbox/xboxgpwhite.png"
          alt="Беспроводной геймпад Microsoft Xbox Wireless Controller (Белый)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Беспроводной геймпад<br />Microsoft Xbox <Br></Br> Wireless Controller (Белый)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>

    </ul>

    <ul
      class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
      id="Samsung_content"
      v-show="activeTab === 'Samsung_content'"
    >
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Samsung/samsungBlue.png"
          alt="Samsung Galaxy S25+ 12ГБ 256ГБ (Синий Navy)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Samsung Galaxy S25+<br />12ГБ + 256ГБ (Синий)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Samsung/samsungBlack.png"
          alt="Samsung Galaxy S25+ 12ГБ 256ГБ (Тёмно-серый Blueblack)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Samsung Galaxy S25+<br />12ГБ + 256ГБ (Тёмно-серый)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>

      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Samsung/SamsungTitan.png"
          alt="Samsung Galaxy S25 Edge 12ГБ 256ГБ (Угольно-чёрный титан Titanium Jetblack)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Samsung Galaxy S25 Edge<br />12ГБ + 256ГБ <Br></Br> (Чёрный титан)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>

      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Samsung/SamsungCoal.png"
          alt="Samsung Galaxy S25 Ultra 12ГБ 256ГБ (Угольно-чёрный титан Titanium Jetblack)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[55%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Samsung Galaxy S25 Ultra<br />12ГБ + 256ГБ <br>(Угольно-чёрный титан)</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
     
    </ul>


    <ul
      class="products_list px-5 mt-5 xl:mt-18 gap-x-4 xl:gap-x-10 h-113 xl:h-125 w-full"
      id="StellaPolare_content"
      v-show="activeTab === 'StellaPolare_content'"
    >
    <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Stella Polare/GamepadStellaPolareOrange.png"
          alt="Samsung Galaxy S25 Ultra 12ГБ 256ГБ (Угольно-чёрный титан Titanium Jetblack)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[35%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Stella Polare Gamepad<br />Оранжевый</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>

      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Stella Polare/GamepadStellaPolareSilver.png"
          alt="Samsung Galaxy S25 Ultra 12ГБ 256ГБ (Угольно-чёрный титан Titanium Jetblack)"
          class="absolute top-[22px] left-1/2 -translate-x-1/2 max-h-[30%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Stella Polare Gamepad<br />Серебристый</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>

      <li
        class="product_item Apple_product_item w-97 h-full p-8 flex flex-col justify-end bg-[#717171]/10 rounded-[1.25rem] xl:rounded-[1.875rem] relative z-1"
      >
        <div class="overlay"></div>
        <img
          src="../images/Stella Polare/airTechStellaPolareWhite-.png"
          alt="Samsung Galaxy S25 Ultra 12ГБ 256ГБ (Угольно-чёрный титан Titanium Jetblack)"
          class="absolute top-[0px] left-1/2 -translate-x-1/2 max-h-[50%] w-auto object-contain select-none pointer-events-none z-0"
        />
        <span class="text-lg xl:text-2xl font-normal text-white/60 text-center z-40"
          >Stella Polare Осушитель <br /> воздуха Белый</span
        >
        <span class="mt-[12px] text-xl xl:text-[1.75rem] font-semibold text-center text-white z-40"
          >110500₽</span
        >
        <button
          class="mt-5 xl:mt-7 bg-white rounded-full border-none w-full h-13 text-xl xl:text-2xl font-normal color-[#13161a] z-40 hover:border-[2.2px] hover:border-solid hover:border-[#0064ff] active:border-none active:bg-white/50 active:text-[#13161a]/50"
          type="button"
        >
          Приобрести
        </button>
      </li>
     
    </ul>

    
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('Apple_content')

const setActive = (tabId, event) => {
  activeTab.value = tabId
  // Center clicked tab in the scroll container
  const navItem = event?.currentTarget?.closest('li')
  const container = navItem?.parentElement
  if (navItem && container) {
    const itemRect = navItem.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const scrollPosition = itemRect.left - containerRect.left + container.scrollLeft - 4
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.products_nav_container,
.products_nav {
  scrollbar-width: none;
}

.products_nav_item {
  transition: background-color 0.5s ease;
}

.products_nav_item.active {
  background-color: rgba(255, 255, 255, 0.1);
}

.products_list {
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-width: none;
}

/* Background-image classes removed; images now rendered with <img> and Tailwind */

.product_item::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80%;
  border-radius: 30px;
  background: linear-gradient(rgba(19, 22, 26, 0) 15%, rgba(19, 22, 26, 1) 40%);
  pointer-events: none;
  z-index: 2;
}

.product_item::after {
  content: '';
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  border-radius: 30px;
  width: 100%;
  height: 48%;
  background: linear-gradient(
    rgba(113, 113, 113, 0) 0%,
    rgba(19, 22, 26, 0.1) 15%,
    rgba(4, 102, 229, 0.2) 60%
  );
  backdrop-filter: blur(400px);
  z-index: 2;
}

.product_item:hover::after {
  display: block;
}

.product_item:hover .overlay {
  display: block;
}
</style>
