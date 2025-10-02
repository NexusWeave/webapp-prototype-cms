// Note: Authorization needed

// Validate JWT and extract user information
// page logic here

// Import logic
import {header, footer} from '../landingpage';

// main

const arr: Array<string> =
[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel eleifend diam. Suspendisse sed lorem ut nisl placerat fermentum. Etiam vel faucibus enim, in congue justo. Donec cursus felis nec dui porttitor, sit amet pharetra sem ultricies. Proin et tempor lorem, eu faucibus dui. Curabitur dapibus a sapien ut tristique. Suspendisse fermentum iaculis sem, vitae laoreet ipsum pharetra eget. In ac vehicula felis. Mauris sed magna sed neque ultricies egestas. Praesent fermentum dignissim turpis, vel commodo odio porttitor et. Phasellus et risus felis. Sed euismod ornare porttitor.",
    "Integer arcu augue, facilisis vitae imperdiet a, pharetra at arcu. Morbi in tempor tellus. Phasellus dictum turpis et turpis feugiat blandit. Nulla sodales purus sed cursus mattis. Nam sed quam ut mauris porttitor ultrices. In hac habitasse platea dictumst. Curabitur ac feugiat urna. Proin eleifend nec quam et porttitor. Maecenas id purus ligula. Suspendisse potenti. Nulla in ullamcorper ligula. Sed dignissim mi risus, et vulputate felis consequat vitae. Ut sagittis purus at purus posuere mattis. Curabitur vel pellentesque libero. Mauris ultrices massa non sem imperdiet ultricies.",
    "Aenean ac vulputate diam, sit amet dignissim erat. Nunc varius lacus dui, vel tempor urna volutpat vitae. Duis nibh lectus, iaculis eu odio eu, sagittis ultrices orci. Aliquam accumsan, lorem at maximus imperdiet, risus arcu mattis libero, id fermentum odio elit et mauris. Nam rhoncus sollicitudin turpis malesuada dictum. Suspendisse faucibus, lectus non egestas tincidunt, quam ex posuere sapien, in egestas purus massa sed nibh. In aliquam, purus tempus dapibus ornare, tortor risus blandit sapien, sed luctus purus eros et diam. Phasellus faucibus tellus eget condimentum fringilla. Nunc nibh velit, mollis in mi sed, mattis cursus nunc. Etiam efficitur ipsum vitae sodales gravida. Suspendisse laoreet mi non iaculis volutpat. Etiam urna elit, cursus sed magna sed, efficitur auctor augue. Mauris ultricies sem id risus pharetra facilisis eu a turpis. Sed congue urna ac leo ultricies, vitae ornare sapien consectetur. Mauris rhoncus, elit quis accumsan consequat, felis diam posuere elit, et pellentesque purus eros id odio. Integer sollicitudin, nulla non cursus commodo, leo neque ornare elit, ut fermentum mauris odio et augue."
];
function createPage()
{
    const page = document.querySelector('app-root');

    const html /*HTML*/ = `
    ${header()}
    <main>
    ${mainContent()}
    </main>
    ${footer()}
    `
    page.innerHTML = html;
}

function mainContent()
{
    return /*HTML*/`
    <h2>Public Page</h2>
    ${generateElement('section')}
    `;
}

// Helper functions
function generateElement(element: string)
{
    let html = '';
    for(let i = 0; i < arr.length; i++)
    {
        html /*HTML*/+= `
        <${element}>
            <p>${arr[i]}</p>
        </${element}>`;
        
    }
    return html;
}

createPage();