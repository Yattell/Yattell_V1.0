$(document).ready(function () {

    $("#btnSubmitImg").click(function (event) {

        //stop submit the form, we will post it manually.
        event.preventDefault();

        // Get form
        var form = $('#imageUpload')[0];

		// Create an FormData object
        var data = new FormData(form);

		// If you want to add an extra field for the FormData
        data.append("CustomField", "This is some extra data, testing");

		// disabled the submit button
        $("#btnSubmitImg").prop("disabled", true);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "http://174.138.59.72:3000/",
            crossdomain: true,
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (data) {

                $("#result").text(data);
                console.log("SUCCESS : ", data);
                $("#btnSubmitImg").prop("disabled", false);

            },
            error: function (e) {

                $("#result").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmitImg").prop("disabled", false);

            }
        });

    });

    $("#btnSubmitDoc").click(function (event) {

        // Get form
        var content = $("#article").val();

        $("#commentBox").val("");
        console.log(content);

    // disabled the submit button
        $("#btnSubmitDoc").prop("disabled", true);

        $.ajax({
            type: "POST",
            processData: true,
            url: "http://localhost:3000/documents",
            data: jQuery.param({
              'content': content
            }),
            dataType: "JSON",
            success: function (data) {

                $("#result").text(data);
                console.log("SUCCESS : ", data);
                $("#btnSubmitDoc").prop("disabled", false);

            },
            error: function (e) {

                $("#result").text(e.responseText);
                console.log("ERROR : ", e);
                $("#btnSubmitDoc").prop("disabled", false);

            }
        });

    });
});
