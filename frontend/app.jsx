import React, { useState } from 'react';
import Header from './header;
import ScoreCounter from './score-counter';

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.submit-btn'); // Select the submit button correctly
    btn.onclick = () => {
        alert('You clicked me!');
    };
});