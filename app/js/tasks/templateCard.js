const generateTemplate = (td, createDate, completeDate) => {

  return $('.scroll-list').append(
    `<div id="card" class="${td._id}"><div class="taskStatus"><input type="text" id="text-form-${td._id}" class="form-control" value="${td.text}"><div class="icon icon-${td._id}"><input type="checkbox" id="vehicle1-${td._id}" class="input-${td._id}" value="false" style="transform : scale(2)"></div></div><div class="taskTimer"><p>Created date: ${createDate}</p><p>Completed date: ${completeDate}</p></div><div class="action"><button class="btn btn-primary update-btn" onclick="changeStatus('${td._id}',$('#text-form-${td._id}').val(),$('#vehicle1-${td._id}').is(':checked'))"><i class="material-icons" style="font-size:30px;color:green" data-update-id="${td._id}">cloud_upload</i></button><button class="btn btn-primary delete-btn"  data-delete-id="${td._id}"><i class="material-icons" style="font-size:30px;color:red" data-delete-id="${td._id}">delete_forever</i></button></div></div>`
  );
};
