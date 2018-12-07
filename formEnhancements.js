$(function() {
    $("#passwordHint").hide();
    // make sure that there is data entered in the inputs
    $("input").bind("change paste keyup", function() {
        $("#submitButton").attr("disabled", "disabled");
        $("#submitButton").addClass("disabled");
        let validated = false;
        if (usernameIsValid() && emailIsValid() && passwordIsValid())
            validated = true;

        if (validated) {
            $("#submitButton").removeAttr("disabled");
            $("#submitButton").removeClass("disabled");
        }
    });

    // Toggle the show password
    $("input[type=checkbox]").on("click", function() {
        toggleShowPassword();
    });
});

function usernameIsValid() {
    if ($("#usernameInput").val().length > 0) {
        $("#usernameInput").css("border-color", "green");
        return true;
    } else {
        $("#usernameInput").css("border-color", "red");
    }
    return false;
}

function emailIsValid() {
    let value = $("#emailInput").val();
    let validEmailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (value.length > 0) {
        if (validEmailPattern.test(value)) {
            $("#emailInput").css("border-color", "green");
            return true;
        }
    }
    $("#emailInput").css("border-color", "red");
    return false;
}

function passwordIsValid() {
    let value = $("#passwordInput").val();
    let validPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (value.length > 0) {
        if (validPasswordPattern.test(value)) {
            $("#passwordHint").hide();
            $("#passwordInput").css("border-color", "green");
            return true;
        } else {
            $("#passwordHint").show();
            $("#passwordInput").css("border-color", "red");
        }
    }
    return false;
}

function toggleShowPassword() {
    let $input = $("#passwordInput");
    if ($input.prop("type") === "password") {
        $input.prop("type", "text");
    } else {
        $input.prop("type", "password");
    }
}
