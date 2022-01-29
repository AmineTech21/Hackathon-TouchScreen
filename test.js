n =  new Date();
y = n.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const dayNames = [
    "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
];
m = monthNames[n.getMonth()];
d = n.getDate();
day = dayNames[n.getDay()];
document.getElementById("dateid").innerHTML = d + " " + m + ", " + y;
document.getElementById("dayname").innerHTML = day;

feather.replace();
