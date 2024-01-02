import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { gsap } from 'gsap';

export default component$(() => {

  console.log("---------------------------------------------------")




    // eslint-disable-next-line qwik/no-use-visible-task
useVisibleTask$(()=>{
  const navElement = document.querySelector("nav") as HTMLElement | null;

  if (navElement) {
    const activeElement = document.createElement("div");
    activeElement.classList.add("active-element");
  
    const getOffsetLeft = (element: HTMLElement) => {
      const elementRect = element.getBoundingClientRect();
  
      return (
        elementRect.left -
        (navElement?.getBoundingClientRect()?.left || 0) +
        (elementRect.width - activeElement.offsetWidth) / 2
      );
    };
  
    navElement.appendChild(activeElement);
  
    
    const activeButton = navElement.querySelector("ul li.active button");

    document.fonts.ready.then(() => {
      gsap.set(activeElement, {
        x: getOffsetLeft(activeButton),
      });
      gsap.to(activeElement, {
        "--active-element-show": "1",
        duration: 0.2,
      });
    });


    const buttons = navElement?.querySelectorAll("ul li button");

if (buttons) {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const active = navElement.querySelector("ul li.active") as HTMLElement | null;

      if (!active) {
        return;
      }

      const parentElement = active.parentElement;

      if (!parentElement) {
        return;
      }

      const oldIndex = Array.from(parentElement.children).indexOf(active);

      if (
        index === oldIndex ||
        navElement.classList.contains("before") ||
        navElement.classList.contains("after")
      ) {
        return;
      }

      const x = getOffsetLeft(button);
      const direction = index > oldIndex ? "after" : "before";
      const spacing = Math.abs(x - getOffsetLeft(active));

      navElement.classList.add(direction);
      active.classList.remove("active");
      button.parentElement?.classList.add("active");  // safely access classList

      gsap.set(activeElement, {
        rotateY: direction === "before" ? "180deg" : "0deg",
      });

      gsap.to(activeElement, {
        keyframes: [
          {
            "--active-element-width": `${
              spacing > navElement.offsetWidth - 60
                ? navElement.offsetWidth - 60
                : spacing
            }px`,
            duration: 0.3,
            ease: "none",
            onStart: () => {
              createSVG(activeElement);
  
              gsap.to(activeElement, {
                "--active-element-opacity": 1,
                duration: 0.1,
              });
            },
          },
          {
            "--active-element-scale-x": "0",
            "--active-element-scale-y": ".25",
            "--active-element-width": "0px",
            duration: 0.3,
            onStart: () => {
              gsap.to(activeElement, {
                "--active-element-mask-position": "40%",
                duration: 0.5,
              });
              gsap.to(activeElement, {
                "--active-element-opacity": 0,
                delay: 0.45,
                duration: 0.25,
              });
            },
            onComplete: () => {
              activeElement.innerHTML = "";
              navElement.classList.remove("before", "after");
              activeElement.removeAttribute("style");
              gsap.set(activeElement, {
                x: getOffsetLeft(button),
                "--active-element-show": "1",
              });
            },
          },
        ],
      });

      gsap.to(activeElement, {
        x,
      "--active-element-strike-x": "-50%",
      duration: 0.6,
      ease: "none",
      });
    });
  });
}

const createSVG = (element: HTMLElement | null) => {
  if (element) {
    element.innerHTML = `
    <svg viewBox="0 0 116 5" preserveAspectRatio="none" class="beam">
    <path d="M0.5 2.5L113 0.534929C114.099 0.515738 115 1.40113 115 2.5C115 3.59887 114.099 4.48426 113 4.46507L0.5 2.5Z" fill="url(#gradient-beam)"/>
    <defs>
      <linearGradient id="gradient-beam" x1="2" y1="2.5" x2="115" y2="2.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#6AAAFF"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
    </defs>
  </svg>
  <div class="strike">
    <svg viewBox="0 0 114 12" preserveAspectRatio="none">
      <g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
        <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
        <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
        <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
      </g>
    </svg>
    <svg viewBox="0 0 114 12" preserveAspectRatio="none">
      <g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
        <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
        <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
        <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
      </g>
    </svg>
  </div>
    `;
  }
};



  } else {
    console.error("Unable to find 'nav' element");
  }
})



    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(()=>{
        gsap.fromTo(".box1", {x: -100},{ x: 100, duration: 1});
        console.log("hi")
    })

    // eslint-disable-next-line qwik/no-use-visible-task
    // useVisibleTask$(() => {
    //   const navElement = navElementRef.current!;
    //   const activeElement = activeElementRef.current!;
    //   const activeButton = navElement.querySelector('ul li.active button')!;
  
    //   gsap.set(activeElement, {
    //     x: getOffsetLeft(activeButton),
    //   });
  
    //   gsap.to(activeElement, {
    //     '--active-element-show': '1',
    //     duration: 0.2,
    //   });
  
    //   const handleClick = (button: HTMLButtonElement, index: number) => {
    //     const active = navElement.querySelector('ul li.active');
    //     const oldIndex = [...(active as HTMLElement).parentElement!.children].indexOf(active as Node);
  
    //     if (
    //       index === oldIndex ||
    //       navElement.classList.contains('before') ||
    //       navElement.classList.contains('after')
    //     ) {
    //       return;
    //     }
  
    //     const x = getOffsetLeft(button);
    //     const direction = index > oldIndex ? 'after' : 'before';
    //     const spacing = Math.abs(x - getOffsetLeft(active as HTMLElement));
  
    //     navElement.classList.add(direction);
    //     (active as HTMLElement).classList.remove('active');
    //     button.parentElement!.classList.add('active');
  
    //     gsap.set(activeElement, {
    //       rotateY: direction === 'before' ? '180deg' : '0deg',
    //     });
  
    //     gsap.to(activeElement, {
    //       keyframes: [
    //         {
    //           '--active-element-width': `${
    //             spacing > navElement.offsetWidth - 60
    //               ? navElement.offsetWidth - 60
    //               : spacing
    //           }px`,
    //           duration: 0.3,
    //           ease: 'none',
    //           onStart: () => {
    //             createSVG(activeElement);
  
    //             gsap.to(activeElement, {
    //               '--active-element-opacity': 1,
    //               duration: 0.1,
    //             });
    //           },
    //         },
    //         {
    //           '--active-element-scale-x': '0',
    //           '--active-element-scale-y': '.25',
    //           '--active-element-width': '0px',
    //           duration: 0.3,
    //           onStart: () => {
    //             gsap.to(activeElement, {
    //               '--active-element-mask-position': '40%',
    //               duration: 0.5,
    //             });
    //             gsap.to(activeElement, {
    //               '--active-element-opacity': 0,
    //               delay: 0.45,
    //               duration: 0.25,
    //             });
    //           },
    //           onComplete: () => {
    //             activeElement.innerHTML = '';
    //             navElement.classList.remove('before', 'after');
    //             activeElement.removeAttribute('style');
    //             gsap.set(activeElement, {
    //               x: getOffsetLeft(button),
    //               '--active-element-show': '1',
    //             });
    //           },
    //         },
    //       ],
    //     });
  
    //     gsap.to(activeElement, {
    //       x,
    //       '--active-element-strike-x': '-50%',
    //       duration: 0.6,
    //       ease: 'none',
    //     });

    //   };
  
    //   navElement.querySelectorAll('ul li button').forEach((button, index) => {
    //     button.addEventListener('click', () => handleClick(button, index));
    //   });
  
    //   return () => {
    //     navElement.querySelectorAll('ul li button').forEach((button) => {
    //       button.removeEventListener('click', () => handleClick(button, 0));
    //     });
    //   };
    // });

   // const createSVG = ((element: HTMLElement) => {
      // Implement the SVG creation logic here
      // ...
   // });
    

//gsap.to(".logo",{duration:2,x:300})

    return (
    <div>
<header class="flex h-20 w-full items-center  ">

      <Link class="mr-6" href="#" aria-label="go to home page">
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="36" viewBox="0 0 126 36" fill="none">
            <g clip-path="url(#clip0_28_53)">
                <mask id="mask0_28_53" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="39" height="36">
                    <path d="M38.9919 0H0V36H38.9919V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_28_53)">
                    <mask id="mask1_28_53" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="39" height="36">
                        <path d="M38.9919 18C38.9919 27.9412 30.2633 36 19.4959 36C8.72863 36 0 27.9412 0 18C0 8.05888 8.72863 0 19.4959 0C30.2633 0 38.9919 8.05888 38.9919 18ZM8.86357 18C8.86357 23.4215 13.6239 27.8165 19.4959 27.8165C25.3681 27.8165 30.1283 23.4215 30.1283 18C30.1283 12.5785 25.3681 8.18346 19.4959 8.18346C13.6239 8.18346 8.86357 12.5785 8.86357 18Z" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask1_28_53)">
                        <mask id="mask2_28_53" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-1" y="-1" width="40" height="37">
                            <path d="M38.9919 -0.157227H-0.170288V36H38.9919V-0.157227Z" fill="white" />
                        </mask>
                        <g mask="url(#mask2_28_53)">
                            <path d="M20.6558 27.6399H17.9393V35.9999H20.6558V27.6399Z" fill="#8000FF" />
                            <path d="M15.3117 27.0128L12.9592 25.7588L8.43182 32.9989L10.7843 34.2529L15.3117 27.0128Z" fill="#8000FF" />
                            <path d="M10.8406 23.7508L9.48239 21.5789L1.64069 25.7588L2.99891 27.9309L10.8406 23.7508Z" fill="#8000FF" />
                            <path d="M8.88455 19.28V16.772H-0.170288V19.28H8.88455Z" fill="#8000FF" />
                            <path d="M38.9919 19.28V16.772H17.9393V19.28H38.9919Z" fill="#8000FF" />
                            <path d="M35.7414 28.1399L37.0996 25.9679L29.2578 21.7878L27.8996 23.9599L35.7414 28.1399Z" fill="#8000FF" />
                            <path d="M28.1262 34.2529L30.4787 32.9989L25.9514 25.7588L23.5988 27.0128L28.1262 34.2529Z" fill="#8000FF" />
                            <path d="M37.0997 9.95691L35.7414 7.78491L27.8998 11.9649L29.258 14.1369L37.0997 9.95691Z" fill="#8000FF" />
                            <path d="M9.70884 14.1369L11.0671 11.9649L3.22534 7.78491L1.86713 9.95691L9.70884 14.1369Z" fill="#8000FF" />
                            <path d="M12.9594 10.0089L15.3119 8.7549L10.7845 1.51489L8.43195 2.7689L12.9594 10.0089Z" fill="#8000FF" />
                            <path d="M20.6558 -0.157227H17.9393V8.20282H20.6558V-0.157227Z" fill="#8000FF" />
                            <path d="M30.4785 2.97789L28.1261 1.72388L23.5986 8.9639L25.9512 10.2179L30.4785 2.97789Z" fill="#8000FF" />
                        </g>
                    </g>
                    <path d="M38.9919 19.28V16.772H17.9393V19.28H38.9919Z" fill="#8000FF" />
                </g>
                <path d="M50.5694 9.84902C50.5694 10.8302 49.693 11.6255 48.6118 11.6255C47.5306 11.6255 46.6541 10.8302 46.6541 9.84902C46.6541 8.86789 47.5306 8.07251 48.6118 8.07251C49.693 8.07251 50.5694 8.86789 50.5694 9.84902Z" fill="#8000FF" />
                <path d="M50.5071 13.4932V27.608H46.7125V13.4932H50.5071ZM63.0157 27.608H58.5789L52.8577 13.4932H56.7691L60.7972 24.1193L64.7964 13.4932H68.7369L63.0157 27.608ZM77.1602 27.9275C75.6228 27.9275 74.2704 27.6257 73.1028 27.022C71.9545 26.4184 71.0693 25.5574 70.4464 24.4389C69.8238 23.3203 69.5125 22.0242 69.5125 20.5505C69.5125 19.0769 69.8238 17.7809 70.4464 16.6624C71.0693 15.5438 71.9545 14.6827 73.1028 14.0791C74.2704 13.4754 75.6228 13.1736 77.1602 13.1736C78.6974 13.1736 80.0401 13.4754 81.1883 14.0791C82.3558 14.6827 83.2509 15.5438 83.8738 16.6624C84.4965 17.7809 84.8077 19.0769 84.8077 20.5505C84.8077 22.0242 84.4965 23.3203 83.8738 24.4389C83.2509 25.5574 82.3558 26.4184 81.1883 27.022C80.0401 27.6257 78.6974 27.9275 77.1602 27.9275ZM77.1602 25.1312C78.3667 25.1312 79.291 24.7317 79.933 23.9328C80.5947 23.1339 80.9256 22.0064 80.9256 20.5505C80.9256 19.0947 80.5947 17.9673 79.933 17.1684C79.291 16.3693 78.3667 15.9699 77.1602 15.9699C75.9535 15.9699 75.0194 16.3693 74.3579 17.1684C73.7158 17.9673 73.3947 19.0947 73.3947 20.5505C73.3947 22.0064 73.7158 23.1339 74.3579 23.9328C75.0194 24.7317 75.9535 25.1312 77.1602 25.1312ZM91.5915 8.69946V23.9062C91.5915 24.2434 91.679 24.5009 91.854 24.6784C92.0486 24.8383 92.3211 24.9182 92.6715 24.9182H93.8681V27.608H91.679C90.5114 27.608 89.5674 27.2973 88.8475 26.6759C88.147 26.0367 87.7968 25.1667 87.7968 24.066V8.69946H91.5915ZM104.442 27.608H100.005L94.2841 13.4932H98.1955L102.224 24.1193L106.223 13.4932H110.163L104.442 27.608ZM110.939 20.5505C110.939 19.0769 111.25 17.7809 111.873 16.6624C112.496 15.5438 113.381 14.6827 114.529 14.0791C115.697 13.4754 117.049 13.1736 118.586 13.1736C119.949 13.1736 121.175 13.4577 122.264 14.0258C123.354 14.5762 124.22 15.4107 124.862 16.5292C125.504 17.6477 125.835 19.0148 125.855 20.6306L125.884 21.4828H114.879C114.957 22.6546 115.317 23.5689 115.959 24.2258C116.621 24.8826 117.497 25.2112 118.586 25.2112C119.287 25.2112 119.929 25.0425 120.513 24.7052C121.097 24.35 121.525 23.8707 121.797 23.267L125.65 23.5333C125.203 24.8826 124.327 25.9568 123.023 26.7557C121.739 27.5371 120.26 27.9275 118.586 27.9275C117.049 27.9275 115.697 27.6257 114.529 27.022C113.381 26.4184 112.496 25.5574 111.873 24.4389C111.25 23.3203 110.939 22.0242 110.939 20.5505ZM121.972 19.1924C121.836 18.0562 121.457 17.2216 120.834 16.6889C120.211 16.1563 119.462 15.89 118.586 15.89C117.555 15.89 116.718 16.1831 116.076 16.7688C115.453 17.3371 115.074 18.1448 114.938 19.1924H121.972Z" fill="#8000FF" />
            </g>
            <defs>
                <clipPath id="clip0_28_53">
                    <rect width="126" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </div>
      </Link>

    <div class="mx-20 mt-28 mb-28">
<nav>
  <ul class="flex justify-center gap-12 ">
                    <li class="active">
                        <button class="text-base font-medium font-GeistMono500 text-[#1B123B] " >
                            Our Services
                        </button>
                    </li>
                    <li>
                        <button class="text-base font-medium font-GeistMono500 text-[#1B123B]  " >
                            Our Process
                        </button>
                    </li>
                    <li>
                        <button class="text-base font-medium font-GeistMono500 text-[#1B123B]  " >
                            Blog
                        </button>
                    </li>
                    <li>
                        <button class="text-base font-medium font-GeistMono500 text-[#1B123B]  ">
                            About Us
                        </button>
                    </li>
                </ul>
  </nav>

  </div> 
  <div class="ml-auto">
                <button class=" py-2 px-4 rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-500 flex" >
                    <Link class="text-base font-medium text-[#FFF] font-GeistMono600 " href="#">
                        About Us
                    </Link>
                    <span class="ml-2 my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <g clip-path="url(#clip0_28_91)">
                                <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 12L12 9L9 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 9H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_28_91">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </button>
            </div>
  </header>
  </div>)

});