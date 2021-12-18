n =  new Date();
y = n.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
m = monthNames[n.getMonth()];
d = n.getDate();
document.getElementById("dateid").innerHTML = d + " " + m + " " + y;

feather.replace();
