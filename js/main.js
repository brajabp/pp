// import Alpine from 'alpinejs';
// import '../css/style.css'; // Import tailwind CSS

// // Font Awesome 6 (Free)
// import '@fortawesome/fontawesome-free/js/brands'; // https://fontawesome.com/icons?d=gallery&s=brands&m=free
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/regular'; // https://fontawesome.com/icons?d=gallery&s=regular&m=free
// import '@fortawesome/fontawesome-free/js/solid'; // https://fontawesome.com/icons?d=gallery&s=solid&m=free


/* ************************************************************************************************************************************************************* */
// HAMBURGER: JavaScript code to handle hamburger menu
/* *******************************************/
// Get the elements
const hamburgerBtn = document.getElementById('hamburger');
const content = document.getElementById('content');

// Initialize a boolean variable to track the menu state
let isMenuOpen = false;
content.classList.remove('h-full');
content.classList.add('scale-y-0', 'h-0', 'transform', 'md:transform-none');
hamburgerBtn.classList.remove('open');

// Add event listener for hamburger click
hamburgerBtn.addEventListener('click', () => {
    if (isMenuOpen) {
        // content.classList.add('hidden');
        content.classList.remove('h-full');
        content.classList.add('scale-y-0', 'h-0', 'transform', 'md:transform-none');
        hamburgerBtn.classList.remove('open');
    } else {
        // content.classList.remove('hidden');
        content.classList.add('h-full');
        content.classList.remove('scale-y-0', 'h-0', 'transform', 'md:transform-none');
        hamburgerBtn.classList.add('open');
    }
    isMenuOpen = !isMenuOpen;
});
/* ************************************************************************************************************************************************************* */


/* ************************************************************************************************************************************************************* */
// TESTIMONIAL: JavaScript code to handle slideshow
/* *******************************************/
const testimonials = document.querySelectorAll(".testimonial-slide > div");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentSlide = 0;

function showSlide(slideIndex) {
    testimonials.forEach((testimonial, index) => {
    if (index === slideIndex) {
        testimonial.classList.remove("hidden");
    } else {
        testimonial.classList.add("hidden");
    }
    });
}

prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    // alert("Hi 1" + currentSlide);
    showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    // alert("Hi 2");
    showSlide(currentSlide);
});

// Show the first slide initially
showSlide(currentSlide);
/* ************************************************************************************************************************************************************* */


/* ************************************************************************************************************************************************************* */
// MODAL: JavaScript code to handle Callback Request Modal
/* *******************************************/
// Get the modal and the image trigger element
var modal = document.getElementById("popupModal");
var img = document.getElementById("openPopup");

// Get the close button element
var closeBtn = document.getElementById("closePopup");

// Function to open the modal
img.onclick = function() {
    modal.classList.remove("hidden");
}

// Function to close the modal
closeBtn.onclick = function() {
    modal.classList.add("hidden");
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add("hidden");
    }
}
/* ************************************************************************************************************************************************************* */

/* ************************************************************************************************************************************************************* */
/* TOOGLE SCRIPT */
/* *******************************************/
//<div pop-target="content1" on-hov toggle-classes="class-a class-b | class-c class-d">Main Div 1</div>
//<div pop-target="content2" on-clk toggle-classes="class-d class-e class-x | class-c class-d">Main Div 2</div>
//<div pop-target="content3" toggle-classes="class-a class-b | class-c class-d class-e">Main Div 3
//  <div id="content3">Popover Div 3</div>
//</div>
//
//<div id="content1">Popover Div 1</div>
//<div id="content2" pop-target="content4">Popover Div 2</div>
//<!-- <div id="content3">Popover Div 3</div> -->
//<div id="content4" class="class-a">Popover Div 4</div>

//.class-a {
//  background-color: #008080; /* Apply a 10px margin to all sides of the element */
//}
//.class-b {
//  border: 10px solid #ccc; /* Add a 1px solid border with a gray color */
//}
//.class-x {
//  border: 10px solid #FFC0CB; /* Add a 1px solid border with a gray color */
//}
//.class-c {
//  background-color: #D3D3D3; /* Set the background color to a light gray */
//}
//.class-d {
//  font-size: 36px; /* Set the font size to 16 pixels */
//}
//.class-e {
//  color: #FFA500; /* Set the text color to a dark gray */
//}

// Get all elements with the "pop-target" attribute
const poptargetElements = document.querySelectorAll('[pop-target]');

// Add event listeners to each "pop-target" element
poptargetElements.forEach((poptargetElement) => {
  const targetId = poptargetElement.getAttribute('pop-target');
  const contentElement = document.getElementById(targetId);

  contentElement.style.display = 'none';

  const toggleClasses = poptargetElement.getAttribute('toggle-classes');
  const hasOnHov = poptargetElement.hasAttribute('on-hov');
  const hasOnClk = poptargetElement.hasAttribute('on-clk');

  const showContent = () => {
    contentElement.style.display = 'block';
    poptargetElement.classList.remove(...leftClasses);
    poptargetElement.classList.add(...rightClasses);
  };

  const hideContent = () => {
    contentElement.style.display = 'none';
    poptargetElement.classList.remove(...rightClasses);
    poptargetElement.classList.add(...leftClasses);
  };

  let leftClasses = [];
  let rightClasses = [];

  if (toggleClasses) {
    const [leftArray, rightArray] = toggleClasses.split('|').map((classes) => classes.trim());

    if (leftArray) {
      leftClasses = leftArray.split(' ');
      poptargetElement.classList.add(...leftClasses);
    }

    if (rightArray) {
      rightClasses = rightArray.split(' ');
    }
  }

  if (!hasOnHov && !hasOnClk) {
    // Toggle content on hover OR on click if no onHov or onClk attribute is present
    poptargetElement.addEventListener('mouseenter', showContent);
    poptargetElement.addEventListener('mouseleave', hideContent);
    poptargetElement.addEventListener('click', () => {
      if (contentElement.style.display === 'block') {
        hideContent();
      } else {
        showContent();
      }
    });
  } else if (!hasOnClk) {
    // Toggle content on hover if onHov attribute is present but not onClk
    poptargetElement.addEventListener('mouseenter', showContent);
    poptargetElement.addEventListener('mouseleave', hideContent);
  } else if (!hasOnHov) {
    // Toggle content on click if onClk attribute is present but not onHov
    poptargetElement.addEventListener('click', () => {
      if (contentElement.style.display === 'block') {
        hideContent();
      } else {
        showContent();
      }
    });
  }
});
/* ************************************************************************************************************************************************************* */

// Alpine
// window.Alpine = Alpine;
// Alpine.start();

/*
console.log('Test Me!!');

var element = document.getElementById("myElement");

if (open) {
  element.classList.add("rotate-45");
  element.classList.remove("-translate-y-1.5");
} else {
  element.classList.remove("rotate-45");
  element.classList.add("-translate-y-1.5");
}


const buttons = document.querySelectorAll('.popover-button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const target = button.dataset.target;
        const div = document.getElementById(target);

        if (div.style.display === 'none') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }

        if (button.dataset.custom === 'true') {
            // custom logic for this button
            console.log('Custom logic executed for ' + button.textContent);
        }
    });
});
*/


// document.addEventListener('alpine:init', () => {
//    Alpine.store('accordion', {
//      tab: 0,
//    });
//    Alpine.data('accordion', (idx) => ({
//      init() {
//       this.idx = idx;
//      },
//      idx: -1,
//      handleClick() {
//       // alert("handleClick: " + this.idx + " ---> Tab: " + this.$store.accordion.tab);
//       this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx;
//      },
//      handleToggle() {
//       // alert("handleToggle: " + this.idx + " ---> Tab: " + this.$store.accordion.tab + " ----> Height: " + this.$refs.tab.scrollHeight);
//       return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : '';
//      }
//    }));
//   })






/*
<button class="popover-button" data-target="popover-default-1" type="button">Popover 1</button>
<div class="popover" id="popover-default-1" role="tooltip" style="display: none;">
    <p>Popover 1 content.</p>
</div>

<button class="popover-button" data-target="popover-default-2" type="button">Popover 2</button>
<div class="popover" id="popover-default-2" role="tooltip" style="display: none;">
    <p>Popover 2 content.</p>
</div>

<button class="popover-button" data-target="popover-default-3" data-custom="true" type="button">Popover 3</button>
<div class="popover" id="popover-default-3" role="tooltip" style="display: none;">
    <p>Popover 3 content.</p>
</div>

<script>
    const buttons = document.querySelectorAll('.popover-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const target = button.dataset.target;
            const div = document.getElementById(target);

            if (div.style.display === 'none') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }

            if (button.dataset.custom === 'true') {
                // custom logic for this button
                console.log('Custom logic executed for ' + button.textContent);
            }
        });
    });
</script>
*/

/*
<button class="popover-button" data-target="popover-default-1" type="button">Popover 1</button>
<div class="popover" id="popover-default-1" role="tooltip" style="display: none;">
    <p>Popover 1 content.</p>
</div>

<button class="popover-button" data-target="popover-default-2" type="button">Popover 2</button>
<div class="popover" id="popover-default-2" role="tooltip" style="display: none;">
    <p>Popover 2 content.</p>
</div>

<script>
    const buttons = document.querySelectorAll('.popover-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const target = button.dataset.target;
            const div = document.getElementById(target);

            if (div.style.display === 'none') {
                div.style.display = 'block';
                div.style.height = div.scrollHeight + 'px';
            } else {
                div.style.display = 'none';
                div.style.height = '0';
            }
        });
    });
</script>
*/