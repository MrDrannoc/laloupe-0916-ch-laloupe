function navbarController(categorieService) {

    this.categorieService = categorieService;

    $(window).scroll(function() {
        if ($(window).scrollTop() > $('#scrollspy').height()) {
            $('#push').addClass('navbar-fixed');
              $('#urgenceHide').addClass('ng-hide');
              $('.group-btn').show();
            $('#topFixed').css({
                'margin-top': '64px'
            });
        }
        if ($(window).scrollTop() < $('#scrollspy').height()) {
            $('#push').removeClass('navbar-fixed');
            $('#topFixed').css({
                'margin-top': '0'
            });
        }
    });
    this.isToggled = false;
    this.toggleEmergencies = () => {
        this.isToggled = !this.isToggled;
        console.log(this.isToggled);
        if (this.isToggled === true) {
          $('.group-btn').hide();
        } else {
          $('.group-btn').show();
        }
    };

    this.loadCategories = () => {
        this.categorieService.getChildrenOf('0').then((res) => {
            this.categories = res.data;
            setTimeout(function() {
                $(".dropdown-button").dropdown();
            }, 0);
        });
    };
    this.loadCategories();

}
