import { component$ , useTask$} from '@builder.io/qwik';

import { gsap } from 'gsap';

export default component$(() => {


    useTask$(() => {
        const navElement = document.querySelector('nav');
        const activeElement = document.createElement('div');
        activeElement.classList.add('active-element');
    
        const getOffsetLeft = (element: HTMLElement) => {
          const elementRect = element.getBoundingClientRect();
          return (
            elementRect.left -
            navElement.getBoundingClientRect().left +
            (elementRect.width - activeElement.offsetWidth) / 2
          );
        };
    
        navElement.appendChild(activeElement);
    
        const activeButton = navElement.querySelector('ul li.active button');
    
        document.fonts.ready.then(() => {
          gsap.set(activeElement, {
            x: getOffsetLeft(activeButton as HTMLElement),
          });
          gsap.to(activeElement, {
            '--active-element-show': '1',
            duration: 0.2,
          });
        });
    
        navElement.querySelectorAll('ul li button').forEach((button, index) => {
          button.addEventListener('click', () => {
            // ... (rest of the provided code)
    
            // Adjust the code as needed to fit into a React component
          });
        });
    
        const createSVG = (element: HTMLElement) => {
          element.innerHTML = `
            <svg viewBox="0 0 116 5" preserveAspectRatio="none" className="beam">
              <!-- Add your SVG content here -->
            </svg>
            <div className="strike">
              <svg viewBox="0 0 116 5" preserveAspectRatio="none" className="beam">
                <!-- Add your SVG content here -->
              </svg>
            </div>
          `;
        };  
    });

    return (<div class="mx-20 mt-28 mb-28">
     
        <nav>
            <ul>
                <li class="active">
                    <button>Animation</button>
                </li>
                <li>
                    <button>Branding</button>
                </li>
                <li>
                    <button>Illustration</button>
                </li>
                <li>
                    <button>Branding</button>
                </li>
                <li>
                    <button>Illustration</button>
                </li>
                <li>
                    <button>Branding</button>
                </li>
                <li>
                    <button>Illustration</button>
                </li>
            </ul>
        </nav>

    </div>)
});