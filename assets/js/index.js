$(($) => {
    $('#ele').on('click', () => {
        copyToClipboard('ele')
    });
    $('#ele').on('click', () => {
        copyToClipboard('ele')
    });
    $('#ele').on('click', () => {
        copyToClipboard('ele')
    });
    $('#ele').on('click', () => {
        copyToClipboard('ele')
    });
})(jQuery)

let copyToClipboard = (ele) => {
    /* Get the text field */
    var copyText = document.getElementById(ele);
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}