import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

export default component$(() => {
    return (<div class="mx-20 lg:mt-28 mt-20">
        <section>
            <div>
                <div class="">
                    <p class="font-GeistMono600 text-[#1B123B] lg:text-[24px] text-[20px] text-center ">Trusted by best in the business</p>
                </div>
                <div class=" mt-10  mb-32 overflow-hidden">
                    <div class="marquee">
                        <div class="marquee-items flex lg:gap-44 gap-10">
                            <Image src={"/assets/images/Trusted business/wework.svg"} alt="Wework Image" layout="constrained" width={133} height={30} />
                            <Image src={"/assets/images/Trusted business/coke.svg"} alt="coke Image" layout="constrained" width={94} height={30} />
                            <Image src={"/assets/images/Trusted business/samsung.svg"} alt="samsung Image" layout="constrained" width={159} height={24} />
                            <Image src={"/assets/images/Trusted business/xioami.svg"} alt="xioami Image" layout="constrained" width={114} height={32} />
                            <Image src={"/assets/images/Trusted business/shein.svg"} alt="shein Image" layout="constrained" width={117} height={26} />
                            <Image src={"/assets/images/Trusted business/wework.svg"} alt="wework Image" layout="constrained" width={133} height={30} />
                            <Image src={"/assets/images/Trusted business/coke.svg"} alt="coke Image" layout="constrained" width={94} height={30} />
                            <Image src={"/assets/images/Trusted business/samsung.svg"} alt="samsung Image" layout="constrained" width={159} height={24} />
                            <Image src={"/assets/images/Trusted business/xioami.svg"} alt="xioami Image" layout="constrained" width={114} height={32} />
                            <Image src={"/assets/images/Trusted business/shein.svg"} alt="shein Image" layout="constrained" width={117} height={26} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
});