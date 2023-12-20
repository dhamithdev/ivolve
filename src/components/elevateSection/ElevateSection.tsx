import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

export default component$(() => {

    const options = [
        { label: "UI/UX Design", isChecked: false },
        { label: "Web Development", isChecked: false },
        { label: "E-commerce Developments", isChecked: false },
        { label: "Mobile App Development", isChecked: false },
        { label: "Cloud Solutions", isChecked: false },
        { label: "Project Management", isChecked: false },
    ];

    return (<div class="mx-20">
        <div>
            <div class="flex flex-row justify-between">
                <div>
                    <div class="mb-5">
                        <h3 class="text-[#1B123B] font-GeistMono600 text-[37px] w-[520px] leading-tight">Elevate <span>Your Vision</span> with Our Product Engineering.</h3>
                    </div>
                    <div class="mb-5">
                        <p class="w-[600px] text-[18px] font-Fixel400 text-[#494162]">Crafting digital excellence, our product engineering transforms ideas into dynamic experiences, pushing boundaries to elevate your vision beyond expectations.</p>
                    </div>
                    <div class="mb-5">
                        <hr class="bg-[#D1D0D8]" />
                    </div>
                    <div class="mb-5">
                        <div class="flex gap-10 ">
                            <div class="flex flex-col">
                                {options.slice(0, 3).map((option, index) => (
                                    <label key={index} class="my-2 flex items-center">
                                        <input
                                            type="checkbox"
                                            checked
                                            readOnly
                                            class="mr-2 mb-1 my-checkbox"

                                        />
                                        <span class="text-[#494162] font-Fixel600 text-[18px]">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                            <div class="flex flex-col">
                                {options.slice(3).map((option, index) => (
                                    <label key={index + 3} class="my-2 flex items-center">
                                        <input
                                            type="checkbox"
                                            checked
                                            readOnly
                                            class="mr-2 mb-1 my-checkbox"
                                        />
                                        <span class="text-[#494162] font-Fixel600 text-[18px]">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <hr class="bg-[#D1D0D8]" />
                    </div>
                    <div class="mb-5">
                        <p class="w-[600px] text-[18px] font-Fixel400 text-[#494162]">From design brilliance to seamless project delivery, we turn visions into exceptional realities by utilizing the best technologies out there. Elevate your digital presence with us.</p>
                    </div>
                    <div class="flex flex-row justify-between mb-5">
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine1/nuxt.svg"} width={103} height={30} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine1/Figma.svg"} width={72} height={20} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine1/aws.svg"} width={40} height={24} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine1/vite.svg"} width={26} height={26} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine1/next.svg"} width={84} height={20} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine1/node.svg"} width={77} height={22} />
                        </div>
                    </div>

                    <div class="flex flex-row justify-between mb-5">
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine2/ghost.svg"} width={70} height={26} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine2/strapi.svg"} width={87} height={23} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine2/webflow.svg"} width={111} height={18} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine2/shopity.svg"} width={84} height={24} />
                        </div>
                        <div>
                        <Image src={"/assets/images/elevateSection/imageLine2/sanirty.svg"} width={88} height={18} />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-[545px] h-[630px] bg-[#FEFAFF] rounded-[30px]">
                    </div>               
                </div>
            </div>
        </div>
    </div>)
});