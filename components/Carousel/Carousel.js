class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.imgs = this.carouselElement.querySelectorAll('img');
        this.rightButton = this.carouselElement.querySelector('.left-button');
        this.leftButton = this.carouselElement.querySelector('.right-button');
        this.currentPic = 0;
        this.maxPic = this.imgs.length;


        this.leftButton.addEventListener('click', () => this.leftClicked);
        this.rightButton.addEventListener('click', () => this.rightClicked);
    }

     rightClicked = () => {
        let newNum = this.currentPic + 1;
        if (newNum == this.maxPic )
            newNum = 0;

        this.imgs[this.currentPic].classList = 'slideRightOut';
        this.imgs[newNum].classList = 'slideRightIn';
        this.currentPic = newNum;
      }

    leftClicked = () => {
        let newNum = this.currentPic - 1;
        if (newNum == -1 )
            newNum = this.maxPic - 1;
        this.imgs[this.currentPic].classList = 'slideLeftOut';
        this.imgs[newNum].classList = 'slideLeftIn';
        this.currentPic = newNum;
      }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
