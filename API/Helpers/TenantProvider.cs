using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class TenantProvider
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public TenantProvider(IHttpContextAccessor httpContextAccessor)
            => _httpContextAccessor = httpContextAccessor;

        public string GetCurrentTenant()
        {
            string requestUrl = $"{this._httpContextAccessor.HttpContext.Request.Host}";
            var tenantId = requestUrl.Split('.')[0];
            string authorityDomain = "lalita.com:5000";

            string authorityScheme = "http";
            string authorityUrl = $"{authorityScheme}://{tenantId}.{authorityDomain}";

            return authorityUrl;
        }

    }
}
