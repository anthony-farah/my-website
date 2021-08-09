<template>
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
</template>
<script>

</script>
<style scoped lang="scss">
.footer {
   position: absolute;
   left: 0;
   bottom: -850px;
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
</style>