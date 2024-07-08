using CollaborativeDocEditor.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace CollaborativeDocEditor.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class LoginController : ControllerBase
    {

        [HttpPost("login")]
        public async Task<ActionResult<UserModel>> LoginAsync([FromBody] UserModel model)
        {
            await Task.Delay(2000); // Simulate waiting for data.

            return model;
        }

        [HttpPost("successSign")]
        public async Task<ActionResult<UserModel>> successSign([FromBody] UserModel model)
        {
            await Task.Delay(2000); // Simulate waiting for data.

            return model;
        }

        [HttpPost("signup")]
        public async Task<ActionResult<UserModel>> SignupAsync([FromBody] UserModel model)
        {
         
            await Task.Delay(2000); // Simulate waiting for data.

            return model;
        }
    }
}
