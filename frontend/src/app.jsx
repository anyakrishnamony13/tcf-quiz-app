import React, { useState } from 'react';
import Header from './components/header'
import ScoreCounter from './components/score-counter';

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.submit-btn'); // Select the submit button correctly
    btn.onclick = () => {
        alert('You clicked me!');
    };
});