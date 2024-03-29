/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 400, //how many particles in canvas
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#DCDCDC","#D3D3D3","#C0C0C0","#A9A9A9","#808080","#696969", "#778899", "#708090", "#2F4F4F", "#F5F5F5", "#F8F8FF", "#F0F8FF", "#FFFAFA"] //the amount of colors 
      },
      "shape": {
        "type": "image", //the shapes
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4 //how many sides for the polygon
        },
        "image": {
          "src": "https://c7.uihere.com/icons/336/717/98/forecast-snow-snowflake-weather-icon-9f2e22d3417bff7244482f26310c4fee.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3, //how big i want the shapes
        "random": true, //random sizes choses from value of 0 to 3
        "anim": {
          "enable": false, //if i want the sizes to animate
          "speed": 40, //how fast
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false, //to have the line connected to the particles or not
        "distance": 150, //maximum distance of the line of each particle
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true, //if i want particles to move or not
        "speed": 10,
        "direction": "none", //which direction particles will flow
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { //hover on mouse
          "enable": true,
          "mode": "bubble"
        },
        "onclick": { //if click
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": { //makes lines towards cursor
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": { //gigantify the particles near mouse
          "distance": 150,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": { //push force away from mouse
          "distance": 150
        },
        "push": { //add more particles
          "particles_nb": 4
        },
        "remove": { //subtract more particles
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);