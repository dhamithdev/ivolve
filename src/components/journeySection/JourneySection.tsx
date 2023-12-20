import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

export default component$(() => {
    return (<div class="mx-24">
        <div>
            <div class="mb-24">
                <div>
                    <h2 class="text-[#1B123B] font-GeistMono600 text-[49px] text-center leading-tight">A Journey of Discovery, Collaboration, and Transformation</h2>
                </div>
                <div class="mt-14 flex justify-between">
                    {/* card 1 */}
                    <div class="w-[590px] h-[749px] green-cese-gradient rounded-[30px]">
                        <div class="ml-[30px] pt-[30px]">
                            <h6 class="text-[#8000FF] font-GeistMono600 text-[20px] ">Seal the Promise / Craft</h6>
                        </div>
                        <div class="ml-[30px] pt-[10px]">
                            <h5 class="text-[#1B123B] font-GeistMono600 text-[28px]">A Journey of Discovery, Collaboration, and Transformation</h5>
                        </div>
                        <div class="ml-[30px] pt-[30px]">
                            <p class="text-[#494162] font-Fixel400 text-[18px]">It’s well and good setting an ambitious top-down target, but you also need a credible bottom-up plan to get there. Causal’s templates give you a great starting point to set realistic targets.</p>
                        </div>
                        <div class="ml-[30px] pt-[30px]">
                            <button  class="w-[220px] h-[32px]  rounded-lg bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 ">
                                <div class="text-white font-GeistMono600 text-[16px] flex justify-between mx-5">
                                    Read Case Study
                                    <span class="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clip-path="url(#clip0_28_3260)">
                                                <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9 12L12 9L9 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6 9H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_28_3260">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div class="ml-[40px] pt-[50px]">
                        <Image src={"/assets/images/journeySection/jgreen.svg"} alt="" layout="constrained" width={470} height={350} />
                        </div>

                    </div>
                    {/* card 2 */}
                    <div class="w-[590px] h-[749px] pink-case-gradient rounded-[30px]">
                        <div class="ml-[30px] pt-[30px]">
                            <h6 class="text-[#8000FF] font-GeistMono600 text-[20px] ">Seal the Promise / Craft</h6>
                        </div>
                        <div class="ml-[30px] pt-[10px]">
                            <h5 class="text-[#1B123B] font-GeistMono600 text-[28px]">A Journey of Discovery, Collaboration, and Transformation</h5>
                        </div>
                        <div class="ml-[30px] pt-[30px]">
                            <p class="text-[#494162] font-Fixel400 text-[18px]">It’s well and good setting an ambitious top-down target, but you also need a credible bottom-up plan to get there. Causal’s templates give you a great starting point to set realistic targets.</p>
                        </div>
                        <div class="ml-[30px] pt-[30px]">
                            <button  class="w-[220px] h-[32px]  rounded-lg bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 ">
                                <div class="text-white font-GeistMono600 text-[16px] flex justify-between mx-5">
                                    Read Case Study
                                    <span class="mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clip-path="url(#clip0_28_3260)">
                                                <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9 12L12 9L9 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6 9H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_28_3260">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div class="ml-[40px] pt-[50px]">
                        <Image src={"/assets/images/journeySection/jpink.svg"} alt="" layout="constrained" width={528} height={352} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>)
});