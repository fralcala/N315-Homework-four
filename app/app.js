import { changePage } from "../model/model.js";

function initListeners() {
  $("#signin").on("click", (e) => {
    console.log("open modal");
    $(".modal, .alert-panel").css("display", "flex");
    $(".loader").css("display", "none");
    openModal();
  });

  $("#submit").on("click", (e) => {
    console.log("submit");
    $(".submit").css("display", "none");
    $(".buttons").css("justify-content", "center");
    $(".close").css({ "background-color": "black", color: "white" });
    openModal(`Sign-in successful`);
  });

  $(".close-modal").on("click", (e) => {
    console.log("click modal");
    $(".modal").css("display", "none");
  });
}

function openModal(feedbackText) {
  $(".feedback").html(feedbackText);
  $(".modal").css("display", "flex");
}

$(window).on("load", function () {
  console.log("loaded");
  $(".modal").css("display", "none");
});

function route() {
  let hashtag = window.location.hash;
  let pageID = hashtag.replace("#", "");
  console.log("route ", pageID);
  changePage(pageID);
}

function initSite() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initListeners();
  initSite();
});
