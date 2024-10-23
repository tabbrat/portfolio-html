// Sélection des éléments
const sections = document.querySelectorAll('.section'); // Sélectionne toutes les sections avec la classe 'section'
const navbar = document.querySelector('.navbar'); // Sélectionne la barre de navigation

// Ajouter une classe d'animation quand la section est visible
window.addEventListener('scroll', () => { // Écoute l'événement de défilement de la fenêtre
    const windowHeight = window.innerHeight; // Récupère la hauteur de la fenêtre
    sections.forEach(section => { // Parcourt chaque section
        const sectionTop = section.getBoundingClientRect().top; // Récupère la position supérieure de la section par rapport à la fenêtre
        if (sectionTop < windowHeight - 150) { // Vérifie si la section est visible (au moins 150px à l'intérieur de la fenêtre)
            section.classList.add('in-view'); // Ajoute la classe 'in-view' si la section est visible
        }
    });
});

// Cacher la navbar après 300ms
let timeout; // Variable pour stocker le timeout
document.addEventListener('mousemove', () => { // Écoute l'événement de mouvement de la souris
    clearTimeout(timeout); // Annule le timeout précédent si la souris se déplace
    navbar.style.top = '0'; // Fait apparaître la barre de navigation
    timeout = setTimeout(() => { // Définit un nouveau timeout
        navbar.style.top = '-50px'; // Cache la barre de navigation après 1800ms
    }, 1800);
});

// Navigation sans défilement classique
document.querySelectorAll('.navbar a').forEach(link => { // Parcourt tous les liens de la barre de navigation
    link.addEventListener('click', function(e) { // Écoute l'événement de clic sur chaque lien
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const target = document.querySelector(this.getAttribute('href')); // Récupère la section cible à partir de l'attribut href du lien
        target.scrollIntoView({ behavior: 'smooth' }); // Fait défiler doucement la page vers la section cible
    });
});

// Vérification de la soumission du formulaire
document.addEventListener('DOMContentLoaded', () => { // S'assure que le DOM est complètement chargé
    const form = document.querySelector('form'); // Sélectionne le formulaire

    form.addEventListener('submit', (e) => { // Écoute l'événement de soumission du formulaire
        const privacyConsent = document.getElementById('privacy-consent'); // Récupère la case à cocher pour le consentement

        if (!privacyConsent.checked) { // Vérifie si la case à cocher n'est pas cochée
            alert("Vous devez accepter la Politique de confidentialité avant de soumettre."); // Alerte l'utilisateur
            e.preventDefault(); // Empêche l'envoi du formulaire
        }
    });
});

// Observer les sections pour ajouter la classe 'in-view'
document.addEventListener("DOMContentLoaded", function () { // S'assure que le DOM est complètement chargé
    const sections = document.querySelectorAll('.section'); // Sélectionne toutes les sections

    const observer = new IntersectionObserver((entries) => { // Crée un nouvel observateur d'intersection
        entries.forEach(entry => { // Parcourt chaque entrée
            if (entry.isIntersecting) { // Vérifie si la section est visible
                entry.target.classList.add('in-view'); // Ajoute la classe 'in-view'
            } else {
                entry.target.classList.remove('in-view'); // Retire la classe 'in-view' si elle n'est pas visible
            }
        });
    }, { threshold: 0.1 }); // La section est considérée visible quand 10% de celle-ci est visible

    sections.forEach(section => {
        observer.observe(section); // Observe chaque section
    });
});

// Ajouter un footer
document.addEventListener('DOMContentLoaded', function() { // S'assure que le DOM est complètement chargé
    const footerHTML = `
        <footer style="position: absolute; width: 1737px; background-color: black; 
        color: white; text-align: center; padding: 3px; Margin-top: 820px; z-index: 9999; font-size:16px; margin-left:0;">
            <p>&copy; 2024 Tabbrat mon portfolio. Tous droits réservés.</p>
        </footer>
    `;

    // Sélectionner toutes les sections et ajouter le footer
    const sections = document.querySelectorAll('.section'); // Sélectionne toutes les sections
    sections.forEach(section => {
        section.insertAdjacentHTML('beforeend', footerHTML); // Insère le footer à la fin de chaque section
    });
});

// Ajouter un effet de parallaxe à l'arrière-plan
document.addEventListener('DOMContentLoaded', function() { // S'assure que le DOM est complètement chargé
    window.addEventListener('scroll', function() { // Écoute l'événement de défilement de la fenêtre
        const parallax = document.querySelector('.parallax'); // Sélectionne l'élément avec la classe 'parallax'

        if (parallax) { // Vérifie si l'élément existe
            let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; // Récupère la position de défilement
            parallax.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)'; // Applique un décalage en fonction de la position de défilement
        }
    });

    // Gérer la pluie
    const rainContainer = document.getElementById('rain'); // Sélectionne le conteneur pour les gouttes de pluie

    function createDrop() { // Fonction pour créer une goutte de pluie
        const drop = document.createElement('div'); // Crée un nouvel élément div
        drop.classList.add('drop'); // Ajoute la classe 'drop'

        // Positionne la goutte de pluie à un endroit aléatoire en haut de l'écran
        drop.style.left = Math.random() * 92 + 'vw'; // Positionne chaque goutte de pluie de manière aléatoire sur 57.5% de la largeur de l'écran
        drop.style.animationDuration = Math.random() * 1 + 0.5 +  's'; // Durée aléatoire entre 0.5 et 1.5 secondes

        // Ajoute la goutte au conteneur
        rainContainer.appendChild(drop); // Ajoute la goutte au conteneur de pluie

        // Supprime la goutte après qu'elle soit tombée pour éviter l'accumulation
        drop.addEventListener('animationend', () => {
            drop.remove(); // Supprime la goutte une fois l'animation terminée
        });
    }

    // Génère des gouttes de pluie à intervalle régulier
    setInterval(createDrop, 150); // Crée une goutte toutes les 200ms
});

// Sélectionner l'élément avec la classe .contact-form
const contactForm = document.querySelector('.contact-form');

// Ajouter un événement 'click' pour désactiver l'animation
contactForm.addEventListener('click', function() {
  // Supprimer l'animation en modifiant la propriété CSS
  contactForm.style.animation = 'none';
});
  // Attendre que le document soit complètement chargé
  document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('.contact-form');

    // Écouter le clic sur le formulaire
    contactForm.addEventListener('click', function() {
      // Masquer les arcs en ajoutant la classe 'hidden' à leurs pseudo-éléments
      contactForm.classList.add('hidden-arcs');
    });
  });
// Sélectionner toutes les cartes du carrousel
const carouselFaces = document.querySelectorAll('.carousel__face');

// Sélectionner le conteneur de la carte cliquée
const clickedCardContainer = document.querySelector('.clicked-card-container');
const clickedCard = document.querySelector('.clicked-card');

// Ajouter un écouteur d'événement à chaque carte
carouselFaces.forEach(face => {
    face.addEventListener('click', function() {
        // Copier le contenu de la carte cliquée dans le conteneur
        clickedCard.innerHTML = this.innerHTML;
        
        // Afficher la carte agrandie dans le conteneur
        clickedCardContainer.classList.add('active');
    });
});

// Ajouter un écouteur pour fermer la carte lorsqu'on clique à l'extérieur
clickedCardContainer.addEventListener('click', function() {
    clickedCardContainer.classList.remove('active');
});



