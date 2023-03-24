using Microsoft.AspNetCore.SignalR;

namespace PsignalR.Hubs
{
    public class ChatHub:Hub
    {
        public async Task sendMessage(string fromUser ,string Message)
        {
            await Clients.All.SendAsync("ReceiveMessage", fromUser, Message);

        }
    }
}
