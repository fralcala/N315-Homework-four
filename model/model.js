export function changePage(pageName) {
  console.log("pageName", pageName);
  if (pageName == "") {
    $.get("pages/home.html", (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
      Swal.fire({
        title: "Error, choose a diffrent page",
        text: `${error.statusText}`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    });
  } else {
    $.get(`pages/${pageName}.html`, (data) => {
      $("#app").html(data);
    }).fail((error) => {
      console.log("error", error);
      Swal.fire({
        title: "Error, choose a diffrent page",
        text: `${error.statusText}`,
        icon: "error",
        confirmButtonText: "Ok",
      });
    });
  }
}
