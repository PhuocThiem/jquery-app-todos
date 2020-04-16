document.createElement('script');

//Check access token

const checkToken = (token) => {
  if (token) {
    return null;
  } else return $(location).attr('href', 'http://localhost:3000');
};

//Log in

const logIn = () => {
  return $('#btn').click(function (e) {
    const email = $('#Email').val().trim();
    const password = $('#Password').val().trim();

    const data = { email, password };
    e.preventDefault();
    console.log('Clicked', email, password);
    if (email && password) {
      $.ajax({
        contentType: 'application/json',
        url: 'https://cors-anywhere.herokuapp.com/https://node-heroku-todo-api.herokuapp.com/users/login',
        type: 'post',
        data: JSON.stringify(data),
      })
        .done((data, textStatus, request) => {
          const token = request.getResponseHeader('x-auth');
          console.log('token', token);
          localStorage.setItem('token', token);
          sessionStorage.setItem('email', email);
          if (token) {
            $(location).attr('href', 'http://localhost:3000/pages/home/index.html?');
          }
        })
        .fail((data) => {
          console.log('fail data: ', data);
          if (data.status == 400) {
            $('#error-msg').html('Email or password is incorrect!');
          }
        });
    } else {
      $('#error-msg').html('Email and password are required!');
      $('#btn').attr('disabled', true)
    }
  });
};

//Log out

const logOut = (token) => {
  return $('#logout-btn').click(() => {
    localStorage.removeItem('token');
    $(location).attr('href', 'http://localhost:3000/');
    console.log('token: ', token);
  });
};


// Register

const signUp = () => {
  $('#btn').click((e)=> {

    const email = $('#Email').val().trim()
    const password = $('#Password').val().trim()
    const data = { email,password }
    console.log('data request', data)

    e.preventDefault();

    $.ajax({
      contentType: 'application/json',
      url: 'https://cors-anywhere.herokuapp.com/https://node-heroku-todo-api.herokuapp.com/users',
      type: 'post',
      data: JSON.stringify(data)
    })
    .done((data, textStatus, request) => {
      const token = request.getResponseHeader('x-auth');
      console.log('success data', data)
      
      sessionStorage.setItem('email', data.email)
      localStorage.setItem('token', token)

      $(location).attr('href', 'http://localhost:3000/pages/home/index.html?')

    })
    .fail((err) => {
      console.log('failed', err)
    })
  })
}
