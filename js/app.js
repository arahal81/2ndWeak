'use strict';
let time = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
/*//1st list 
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

}
let listItem = document.createElement('li');
uL1.appendChild(listItem);
listItem.textContent = `total: ${Branche1.total} cookies`;
//list2

let uL2 = document.createElement('ul');
uL2.textContent = Branche2.location;
parent.appendChild(uL2);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL2.appendChild(listItem);
    listItem.textContent = time[i] + Branche2.Cookies_sold_each_hour[i] + '  cookies';

}
let listItem1 = document.createElement('li');
uL2.appendChild(listItem1);
listItem1.textContent = `total: ${Branche2.total} cookies`;

//list3
let uL3 = document.createElement('ul');
uL3.textContent = Branche3.location;
parent.appendChild(uL3);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL3.appendChild(listItem);
    listItem.textContent = time[i] + Branche3.Cookies_sold_each_hour[i] + '  cookies';

}
let listItem2 = document.createElement('li');
uL3.appendChild(listItem2);
listItem2.textContent = `total: ${Branche3.total} cookies`;

//list4
let uL4 = document.createElement('ul');
uL4.textContent = Branche4.location;
parent.appendChild(uL4);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL4.appendChild(listItem);
    listItem.textContent = time[i] + Branche4.Cookies_sold_each_hour[i] + '  cookies';

}
let listItem3 = document.createElement('li');
uL4.appendChild(listItem3);
listItem3.textContent = `total: ${Branche4.total} cookies`;



//list5
let uL5 = document.createElement('ul');
uL5.textContent = Branche5.location;
parent.appendChild(uL5);

for (let i = 0; i < time.length; i++) {
    let listItem = document.createElement('li');
    uL5.appendChild(listItem);
    listItem.textContent = time[i] + Branche5.Cookies_sold_each_hour[i] + '  cookies';

}
let listItem4 = document.createElement('li');
uL5.appendChild(listItem4);
listItem4.textContent = `total: ${Branche5.total} cookies`;*/
let branshs = [];
function Salamon(location, Min_Cust, Max_Cust, Avg_Cookies) {
    this.location = location;
    this.Min_Cust = Min_Cust;
    this.Max_Cust = Max_Cust;
    this.Avg_Cookies = Avg_Cookies;
    this.Cust_each_hour = [];
    this.Cookies_sold_each_hour = [];
    this.total = 0;
    branshs.push(this);
}
Salamon.prototype.get_Cust_each_hour = function () {

    for (let i = 0; i < time.length; i++) {
        this.Cust_each_hour[i] = randomAvg(this.Min_Cust, this.Max_Cust);
        //console.log(this.Cust_each_hour[i]);

    }
}
Salamon.prototype.get_Cookies_sold_each_hour = function () {

    for (let i = 0; i < time.length; i++) {

        this.Cookies_sold_each_hour[i] = Math.floor(this.Avg_Cookies * this.Cust_each_hour[i]);
        //console.log(this.Cookies_sold_each_hour[i]);
        this.total += this.Cookies_sold_each_hour[i];
    }
}

//get random avg
function randomAvg(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = new Salamon('Seattle', 23, 65, 6.3);
//seattle.get_Cust_each_hour();
//seattle.get_Cookies_sold_each_hour();

let tokyo = new Salamon('Tokyo', 23, 65, 6.3);
//tokyo.get_Cust_each_hour();
//tokyo.get_Cookies_sold_each_hour();


let dubai = new Salamon('Dubai', 3, 24, 1.2);
//dubai.get_Cust_each_hour();
//dubai.get_Cookies_sold_each_hour();



let paris = new Salamon('Paris', 20, 38, 2.3);
//paris.get_Cust_each_hour();
//paris.get_Cookies_sold_each_hour();

let lima = new Salamon('Lima', 2, 16, 4.6);
//lima.get_Cust_each_hour();
//lima.get_Cookies_sold_each_hour();

let tot = {
    total: [],

    get_tot: function () {
        this.total[time.length] = 0
        for (let j = 0; j < time.length; j++) {
            let temp_tot = 0
            for (let i = 0; i < branshs.length; i++) {
                temp_tot += branshs[i].Cookies_sold_each_hour[j];

                //seattle.Cookies_sold_each_hour[i] + tokyo.Cookies_sold_each_hour[i] + dubai.Cookies_sold_each_hour[i] + paris.Cookies_sold_each_hour[i] + lima.Cookies_sold_each_hour[i];
            }
            this.total[j] = temp_tot;
            this.total[time.length] += temp_tot;
        }

    }

}




let parent;
let table;
function render_thr() {
    parent = document.getElementById('Branches');
    table = document.createElement('table');
    parent.appendChild(table);
    let hr = document.createElement('tr');
    table.appendChild(hr);
    let th = document.createElement('th');
    hr.appendChild(th);
    th.textContent = "Branch Name";

    for (let i = 0; i < time.length; i++) {
        let th = document.createElement('th');
        hr.appendChild(th);
        th.textContent = time[i];
    }
    let th1 = document.createElement('th');
    hr.appendChild(th1);
    th1.textContent = "Daily Location Total";
}


Salamon.prototype.render_td = function () {
    let tdr = document.createElement('tr');
    table.appendChild(tdr);
    let td = document.createElement('td');
    tdr.appendChild(td);
    td.textContent = this.location;

    for (let i = 0; i < time.length; i++) {
        let td = document.createElement('td');
        tdr.appendChild(td);
        td.textContent = this.Cookies_sold_each_hour[i];
    }
    let td1 = document.createElement('td');
    tdr.appendChild(td1);
    td1.textContent = this.total;
}
function render_tot() {
    let tdr = document.createElement('tr');
    table.appendChild(tdr);
    let td = document.createElement('th');
    tdr.appendChild(td);
    td.textContent = "Total";

    for (let i = 0; i <= time.length; i++) {
        let td = document.createElement('th');
        tdr.appendChild(td);
        td.textContent = tot.total[i];

    }

}

let bransh = document.getElementById('bransh');
bransh.addEventListener('submit', addNewBransh);

function addNewBransh(event) {
    event.preventDefault();
    console.log(event);
    let location = event.target.bransh_location.value;
    console.log(location);
    let minmum_cust = event.target.min_cust.value;
    console.log(minmum_cust);
    let maximum_cust = event.target.max_cust.value;
    console.log(maximum_cust);
    let avg_cookies_perH = event.target.avg_cookies_perH.value;
    console.log(avg_cookies_perH);
    let new_bransh = new Salamon(location, minmum_cust, maximum_cust, avg_cookies_perH);
    parent.textContent = '';
    render_thr();
    for (let i = 0; i < branshs.length; i++) {
        branshs[i].get_Cust_each_hour();
        //console.log(branshs[i]);
        branshs[i].get_Cookies_sold_each_hour();
        branshs[i].render_td();
    }

    tot.get_tot();
    //console.log(tot.total);
    render_tot();
}

render_thr();
for (let i = 0; i < branshs.length; i++) {
    branshs[i].get_Cust_each_hour();
    //console.log(branshs[i]);
    branshs[i].get_Cookies_sold_each_hour();
    branshs[i].render_td();
}

tot.get_tot();
render_tot();
/*
seattle.render_td();
tokyo.render_td();
dubai.render_td();
paris.render_td();
lima.render_td();*/

