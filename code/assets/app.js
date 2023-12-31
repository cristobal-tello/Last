/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css'
import alienGreeting from './lib/alien-greeting.js'
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()
jsConfetti.addConfetti()

alienGreeting('Give us a candy', false);

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉')
