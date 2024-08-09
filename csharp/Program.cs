var builder = WebApplication.CreateBuilder(args);
var app 	= builder.Build();
app.MapGet("/", () =>
{
    // Console.WriteLine("Incoming Request.");
    return "Hello, World!";
});
app.Run("http://localhost:8082");
