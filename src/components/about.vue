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
            <div class="photo-container">
          <img src="img/anthonyfarah.jpg" alt="" />
        </div>
         <h3 class="name-title">Anthony Maurice Farah</h3>
        </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
            <h2 class="title">About Me</h2>
            <h3 class="description">
              I was born in Garden City, Michigan but grew up 20 minutes away in Canton. Later went on to move to Charleston, South Carolina where I attended the College of Charleston. I've traveled a good bit outside the country to places such as Spain, France, Estonia, Sweeden and Iceland and hope to travel more in the future. My ethnicity is Middle Eastern with my Mom being born in Syria and Dad being born in Jordan.
            </h3>
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
  min-height: 600px;
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
        background-image: url('img/charleston.jpeg');
        background-size: cover;
        position: absolute;
        background-position: center center;
        width: 100%;
        height: 100%;
        z-index: -1;

    }

    .profile-container{
        color: #FFFFFF;
    }
    .photo-container{
        width: 123px;
        height: 123px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
        box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.3);
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
        background: linear-gradient(rgba(black,.20), rgba(177, 17, 2, 0.6));
    }
}
.name-title {
    text-align: center;
    font-size: 40px;
    font-family: Lato, sans-serif;
    font-weight: bold;
    color: white;

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