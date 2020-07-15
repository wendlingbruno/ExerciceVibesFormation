$(".goutte").on("click", function(){
        $("body").toggleClass("background2"); // le fond
        $(".goutteCache,.goutteVisible").toggleClass(["goutteCache","goutteVisible"]); // changer l'icône de la goutte
        $(".couleurRose,.couleurBleu").toggleClass(["couleurBleu","couleurRose"]); // l'idée c'est d'optimiser et de tout changer en même temps
        $(".boutonCouleurRose,.boutonCouleurBleu").toggleClass(["boutonCouleurBleu","boutonCouleurRose"]); // changer certains boutons de couleur
        $(".ligneRouge,.ligneBleu").toggleClass(["ligneBleu","ligneRouge"]); // changer les lignes de couleur
        $(".ligneRouge2,.ligneBleu2").toggleClass(["ligneBleu2","ligneRouge2"]); // changer les lignes de couleur
        $(".backgroundBlanc,.backgroundGris").toggleClass(["backgroundBlanc","backgroundGris"]); // on change les fonds
        $("section").toggleClass("texteBlanc"); // changement de couleur de texte
        $(".formulaireBoutonRose,.formulaireBoutonViolet").toggleClass(["bformulaireBoutonRose","formulaireBoutonViolet"]); // changer certains boutons de couleur

})

$("[data-type=boutonLoadMore]").on("click",function(){
        $(".cacher").toggleClass("cacher"); // fait apparaître le reste de la galerie
        $(this).toggleClass("cacher"); // fait disparaître le bouton
})


$("[data-type=audio2").on("click", function(){ // afficher uniquement les musiques
        if($("body").hasClass("background2")){ // vérifier si mode sombre activé
                $(this).addClass("couleurBleu");
        }else {
                $(this).addClass("couleurRose");
        }
        $(this).addClass("couleurRose");

        $("[data-type=all]").removeClass("couleurRose"); // tout est adapté pour fonctionner avec et sans mode sombre en temps réel
        $("[data-type=video2]").removeClass("couleurRose");
        $("[data-type=image2]").removeClass("couleurRose");
        
        
        $("[data-type=all]").removeClass("couleurBleu");
        $("[data-type=video2]").removeClass("couleurBleu");
        $("[data-type=image2]").removeClass("couleurBleu");

        $("[data-type=all]").addClass("couleurGrise");
        $("[data-type=all]").removeClass("couleurRose");
        $("[data-type=video2]").addClass("couleurGrise");
        $("[data-type=image2]").addClass("couleurGrise");
        $("[data-type=audio2]").removeClass("couleurGrise"); 

        $("[data-type=video]").addClass("cacherImage"); // on cache ce que l'on ne veut pas voir, ici tout sauf les musiques
        $("[data-type=image]").addClass("cacherImage");
        $("[data-type=music]").removeClass("cacherImage");
})

$("[data-type=all").on("click", function(){ // afficher tous les formats
        if($("body").hasClass("background2")){
                $(this).addClass("couleurBleu");
        }else {
                $(this).addClass("couleurRose");
        }

        $("[data-type=video2]").removeClass("couleurRose");
        $("[data-type=image2]").removeClass("couleurRose");
        $("[data-type=audio2]").removeClass("couleurRose");

        $("[data-type=video2]").removeClass("couleurBleu");
        $("[data-type=image2]").removeClass("couleurBleu");
        $("[data-type=audio2]").removeClass("couleurBleu");

        $("[data-type=all]").removeClass("couleurGrise");
        $("[data-type=video2]").addClass("couleurGrise");
        $("[data-type=image2]").addClass("couleurGrise");
        $("[data-type=audio2]").addClass("couleurGrise");

        $("[data-type=video]").removeClass("cacherImage");
        $("[data-type=image]").removeClass("cacherImage");
        $("[data-type=music]").removeClass("cacherImage");
})

$("[data-type=video2").on("click", function(){ // afficher uniquement les vidéos
        if($("body").hasClass("background2")){
                $(this).addClass("couleurBleu");
        }else {
                $(this).addClass("couleurRose");
        }

        $("[data-type=all]").removeClass("couleurRose");
        $("[data-type=image2]").removeClass("couleurRose");
        $("[data-type=audio2]").removeClass("couleurRose");

        $("[data-type=all]").removeClass("couleurBleu");
        $("[data-type=image2]").removeClass("couleurBleu");
        $("[data-type=audio2]").removeClass("couleurBleu");

        $("[data-type=all]").addClass("couleurGrise");
        $("[data-type=video2]").removeClass("couleurGrise");
        $("[data-type=image2]").addClass("couleurGrise");
        $("[data-type=audio2]").addClass("couleurGrise");  

        $("[data-type=video]").removeClass("cacherImage");
        $("[data-type=image]").addClass("cacherImage");
        $("[data-type=music]").addClass("cacherImage");
})

$("[data-type=image2").on("click", function(){ // afficher uniquement les images
        if($("body").hasClass("background2")){
                $(this).addClass("couleurBleu");
        }else {
                $(this).addClass("couleurRose");
        }

        $("[data-type=all]").removeClass("couleurRose");
        $("[data-type=video2]").removeClass("couleurRose");
        $("[data-type=audio2]").removeClass("couleurRose");

        $("[data-type=all]").removeClass("couleurBleu");
        $("[data-type=video2]").removeClass("couleurBleu");
        $("[data-type=audio2]").removeClass("couleurBleu");

        $("[data-type=all]").addClass("couleurGrise");
        $("[data-type=video2]").addClass("couleurGrise");
        $("[data-type=image2]").removeClass("couleurGrise");
        $("[data-type=audio2]").addClass("couleurGrise");

        $("[data-type=video]").addClass("cacherImage");
        $("[data-type=image]").removeClass("cacherImage");
        $("[data-type=music]").addClass("cacherImage");
})


$("[data-type=liste]").on("click",function(){ // menu accordéon fait maison CHANGER
        $(this).find("i").toggleClass(["fa-minus","fa-plus"]); // permet de changer l'icône
        $(this).find("p").toggleClass(["listeMotsC","listeMotsV"]); // affiche le texte caché
})

$(".accordeon-part h4").on("click", function(){
        if (!$(this).parent().hasClass("afficherAccordeon")){
                $("afficherAccordeon").children("p").slideUp(300);

                $(".accordeon-part").removeClass("afficherAccordeon");
                $(this).parent().addClass("afficherAccordeon");

                $("h4 i").removeClass("fa-minus").addClass("fa-plus");
                $(this).find("i").removeClass("fa-plus").addClass("fa-minus");

                $(".accordeon-part").children("p").slideUp(0);
                $(this).siblings("p").slideDown(500);
        };
});



/*new jBox('Modal', {
        width: 300,
        height: 100,
        attach: '.groupeImg2',
        title: 'My Modal Window',
        content: '<i>Hello there!</i>'
      });*/

new jBox('Image');



