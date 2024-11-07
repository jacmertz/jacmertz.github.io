<script>
import '../assets/fancy.css';
import initTicTacToe from '../assets/script.js';
import { onMounted } from 'vue';

export default {
  name: 'HomePage',
  setup() {
    onMounted(() => {
      initTicTacToe();
    });
  }
};
</script>

<template>
    <head>
        <title>Home</title>
        <link rel="stylesheet" type="text/css" href="../assets/fancy.css">
    </head>
    <body>
        <PrimePanel header="Home" class="my-6">
            <p>
                <b>Lorem ipsum odor amet</b>, <i>consectetuer adipiscing elit.</i> Accumsan gravida mollis fringilla nascetur quam. Tempor semper risus sagittis maximus libero. Ullamcorper odio pulvinar finibus mus nam in convallis nisl. Ligula sit varius elit eros cursus vulputate. Praesent vulputate massa orci ad, fermentum habitant habitasse. Lacus dictum fermentum penatibus; aenean facilisi torquent. Tellus turpis amet euismod tortor augue lacus. Dignissim malesuada rutrum vel sed montes senectus.
            </p>
            <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan gravida mollis fringilla nascetur quam. <b>Tempor semper risus sagittis maximus libero</b>. <i>Ullamcorper odio pulvinar finibus mus nam in convallis nisl.</i> Ligula sit varius elit eros cursus vulputate. Praesent vulputate massa orci ad, fermentum habitant habitasse. Lacus dictum fermentum penatibus; aenean facilisi torquent. Tellus turpis amet euismod tortor augue lacus. Dignissim malesuada rutrum vel sed montes senectus.
            </p>
            <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan gravida mollis fringilla nascetur quam. Tempor semper risus sagittis maximus libero. Ullamcorper odio pulvinar finibus mus nam in convallis nisl. <b>Ligula sit varius elit eros cursus vulputate.</b> <i>Praesent vulputate massa orci ad,</i> fermentum habitant habitasse. Lacus dictum fermentum penatibus; aenean facilisi torquent. Tellus turpis amet euismod tortor augue lacus. Dignissim malesuada rutrum vel sed montes senectus.
            </p>
            <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan gravida mollis fringilla nascetur quam. Tempor semper risus sagittis maximus libero. Ullamcorper odio pulvinar finibus mus nam in convallis nisl. Ligula sit varius elit eros cursus vulputate. Praesent vulputate massa orci ad, <b>fermentum habitant habitasse.</b> <i>Lacus dictum fermentum penatibus;</i> aenean facilisi torquent. Tellus turpis amet euismod tortor augue lacus. Dignissim malesuada rutrum vel sed montes senectus.
            </p>
            <a href="/about">About Me</a> | <a href="/resume">Resume</a>
        <br/>
        </PrimePanel>
        <h1>Play TicTacToe</h1>
        <div id="turn">x's Turn</div>
    </body>
    <body>
        <table>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </body>
</template>