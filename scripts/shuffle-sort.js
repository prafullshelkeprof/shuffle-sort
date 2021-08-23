/* this file works as a starting point for the app
* I have not used any ecma-6 code so that the code will run on maximum number of browsers
* I have tested the code on the latest version of chrome, firefox and IE
*/

window.addEventListener('DOMContentLoaded', function() {
    /* array of object having data container the number associated with the color code
    */
    var defaultData = [
        {
            bgColor: '#6F98A8',
            number: 1
        },
        {
            bgColor: '#2B8EAD',
            number: 2
        },
        {
            bgColor: '#2F454E',
            number: 3
        },
        {
            bgColor: '#2B8EAD',
            number: 4
        },
        {
            bgColor: '#2F454E',
            number: 5
        },
        {
            bgColor: '#BFBFBF',
            number: 6
        },
        {
            bgColor: '#BFBFBF',
            number: 7
        },
        {
            bgColor: '#6F98A8',
            number: 8
        },
        {
            bgColor: '#2F454E',
            number: 9
        }
    ];
    var parentElement = document.querySelectorAll('.shuffle-sort-app')[0];
    if (parentElement) {
        /* shuffeldData contains the data which we show on shuffle button click
        * it is generated by slicing the defaultData
        */
        var shuffledtData = defaultData.slice();
        var cardsContainer = parentElement.querySelectorAll('.shuffle-sort-app__cards')[0];
        var cardColorClass = 'shuffle-sort-app__card-color';
        var cardNumberClass = 'shuffle-sort-app__card-number';
        var cardNumberClassMobile = 'shuffle-sort-app__card-mobile';

        /* initializeApp method is used to initialize the app
        * it will be called only once and at the end of the code
        */
        var initializeApp = function initializeApp() {
            addCards();
            bindEvents();
            updateCards(defaultData);
        }

        /* addCards method is use to generate html of the card.
        * Cards count depends on the default data length
        * Generated html will be appended to the cards container
        */
        var addCards = function addCards() {
            if (cardsContainer) {
                var htmlToAppend = '';
                defaultData.forEach(function () {
                    htmlToAppend = htmlToAppend +
                        '<div class="shuffle-sort-app__card-container">'
                            + '<div class="shuffle-sort-app__card">'
                                + '<div class="' + cardColorClass + '"></div>'
                                + '<div class="' + cardNumberClassMobile + '"></div>'
                                + '<div class="' + cardNumberClass + '"></div>'
                            + '</div>'
                        + '</div>';
                })
                cardsContainer.innerHTML = htmlToAppend;
            }
        }

        /* updateCards method is use to update the cards content on the shuffle and sort button content
        * it updated the cards content based on the data parameter
        */
        var updateCards = function updateCards(data) {
            var cards = cardsContainer.querySelectorAll('.shuffle-sort-app__card');
            if (cards && cards.length) {
                cards.forEach(function (currentCard, index) {
                    if (data[index]) {
                        var cardColorContainer = currentCard.querySelectorAll('.' + cardColorClass)[0];
                        var mobileCardNumberContainer = currentCard.querySelectorAll('.' + cardNumberClassMobile)[0];
                        if (cardColorContainer && mobileCardNumberContainer) {
                            cardColorContainer.style.backgroundColor = data[index].bgColor;
                            mobileCardNumberContainer.innerHTML = data[index].number;
                        }
                        var desktopCardDetails = currentCard.querySelectorAll('.' + cardNumberClass)[0];
                        if (desktopCardDetails) {
                            desktopCardDetails.style.backgroundColor = data[index].bgColor;
                            desktopCardDetails.innerHTML = data[index].number;
                        }
                    }
                })
            }
        }

        /* bindEvents method binds the event listner for shuffle and sort buttons
        * on click handler is called which calls the update cards method
        * in shuffle button handler data is shuffled and is sent to update card method
        * in sort button handler original data is sent to update card method
        */
        var bindEvents = function bindEvents() {
            var shuffleBtn = parentElement.querySelectorAll('.shuffle-sort-app__shuffle-btn')[0];
            var sortBtn = parentElement.querySelectorAll('.shuffle-sort-app__sort-btn')[0];
            if (shuffleBtn && sortBtn) {
                shuffleBtn.addEventListener('click', function () {
                /* shuffle method shuffles the array content
                * this methods is defined in the fisher-yates-shuffle.js file
                * it uses the fisher-yates algorithm to shuffle the array
                */
                    shuffle(shuffledtData);
                    updateCards(shuffledtData);
                })
                sortBtn.addEventListener('click', function () {
                    updateCards(defaultData);
                })
            }
        }
        initializeApp();
    }
})

