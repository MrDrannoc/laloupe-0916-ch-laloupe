function presseController(presseService) {

    this.presseService = presseService;
    $(document).ready(function() {
        $('.collapsible').collapsible({
            accordion: false
        });
        $(document).ready(function() {
            $('select').material_select();
        });

    });
    this.jsScrollTo = function(id) { // Au clic sur un élément
        var page = '#'+id; // Page cible
        var speed = 500; // Durée de l'animation (en ms)
        $('html, body').animate({
            scrollTop: $(page).offset().top - 100
        }, speed); // Go
        return false;
    };
    this.load = () => {
        this.presseService.getAll().then((res) => {
            this.presses = res.data;
        });
    }
    this.load();
}
