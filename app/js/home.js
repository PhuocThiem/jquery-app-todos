document.createElement('script');

window.onload = () => {
  const token = localStorage.getItem('token');

  //Check token to redirect path

  checkToken(token);

  //Get data

  getTasks(token);
};

$(document).ready(() => {
  
  const token = localStorage.getItem('token');

  //Delete task

  deleteTask(token);

  //Update task

  changeTaskStatus(token);

  //Create a new task

  createNewTask(token);

  //Log out

  logOut(token);
});
