//Validate Email field

const validateEmail = () => {
  return $('#Email').keyup(() => {
    if ($('#Email').val().length < 9) {
      $('#error-msg').html('Email must be at least 9 characters!');
      $('#btn').attr('disabled', true)
    } else {
      $('#error-msg').html('');
      $('#btn').attr('disabled', false)
    }
  });
};

//Validate Password field

const validatePassword = () => {
  return $('#Password').keyup(() => {
    if ($('#Password').val().length < 8) {
      $('#error-msg').html('Password must be at least 8 characters!');
      $('#btn').attr('disabled', true)
    } else {
      $('#error-msg').html('');
      $('#btn').attr('disabled', false)
    }
  });
};

//Confirm password

const confirmPassword = () => {
  return $('#confirmPassword').keyup(() => {
    if ($('#confirmPassword').val() !== $('#Password').val()) {
      $('#error-msg').html('Password and confirm password does not match!');
      $('#btn').attr('disabled', true)
    } else {
      $('#error-msg').html('')
      $('#btn').attr('disabled', false)
    }
  });
};
