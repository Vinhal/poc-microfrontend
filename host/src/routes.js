import app1Routes from "app1/routes";
import app2Routes from "app2/routes";

console.log({
    app1Routes,
    app2Routes,
})

export default [
    ...app1Routes,
    ...app2Routes,
];
