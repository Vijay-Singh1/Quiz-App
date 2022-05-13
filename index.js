$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (response) {
  for (i = 0; i < response.length; i++) {
    var a = $("<h3>")
      .text("Question1." + " " + " " + response[i].question)
      .addClass("ques");

    $("#main").append(a);

    for (j = 0; j < 4; j++) {
      var c = $("<label>").addClass("label");
      var b = $("<input type=radio>")
        .addClass("option")
        .attr("Id", [j])
        .attr("name", "q" + [i])
        .attr("value", [j + 1]);
      $(c).append(b);
      var k = $("<span>");
      k.html(response[i].options[j]);
      $(c).append(k);

      $("form").append(c);
    }
    var h = $("<div>").addClass("hr");
    $("#main").append(h);
  }

  var b = $("<button type=submit>")
    .text("Submit")
    .addClass("button")
    .attr("id", "btn");
  $("#main").append(b);

  b.click(function (e) {
    score = 0;
    var l = [];

    var m = $("input[type='radio']:checked");

    o = [];

    for (i = 0; i < response.length; i++) {
      o.push(response[i].answer);
    }

    for (k = 0; k < m.length; k++) {
      l.push(m[k].value);
      if (l[k] == o[k]) {
        score++;
      }
    }

    e.preventDefault();
    
    $("#score").html(score + "/5");
  });
});
