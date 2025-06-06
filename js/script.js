// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use scrict"

/**
 * This function checks if the user is eligible for a student discount.
 */
function checkForDiscount() {
  const userAge = parseInt(document.getElementById('user-age').value)
  const dayOfWeek = document.getElementById('day-of-week').value

  // process
  if ((dayOfWeek == "Tuesday" || dayOfWeek == "Thursday") || (userAge > 12 && userAge < 21)) {
    document.getElementById('result').innerHTML =
      '<p>You are eligible for student pricing!</p>'
  }
  else {
    document.getElementById('result').innerHTML =
      '<p>You must pay the regular price.</p>'
  }
}
