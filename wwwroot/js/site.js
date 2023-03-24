var connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .configureLogging(signalR.LogLevel.Information)
    .build();
connection.on("ReceiveMessage", function (fromUser, Message) {
    var msg = fromUser + ":" + Message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);
   
});
connection.start();


$("#btnsend").on("click", function () {
    var fromUser = $("#txtuser").val();
    var Message = $("#txtmessage").val();
    connection.invoke("SendMessage", fromUser, Message);
});

