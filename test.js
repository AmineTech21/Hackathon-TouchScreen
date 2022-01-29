n =  new Date();
y = n.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const dayNames = [
    "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
];
m = monthNames[n.getMonth()];
date = n.getDate();
day = dayNames[n.getDay()];
document.getElementById("dateid").innerHTML = date + " " + m + ", " + y;
document.getElementById("dayname").innerHTML = day;
