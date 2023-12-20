import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

export default component$(() => {
  return (<div class="mx-20 mt-28">
        <div>
            <div class="">
                <h3 class="font-GeistMono600 text-[#1B123B] text-[24px] text-center ">Trusted by best in the business</h3>
            </div>
            <div class="flex justify-between mt-10 image-slider mb-32">
                <Image src={"/assets/images/Trusted business/wework.svg"} alt="WeworkImage" layout="constrained" width={133} height={30} />
                <Image src={"/assets/images/Trusted business/coke.svg"} alt="WeworkImage" layout="constrained" width={94} height={30} />
                <Image src={"/assets/images/Trusted business/samsung.svg"} alt="WeworkImage" layout="constrained" width={159} height={24} />
                <Image src={"/assets/images/Trusted business/xioami.svg"} alt="WeworkImage" layout="constrained" width={114} height={32} />
                <Image src={"/assets/images/Trusted business/shein.svg"} alt="WeworkImage" layout="constrained" width={117} height={26} />
            </div>
        </div>
    </div>)
});