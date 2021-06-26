const change = document.querySelector('.change'); 
const root = document.querySelector(':root')
const second = document.querySelector('.second');
const hour = document.querySelector('.hour');

const minute = document.querySelector('.minute');
const audio = document.querySelector('audio')
props = [
    {
        background_image: 'url(backgrounds/joker.jpeg)',
        font_colour: 'white',
        change_focus_colour : 'rgb(1, 7, 7)'
    }, 
    
    {
        background_image: 'url(backgrounds/map.jpeg)',
        font_colour: 'white',
        change_focus_colour : 'rgb(1, 7, 7)'
    }, 

    {
        background_image: 'url(backgrounds/nature.jpeg)',
        font_colour: 'white',
        change_focus_colour : 'rgb(1, 7, 7)'
    }, 

    {
        background_image: 'url(backgrounds/tile_green.jpeg)',
        font_colour: 'white',
        change_focus_colour : 'rgb(1, 7, 7)'
    }, 

    {
        background_image: 'url(backgrounds/wood_brown.jpeg)',
        font_colour: 'white',
        change_focus_colour : 'rgb(1, 7, 7)'
    }, 

    {
        background_image: 'url(backgrounds/brick_coloured.jpeg)',
        font_colour: 'white',
        change_focus_colour : 'rgb(1, 7, 7)'
    }
]

function getRandomArbitrary(){
    return Math.floor(Math.random() *  props.length);
}


function changeBackground(e){
    selected = getRandomArbitrary();
    root.style.setProperty(
      "--background_image",
      props[selected]["background_image"]
    );
    root.style.setProperty(
        "--font_colour",
        props[selected]["font_colour"]
      );

      root.style.setProperty(
        "--change_focus_colour",
        props[selected]["change_focus_colour"]
      );
    
}
function audioplay(){
    audio.play()
}

change.addEventListener('click', changeBackground)
function setDate(){
    const now  = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds/60)*360;
    second.style.transform =  `rotate(${secondsDegrees}deg)`
   

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes/60.0)*360;
    minute.style.transform =  `rotate(${minutesDegrees+secondsDegrees/60}deg)`


    const hours = now.getHours();
    const hourDegrees = (hours/12.0)*360;
    hour.style.transform =  `rotate(${hourDegrees+minutesDegrees/12}deg)`;
    window.addEventListener('mouseover', audioplay)
    
}

setInterval(setDate, 1000);