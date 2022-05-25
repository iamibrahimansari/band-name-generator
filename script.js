"use strict";

let city_name = document.getElementById("city_name");
let pet_name = document.getElementById("pet_name");
let output_btn = document.querySelector(".output-btn");

function submit() {
    output_btn.innerHTML = city_name.value + " " + pet_name.value;
}
