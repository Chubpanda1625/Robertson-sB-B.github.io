if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
            
            document.querySelector('.map-container').style.display = 'none';
        } else {
            
            document.querySelector('.map-container').style.display = 'block';
        }
    });
}