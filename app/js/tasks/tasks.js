//Get tasks

const getTasks = (token) => {
  return $.ajax({
    url: 'https://cors-anywhere.herokuapp.com/https://node-heroku-todo-api.herokuapp.com/todos',
    type: 'get',
    headers: {
      'content-Type': 'application/json',
      'X-Auth': token,
    },
  })
    .done((res) => {
      //Generate p tag summary

      $('.action').append(`<p>${sessionStorage.getItem('email')}</p>`);

      //Calculate task's index

      let total = res.todos.length;
      let done = 0;
      res.todos.map((td) => {
        if (td.completed) {
          done = done + 1;
        }
        let todo = total - done;

        //Generate task's index summary

        $('.detail').html('<h3>Total: ' + total + '</h3><h3>Todo: ' + todo + '</h3><h3>Done: ' + done + '</h3>');

        //Format datetime

        var createDate = new Date(td.createdAt).toDateString();

        if (td.completedAt === null) {
          var completeDate = '';
          console.log();
        } else {
          var completeDate = new Date(td.completedAt).toDateString();
        }

        //Generate card to contain task information

        generateTemplate(td, createDate, completeDate);

        if (td.completed) {
          $(`.${td._id}`).css('background-color', 'rgba(168, 254, 209, 0.5)');
          $(`.input-${td._id}`).attr('checked', true);
        } else $(`.input-${td._id}`).attr('checked', false);
      });
      bindDeleteButton();
    })
    .fail((err) => {
      console.log('fail data', err);
    });
};

// Create a new task

const createNewTask = (token) => {
  return $('#create-btn').click((e) => {
    var text = $('#task-input').val();
    e.preventDefault();
    $.ajax({
      contentType: 'application/json',
      url: 'https://cors-anywhere.herokuapp.com/https://node-heroku-todo-api.herokuapp.com/todos',
      type: 'post',
      dataType: 'text',
      headers: {
        'X-Auth': token,
      },
      data: JSON.stringify({ text: text }),
    })
      .done((res) => {
        console.log('post seccess', res);
        location.reload();
      })
      .fail((err) => {
        console.log('post fail', err);
      });
  });
};

//Delete tasks

const deleteTask = (token) => {
  return (bindDeleteButton = () => {
    $('.delete-btn').on('click', (e) => {
      const id = $(e.target).data('deleteId');
      e.preventDefault();
      $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://node-heroku-todo-api.herokuapp.com/todos/${id}`,
        type: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth': token,
        },
      })
        .done((res) => {
          console.log(res);
          location.reload();
        })
        .fail((err) => {
          console.log(err);
        });
    });
  });
};

//Change task's status

const changeTaskStatus = (token) => {
  $('.update-btn').on(
    'click',
    (changeStatus = (id, textTask, completed) => {
      const text = textTask.trim();
      const data = { text, completed };

      $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://node-heroku-todo-api.herokuapp.com/todos/${id}`,
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth': token,
        },
        data: JSON.stringify(data),
      })
        .done((res) => {
          console.log(res);
          location.reload();
        })
        .fail((err) => {
          console.log(err);
        });
    })
  );
};
