# POC Microfrontend with Shared Context

`POC for Shared React Context in Microfrontend based on Module Federation`

This poc demos a host application wrapped in a UserContextProvider and exports this context and a
custom hook to be used by other applications.

- `host` is the host application 
- `app1` is a Home router application 
- `app1` is a Dashboard router application 

## Running

Run `yarn start` on all projects. This will build and serve both `host`, `app1` and `app1` on ports
3000, 3001 and 3002 respectively.
