import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

export default component$(() => {
    return (<div class="mx-20 ">
        <div class="">
            <div class="flex justify-center flex-col text-center items-center">
            <div class="xl:w-[1140px] lg:w-[1020px]">
                <div class="xl:ml-[565px] xl:mt-[-45px] lg:ml-[510px] lg:mt-[-45px]  absolute">
                    <div>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 3.75L12.5875 24.9625L15.725 15.725L24.9625 12.5875L3.75 3.75Z" fill="url(#paint0_linear_28_122)" stroke="url(#paint1_linear_28_122)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_28_122" x1="14.3563" y1="3.75" x2="23.4831" y2="23.2025" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FBBF04" />
                                    <stop offset="1" stop-color="#FF0013" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_28_122" x1="14.3563" y1="3.75" x2="23.4831" y2="23.2025" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FBBF04" />
                                    <stop offset="1" stop-color="#FF0013" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="w-[48px] ml-[30px]  orange-arrow-gradient text-center rounded-sm">
                        <span class="py-2 text-[14px] font-Fixel500 text-white">Smith</span>
                    </div>
                </div>
                <div class="xl:ml-[630px] xl:mb-[-60px] lg:ml-[570px] lg:mb-[-60px]">
                    <Image src={"/assets/images/discoverySection/Rectangle 4784.png"} alt="Rectangle image" width={343} height={73} />
                </div>
                
                <div>
                <h2 class="text-[#1B123B] text-[49px] font-GeistMono600 text-center leading-tight "><span class="pr-2">A Journey of Discovery,</span> Collaboration, and Transformation</h2>
                </div>

                <div class="xl:ml-[968px] xl:mt-[-70px] lg:ml-[905px] lg:mt-[-70px]">
                    <div>
                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="mouse-pointer 4">
                                <path id="Vector" d="M4.25 3.75L13.0875 24.9625L16.225 15.725L25.4625 12.5875L4.25 3.75Z" fill="url(#paint0_linear_28_128)" stroke="url(#paint1_linear_28_128)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_28_128" x1="14.8562" y1="3.75" x2="14.8562" y2="24.9625" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#792FFF" />
                                    <stop offset="1" stop-color="#C600FF" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_28_128" x1="14.8562" y1="3.75" x2="14.8562" y2="24.9625" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#792FFF" />
                                    <stop offset="1" stop-color="#C600FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                    <div class="w-[58px] ml-[30px]  purplr-arrow-gradient text-center rounded-sm">
                        <span class="p-2 text-[14px] font-Fixel500 text-white">ivolve™</span>
                    </div>
                </div>
            </div>
            <div class="">
                <p class="text-[#494162] font-Fixel400 text-center text-[24px] mt-5">Where every detail, plan, and execution transforms possibilities into reality.</p>
            </div>
            </div>

            <div class="mt-16 flex flex-wrap justify-between mb-40">
                {/* card 1 */}

                <div class="w-[30%] h-auto rounded-3xl bg-[#FEFAFF] pb-8 border-[1px]">
                    <div class="mx-4">
                        <div class="flex justify-center w-full">
                            <Image layout="constrained" src={"/assets/images/discoverySection/cards/card1.svg"} alt="card 1 image" width={380} height={335} class="mt-5" />
                        </div>
                        <div class="flex text-center flex-col w-full">
                        <div class="">
                            <p class="text-[#1B123B] font-GeistMono600 text-[24px] my-2 w-auto text-start">Discover</p>
                        </div>
                        <div class="mt-4 flex justify-center">
                            <p class="text-[#1B123B] font-Fixel400 text-base w-auto text-start">Embark on a journey with us as we delve into the heart of your project. Through a meticulous Discovery & Needs Assessment, we unravel your vision, ensuring every detail is captured.</p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* card 2 */}

                <div class="w-[30%] h-auto rounded-3xl bg-[#F2FFFA] pb-8 border-[1px]">
                <div class="mx-4">
                        <div class="flex justify-center w-full">
                            <Image layout="constrained" src={"/assets/images/discoverySection/cards/card2.svg"} alt="card 2 image" width={380} height={335} class="mt-5" />
                        </div>
                        <div class="flex justify-center  flex-col w-full">
                        <div>
                            <p class="text-[#1B123B] font-GeistMono600 text-start text-[24px] my-2">Crafting Possibilities</p>
                        </div>
                        <div class="mt-4">
                            <p class="text-[#1B123B] font-Fixel400 text-start text-base w-auto">Explore possibilities with our expertise, working together to sculpt your Vision. We blend creativity and precision, shaping ideas into a solid plan through budget and timeline.</p>
                        </div>
                        </div>
                    </div>
                </div>

                {/* card 3 */}

                <div class="w-[30%] h-auto rounded-3xl bg-[#FFFAF7] pb-8 border-[1px]">
                <div class="mx-4">
                        <div class="flex justify-center w-full">
                            <Image layout="constrained" src={"/assets/images/discoverySection/cards/card3.svg"} alt="card 3 image" width={380} height={335} class="mt-5" />
                        </div>
                        <div class="flex justify-center flex-col w-full">
                            <div>
                                <p class="text-[#1B123B] font-GeistMono600 text-start text-[24px] my-2 ">Seal the Promise / Craft</p>
                            </div>
                            <div class="mt-4 flex justify-center">
                                <p class="text-[#1B123B] text-start font-Fixel400 text-base w-auto">Watch as your vision unfolds. From meticulous execution to real-time progress updates, we ensure every step is a testament to the transformative results we craft together.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>)
});