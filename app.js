// Animation de la galerie
const btns = document.querySelectorAll('.btn-modal');
const modalEquipement = document.querySelector('.block-modal')
// Activaton de la carte
const btnMap = document.querySelector('.btn-outline-choice');
const map = document.querySelector('.map');
// const closeModal = document.querySelector('.close-modal');

// image qu'on visualise dans la fenêtre modale
const imgIndex = document.querySelector('.block-modal img');
//console.log(imgIndex);

// on va être à l'écoute d'un évènement click pour tout les boutons
// forEach pour chaque btn qui va passer dans cette fonction
// matchMedia retourne true ou false en fonction d'une taille d'écran

// La méthode element.matches() renvoie true lorsque l'élément peut être sélectionné par le sélecteur défini par la chaîne passée en paramêtre; sinon, elle renvoie false.
// Est ce que ça match ce breakpoint si "true" on execute si "false" ça ne fait rien.

// Definir la requête media
const mql = window.matchMedia('(min-width: 850px)');

function onClickGallery() {
    btns.forEach(btn => {
        // e va nous fournir des infos, l'objet d'évènement du bouton sur lequel on vient de cliquer
        
        btn.addEventListener('click', (e) => {
            // image de notre modale .scr c'est sa source
            // = l'url, e.targuet.getAttribute c'est l'image sur laquelle on clique et son attribut data-
            // getAttribute('data-index') renvoie la valeur d'un attribut donné de l'élément spécifié
            imgIndex.src = `./ressources/img${e.target.getAttribute('data-index')}-goodies.jpg`;
            // console.log(`La source de l'image est ${imgIndex.src} après le click de l'${e}`);
            // La fenêtre modale passe alors le display: none en display: block
            modalEquipement.classList.add('active-modal');
        })
    })

    // si je clique de n'importe ou ça ferme
    modalEquipement.addEventListener('click', () => {
        modalEquipement.classList.remove('active-modal');
    })
}

// Dès qu'on est au dessus de 850px, ça nous retourne true, dès qu'on est en dessous ça retourne false et n'exécute pas le code.
if (mql.matches) {
    onClickGallery();
  }

function testEcran(e) {
    if (e.matches) {
        /* the viewport is more than than 850 pixels wide */
        onClickGallery();
    } else {
        /* the viewport is 850 pixels wide or less */
        console.log(window.innerWidth);
        console.log('Je ne lance rien')
    }
  }
  
mql.addEventListener('change', testEcran);


// Animation Navbar

const nav = document.querySelector('nav');
// dès qu'on scroll sur le site
window.addEventListener('scroll', () => {
    // scroller de plus de 30px du top
    if(window.scrollY > 30) {
       nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }
})

// closeModal.addEventListener('click', () => {
//     // La fenêtre modale repasse en display: none;
//     modalEquipement.classList.remove('active-modal');
// })

// Si on clic sur le block modal qui prend toute la place du coup
modalEquipement.addEventListener('click', () => {
    // La fenêtre modale repasse en display: none;
    modalEquipement.classList.remove('active-modal');
})

// si je clique sur le bouton map ça active la classe
let isVisible = false;
//console.log(isVisible);

btnMap.addEventListener('click', () => {
    map.classList.toggle('is-visible');
    // Par defaut quand on clique on reste à true, on dit donc que c'est le contraire de isVisible
    isVisible = !isVisible
    // on fait un ternaire pour afficher la carte
    isVisible ? btnMap.innerText = 'Fermer' : btnMap.innerText = 'Ouvrir' ;
})




// https://discuss.codecademy.com/t/what-does-this-syntax-do/432913
// Une autre façon de taper une chaine de caractères appelé un backtick ou accent grave), il ajoute quelques fonctionnalités supplémentaires qui le rendent très utile, il évite le \escape et la concaténation

// let x = 5;
// console.log("hello world " + x + " times");
// console.log(`hello world ${x} times`);