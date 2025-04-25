const customers = [
    { name: "Alice", subscriptionFee: 10, active: true },
    { name: "Bob", subscriptionFee: 15, active: false },
    { name: "Charlie", subscriptionFee: 20, active: true },
    { name: "Diana", subscriptionFee: 18, active: true },
    { name: "Ethan", subscriptionFee: 25, active: false }
];

function processCustomers() 
{
    // filter active users 
    const activeCustomers = customers.filter(function(c) {
        return c.active;
    });

    // filter inactive users
    const inactiveCustomers = customers.filter(function(c) {
        return !c.active;
    });

    // mapping Name - $Fee for active users
    const formattedCustomers = activeCustomers.map(function(c) {
        return `${c.name} - $${c.subscriptionFee}`;
    });

    // calculating total revenue using reduce()
    const total = activeCustomers.reduce(function(sum, c) {
        return sum + c.subscriptionFee;
    }, 0);

    // display active customers
    document.getElementById("activeCustomers").innerHTML = activeCustomers
        .map(function(c) {
            return `<li>${c.name}</li>`;
        })
        .join(""); // used to merge the list items into a continuous string that can be inserted into the HTML

    // display inactive customers
    document.getElementById("inactiveCustomers").innerHTML = inactiveCustomers
        .map(function(c) {
            return `<li>${c.name}</li>`;
        })
        .join("");

    // display mapped names + fee
    document.getElementById("formattedCustomers").innerHTML = formattedCustomers
        .map(function(entry) {
            return `<li>${entry}</li>`;
        })
        .join("");

    // display total revenue
    document.getElementById("totalRevenue").textContent =
        `$${total}`;
}
