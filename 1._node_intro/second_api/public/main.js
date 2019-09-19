$(document).ready(() => {
    const aboutMeForm = $('#aboutMeForm');
    console.log(aboutMeForm);

    $(aboutMeForm).submit(function() {
        const app = $('#app');

        $.ajax({
            method: 'POST',
            url: '/me',
            data: aboutMeForm.serialize(),
            dataType: 'JSON'
        })
        .done((data) => {
            console.log(data);
            $(app).text(data.firstName + ' ' + data.lastName);
        })
        .fail(() => {
            $(app).text('Cannot process your request');
        })

        return false;
    })
})