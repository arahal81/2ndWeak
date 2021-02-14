'use strict';
let time = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ']
//1st list 
let Branche1 = {
    location: 'Seattle',
    Min_Cust: 23,
    Max_Cust: 65,
    Avg_Cookies: 6.3,
    Cust_each_hour: [],
    Cookies_sold_each_hour: [],
    total: 0,
    get_Cust_each_hour: function () {

        for (let i = 0; i < time.length; i++) {
            this.Cust_each_hour[i] = randomAvg(this.Min_Cust, this.Max_Cust);
            //console.log(this.Cust_each_hour[i]);
            this.Cookies_sold_each_hour[i] = Math.floor(this.Avg_Cookies * this.Cust_each_hour[i]);
            //console.log(this.Cookies_sold_each_hour[i]);
            this.total += this.Cookies_sold_each_hour[i];
        }

        //console.log(this.Cookies_sold_each_hour + ' cook');
        //console.log(this.Cust_each_hour + ' cust');
    }
}
Branche1.get_Cust_each_hour();

let Branche2 = {
    location: 'Tokyo',
    Min_Cust: 3,
    Max_Cust: 24,
    Avg_Cookies: 1.2,
    Cust_each_hour: [],
    Cookies_sold_each_hour: [],
    total: 0,
    get_Cust_each_hour: function () {
        for (let i = 0; i < time.length; i++) {
            this.Cust_each_hour[i] = randomAvg(this.Min_Cust, this.Max_Cust);
            //console.log(this.Cust_each_hour[i]);
            this.Cookies_sold_each_hour[i] = Math.floor(this.Avg_Cookies * this.Cust_each_hour[i]);
            // console.log(this.Cookies_sold_each_hour[i]);
            this.total += this.Cookies_sold_each_hour[i];
        }
        //console.log(this.Cookies_sold_each_hour + ' cook');
        //console.log(this.Cust_each_hour + ' cust');
    }
    /* get_Cookies_sold_each_hour: function () {
        for (let i = 0; i < time.length; i++) {
            this.Cust_each_hour[i] = randomAvg(this.Min_Cust, this.Max_Cust);
        }
    }*/
}
Branche2.get_Cust_each_hour();

let Branche3 = {
    location: 'Dubai',
    Min_Cust: 11,
    Max_Cust: 38,
    Avg_Cookies: 3.7,
    Cust_each_hour: [],
    Cookies_sold_each_hour: [],
    total: 0,
    get_Cust_each_hour: function () {
        for (let i = 0; i < time.length; i++) {
            this.Cust_each_hour[i] = randomAvg(this.Min_Cust, this.Max_Cust);
            //console.log(this.Cust_each_hour[i]);
            this.Cookies_sold_each_hour[i] = Math.floor(this.Avg_Cookies * this.Cust_each_hour[i]);
            //console.log(this.Cookies_sold_each_hour[i]);
            this.total += this.Cookies_sold_each_hour[i];
        }
        //console.log(this.Cookies_sold_each_hour + ' cook');
        //console.log(this.Cust_each_hour + ' cust');
    }
    /* get_Cookies_sold_each_hour: function () {
        for (let i = 0; i < time.length; i++) {
            this.Cust_each_hour[i] = randomAvg(this.Min_Cust, this.Max_Cust);
        }
    }*/
}
Branche3.get_Cust_each_hour();

let Branche4 = {
    location: 'Paris',
    Min_Cust: 20,
    Max_Cust: 38,
    Avg_Cookies: 2.3,
    Cust_each_hour: [],
    Cookies_sold_each_hour: [],
    total: 0,
    get_Cust_each_hour: function () {
        for (let i = 0; i < time.length; i++) {
            this.Cust_each_hour[i] = randomAvg(this.Min_Cust, this.Max_Cust);
            //console.log(this.Cust_each_hour[i]);
            this.Cookies_sold_each_hour[i] = Math.floor(this.Avg_Cookies * this.Cust_each_hour[i]);
            //console.log(this.Cookies_sold_each_hour[i]);
            this.total += this.Cookies_sold_each_hour[i];
        }
        //console.log(this.Cookies_sold_each_hour + ' cook');
        //console.log(this.Cust_each_hour + ' cust');
    }

}
Branche4.get_Cust_each_hour();

let Branche5 = {
    location: 'Lima',
    Min_Cust: 2,
    Max_Cust: 16,
    Avg_Cookies: 4.6,
    Cust_each_hour: [],
    Cookies_sold_each_hour: [],
    total: 0,
    get_Cust_each_hour: function () {


        for (let i = 0; i < time.length; i++) {
            this.Cust_each_hour[i] = randomAvg(this.Min_Cust, this.Max_Cust);
            //console.log(this.Cust_each_hour[i]);
            this.Cookies_sold_each_hour[i] = Math.floor(this.Avg_Cookies * this.Cust_each_hour[i]);
            //console.log(this.Cookies_sold_each_hour[i]);
            this.total += this.Cookies_sold_each_hour[i];
        }

    }

}
Branche5.get_Cust_each_hour();

function randomAvg(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let parent = document.getElementById('Branches');
let uL1 = document.createElement('ul');
uL1.textContent = Branche1.location;
parent.appendChild(uL1);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL1.appendChild(listItem);
    listItem.textContent = time[i] + Branche1.Cookies_sold_each_hour[i] + '  cookies';
    if (i == time.length - 1) {
        uL1.appendChild(listItem);
        listItem.textContent = `total: ${Branche1.total} cookies`;
    }
}

//list2

let uL2 = document.createElement('ul');
uL2.textContent = Branche2.location;
parent.appendChild(uL2);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL2.appendChild(listItem);
    listItem.textContent = time[i] + Branche2.Cookies_sold_each_hour[i] + '  cookies';
    if (i == time.length - 1) {
        uL2.appendChild(listItem);
        listItem.textContent = `total: ${Branche2.total} cookies`;
    }
}
let uL3 = document.createElement('ul');
uL3.textContent = Branche3.location;
parent.appendChild(uL3);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL3.appendChild(listItem);
    listItem.textContent = time[i] + Branche3.Cookies_sold_each_hour[i] + '  cookies';
    if (i == time.length - 1) {
        uL3.appendChild(listItem);
        listItem.textContent = `total: ${Branche3.total} cookies`;
    }
}
let uL4 = document.createElement('ul');
uL4.textContent = Branche4.location;
parent.appendChild(uL4);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL4.appendChild(listItem);
    listItem.textContent = time[i] + Branche4.Cookies_sold_each_hour[i] + '  cookies';
    if (i == time.length - 1) {
        uL4.appendChild(listItem);
        listItem.textContent = `total: ${Branche4.total} cookies`;
    }
}


let uL5 = document.createElement('ul');
uL5.textContent = Branche5.location;
parent.appendChild(uL5);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL5.appendChild(listItem);
    listItem.textContent = time[i] + Branche5.Cookies_sold_each_hour[i] + '  cookies';
    if (i == time.length - 1) {
        uL5.appendChild(listItem);
        listItem.textContent = `total: ${Branche5.total} cookies`;
    }
}