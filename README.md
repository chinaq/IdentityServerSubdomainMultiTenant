##### Identity Server 4 Subdomain Based Multi Tenant Application Example ####

This is an example showing how to implement subdomain multi tenancy in Identity Server 4.

You can follow the tutorial here :

https://lalitacode.com/implement-domain-or-subdomain-based-multi-tenancy-in-identity-server/

if you want to follow the video your can visit this link below :

https://youtu.be/QTmcrCnbZ30

To run this application follow the points belows : 

## In Authorization Project ##

1. Add ConnectionString in your appsettings.json file with "DefaultConnection" connection string to your database.
2. Make the required changes to the database seed in IdentityDbcontext and ConfigurationDbContext. You need to give your client
configuration as per your requirement.
3. Run the migrations for IdentityDbContext and ConfigurationDbContext and update database.
4. Add the TenantId to the AspNetUsers table.

## In API ##
1.Add appsettings.json file with following settings :
        
            "AuthorizationServerUrls": {   
            "AuthorityDomain": "lalita.com:5000",
            "AuthorityScheme": "http" }

## In Angular Client ##
1. Make changes to the client config in app.module.ts as per your requirement.

Finally run the applications with multiple bindings.

