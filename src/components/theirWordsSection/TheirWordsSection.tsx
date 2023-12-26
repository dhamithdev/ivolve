import { component$ } from '@builder.io/qwik';
import FirstProjectImage1 from '/assets/images/theirWords/firstproject1.svg'
import FirstProjectImage2 from '/assets/images/theirWords/firstproject2.svg'
import FirstProjectImage3 from '/assets/images/theirWords/firstproject3.svg'
import { Image } from '@unpic/qwik';

export default component$(() => {

    interface CardDetails {
        id: number;
        title: string;
        description: string;
        name: string;
        position: string;
        image: string;
    }

    const myCardData: CardDetails[] = [
        {
            id: 1,
            title: 'Fast Project Delivery',
            description: 'It’s well and good setting an ambi tious top-down target, but you also need a credible bottom-up plan to get there.',
            name: 'Justus Menke',
            position: 'CEO RankGenie',
            image: FirstProjectImage1,
        },
        {
            id: 2,
            title: 'Fast Project Delivery',
            description: 'It’s well and good setting an ambi tious top-down target, but you also need a credible bottom-up plan to get there.',
            name: 'Justus Menke',
            position: 'CEO RankGenie',
            image: FirstProjectImage2,
        },
        {
            id: 3,
            title: 'Fast Project Delivery',
            description: 'It’s well and good setting an ambi tious top-down target, but you also need a credible bottom-up plan to get there.',
            name: 'Justus Menke',
            position: 'CEO RankGenie',
            image: FirstProjectImage3,
        },
        {
            id: 4,
            title: 'Fast Project Delivery',
            description: 'It’s well and good setting an ambi tious top-down target, but you also need a credible bottom-up plan to get there.',
            name: 'Justus Menke',
            position: 'CEO RankGenie',
            image: FirstProjectImage1,
        },

    ];

    return (
        <div class="mx-28 mb-28">
            <div class="text-center flex justify-center">
                <h2 class="text-[#1B123B] text-[49px] font-GeistMono600 text-center w-[1000px] leading-none">Their words, a testament to the digital triumphs <span class="weve-sculpted-gradient">we've sculpted together</span>.</h2>
            </div>
            <div class="mt-20 overflow-hidden">
                <div class="flex gap-10">
                    {myCardData.map((mycarddata) => (
                        <div key={mycarddata.id} class="w-[360px] h-[218px] rounded-2xl border-[1px] border-[#C7C3D2B3]">
                            <div class="p-[24px]">
                                <h4 class="font-PlusJakartaSans text-[#FF8A00] text-[20px] font-semibold">{mycarddata.title}</h4>
                                <p class="text-[#494162] font-Fixel400 text-[16px] w-[300px] mt-3">{mycarddata.description}</p>
                                <div class="mt-4">
                                    <div class="flex gap-4">
                                        <div class="mt-1">
                                            <Image width={37} height={37} src={mycarddata.image} />
                                        </div>
                                        <div >
                                            <h5 class="font-PlusJakartaSans text-[14px] text-[#160042] font-semibold mb-[1px]">{mycarddata.name}</h5>
                                            <h5 class="font-CerebriSans font-normal text-[12px] text-[#3D345145]">{mycarddata.position}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
});