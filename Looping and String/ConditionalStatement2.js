let testType = "sanity";
switch (testType) {
    case "smoke":
        console.log("Running Smoke Tests");
        break;
    case "sanity":
        console.log("Running Sanity Tests");
        break;
    case "regression":
        console.log("Running Regression Tests");
        break;
    default:
        console.log("Running Smoke Tests");
}