import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (<div class="mx-20 mt-28 mb-28">
        <div class="container pt-5 pb-12 mb-12">

            <div class="row">
                <div class="col">
                </div>
            </div>

            <div class="row g-4 mt-3">
                <div class="col-lg-4">
                    <div class="gradient-border-card">

                        <div class="icon mb-3">
                        </div>

                        <div class="shimmer" style="--delay: -1s">
                        </div>

                        <i aria-hidden="true"></i>

                        <div class="glowing-wrapper glowing-wrapper-active mt-3">
                            <div class="glowing-wrapper-animations">
                                <div class="glowing-wrapper-glow"></div>
                                <div class="glowing-wrapper-mask-wrapper">
                                    <div class="glowing-wrapper-mask"></div>
                                </div>
                            </div>

                            <div class="glowing-wrapper-borders-masker">
                                <div class="glowing-wrapper-borders"></div>
                            </div>

                            <a href="#" class="glowing-wrapper-button w-inline-block">
                                <div class="text-white">Learn More</div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>)
});