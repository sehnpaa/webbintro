$(function() {
    $( ".box" ).hide()
    $( "#introduktion" ).show();
    $( "#btn_introduktion" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#introduktion" ).show();        
    });
    $( "#btn_regler" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#regler" ).show();        
    });
    $( "#btn_itpolicy" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#itpolicy" ).show();
    });
    $( "#btn_inloggning" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#inloggning" ).show();        
    });
    $( "#btn_programfonstret" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#programfonstret" ).show();        
    });
    $( "#btn_libreoffice" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#libreoffice" ).show();        
    });
    $( "#btn_sparafiler" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#sparafiler" ).show();
    });
    $( "#btn_skrivare" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#skrivare" ).show();
    });
    $( "#btn_intranet" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#intranet" ).show();
    });
    $( "#btn_groupwise" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#groupwise" ).show();
    });
    $( "#btn_sakerhet" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#sakerhet" ).show();
    });
    $( "#btn_nycklar" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#nycklar" ).show();
    });
    $( "#btn_telefoni" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#telefoni" ).show();
    });
    $( "#btn_itsupport" ).click(function( event ) {
        event.preventDefault();
        $( ".box" ).hide();
        $( "#itsupport" ).show();
    });

});