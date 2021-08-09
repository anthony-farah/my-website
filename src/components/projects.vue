<template>
    <div class="wrapper">
        <div class="page-header clear-filter" filter-color="orange">
            <parallax class="page-header-image"/>
            <div class="menu">
            <div class="menu-item menu-text">
                <router-link to="/Home">Home</router-link>
            </div>
            <div class="menu-item menu-text">
                <router-link to="/Resume">Resume</router-link>
            </div>
            <div class="menu-item menu-text">
                <router-link to="/Projects">Projects</router-link>
            </div>
            <div class="menu-item menu-text">
                <router-link to="/About">About</router-link>
            </div>
             <div class="social-github">
                <a href="https://github.com/anthony-farah" title="Github" alt="Github"><img src="img/github.png" /></a>
             </div>
             <div class="social-linkedin">
                <a href="https://www.linkedin.com/in/anthony-farah-973709181/" title="Linkedin" alt="Linkedin"><img src="img/linkedin.png" /></a>
            </div>
        </div>
        <router-view />
        <div class="container">
            <div class="content-center">
                <h1>Projects</h1>
            </div>
        </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
            <h2 class="title">AR Brawl</h2>
        <div class="body">
            <div class="grid-container">
  <div>
    <img class='grid-item grid-item-1' src='img/home.jpg' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-2' src='img/chooseteam.jpg' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-3' src='img/findfriends.jpg' alt=''>

  </div>
  <div>
    <img class='grid-item grid-item-4' src='img/createaccount.jpg' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-5' src='img/choosecharacter.jpg' alt=''>

  </div>
  <div>
    <img class='grid-item grid-item-6' src='img/chosencharacter.jpg' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-7' src='img/login.jpg' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-8' src='img/characterhome.jpg' alt=''>
  </div>
  <div>
    <img class='grid-item grid-item-9' src='img/shop.jpg' alt=''>
  </div>
</div>
        </div>
            
          </div>
        </div>
      </div>
      <div class="footer">
          <div class="footer-left">
            Designed and Coded by Anthony Maurice Farah
          </div>
          <div class="footer-github">
             <a href="https://github.com/anthony-farah" title="Github" alt="Github"><img src="img/github.png" /></a>
          </div>
                    <div class="footer-linkedin">
            <a href="https://www.linkedin.com/in/anthony-farah-973709181/" title="Linkedin" alt="Linkedin"><img src="img/linkedin.png" /></a>
          </div>
</div>
</div>



</template>

<script>
import Parallax from './parallax.vue'
export default {
  name: 'App',
  components: {
    Parallax,
  }
};

</script>


<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato:100);
.footer {
   position: absolute;
   left: 0;
   height: 70px;
   width: 100%;
   background-color: rgb(66, 66, 66);
}
.footer-left {
    text-align: right;
    color: white;
    margin-right: 250px;
    margin-top: 27px;
    font-family: Lato, sans-serif;
    font-size: 13px;
    
}
.footer-github {
    text-align: left;
    margin-left: 250px;
    margin-top: -20px;
}
.footer-linkedin {
    text-align: left;
    margin-left: 310px;
    margin-top: -29px;
}
.wrapper {
    margin: -8px;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
}
.grid-container {
  columns: 3 50px;
  column-gap: 5rem;
  width: 50%;
  margin: 0 auto;
  div {
    width: 150px;
    margin: 6rem 1.5rem 5.7rem 0;
    display: inline-block;
    width: 100%;
    box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
    border-radius: 5px;
    &:hover img {
      transform: scale(1.5);
    }
    &:hover {
      border-color: coral;
    }
    img {
      margin-bottom: -5px;
      width: 100%;
    transition: transform .5s;
      border-radius: 5px;
      transition: all .35s ease-in-out;
    }

  }
}


.section{
    padding: 70px 0;
    position: relative;
    background: white;
}

.menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.social-github {
    flex: .1;
    text-align: center;
}
.social-linkedin {
    flex: .8;
    text-align: center;
}
.menu-item {
    flex: 1;
    text-align: center;
}
.menu-text {
    font-size: 18px;
    font-family: Lato, sans-serif;
    color: white;
    padding: 15px 10px; 
    transition: transform .5s;
}
.menu-text:hover {
    color: white;
    cursor: pointer;
    transform: scale(1.5);
}


.page-header{
  min-height: 650px;
  padding: 0;
  position: relative;
  overflow: hidden;

  & > .content{
    margin-top: 12%;
    text-align: center;
    margin-bottom: 50px;
  }

  &:before{
      background-color: rgba(0,0,0,.3);
  }

  > .container{
    z-index: 2;
    padding-top: 12vh;
    padding-bottom: 40px;
  }

    .page-header-image{
        background-image: url('https://wallpaperaccess.com/full/1134006.jpg');
        background-size: cover;
        position: absolute;
        background-position: center center;
        width: 100%;
        height: 100%;
        z-index: -1;

    }

    .content-center{
      position: absolute;
      top: 210%;
      left: 50%;
      z-index: 2;
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      padding: 0 15px;
      width: 100%;
      max-width: 880px;
      font-size: 25px;
      font-family:Lato, sans-serif;

    }


    .container{
        height: 100%;
        z-index: 1;
        text-align: center;
        position: relative;
    }

    &:after,
    &:before{
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        display: block;
        left: 0;
        top: 0;
        content: "";
    }
}

.clear-filter{
    &:after,
    &:before{
        display: none;
    }

    &[filter-color="orange"]{
        background: linear-gradient(rgba(black,.20), rgba(224, 23, 3, 0.6));
    }
}
.title {
    text-align: center;
    font-size: 40px;
    font-family: Lato, sans-serif;
    font-weight: bold;

}
.description {
    text-align: center;
    max-width: 700px;
    margin: 20px auto 75px;
    font-size: 20px;
    font-family: Lato, sans-serif;
    color: grey;
}
</style>