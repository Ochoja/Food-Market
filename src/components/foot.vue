<template>
    <div class="footer"> 
        <div>

        </div>
        <div class="newsletter">
            <p><strong>NEW TO FOOD MARKET?</strong></p>
            <p>Subscribe to out newsletter to get updates on our latest offers!</p>
            <form>
                <input type="email" size = "25" placeholder="Enter your email">
                <button>SUBSCRIBE</button>
            </form>
        </div>

        <div class="useful_links">
            <div class="links">
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>

            <div class="support">
                <h3>SUPPORT</h3>
                <ul>
                    <li><a href=""> <fa icon = "phone-alt" class="solid_icon"/>Customer Care</a></li>
                    <li><a href=""><fa icon = "envelope" class="solid_icon"/>E-mail</a></li>
                </ul>
            </div>

            <div class = "social">
                <h3>JOIN US ON</h3>
                <ul class="social_icons">
                    <li><a href=""><fa :icon = "['fab', 'facebook']" class="icon"/></a></li>
                    <li><a href=""><fa :icon = "['fab', 'twitter']" class="icon"/></a></li>
                    <li><a href=""><fa :icon = "['fab', 'instagram']" class="icon"/></a></li>
                </ul>
            </div>
        </div>

        <div class="copyright">
            &copy; Copyright 2021
        </div>

    </div>
</template>

<script>
</script>

<style scoped>
    .footer{
        width: 100%;
        color: white;
        background: black;
        font-size: 0.8em;
    }

    .newsletter{
        text-align: center;
        padding: 20px 0px 50px 0px;
    }

    input{
        font-family: sans-serif;
        font-size: 1.1em;
        padding: 12px 10px;
        margin-top: 10px;
    }

    button{
        font-family: sans-serif;
        color: white;
        font-size: 1.2em;
        margin-left: 20px;
        padding: 13px;
        border-radius: 5px;
        background: rgb(49, 148, 49);
        border: none;
    }

    button:hover{
        background: rgb(36, 119, 36);
    }

    ul{
        list-style-type: none;
    }

    li{
        font-size: 0.9em;
        padding-top: 5px;
    }

    a{
        color: white;
        text-decoration: none;
    }

    a:hover{
        color: rgb(36, 119, 36);
    }

    .solid_icon{
        padding-right: 3px;
        font-size: 1.3em;
    }
    .icon{
        font-size: 2em;
    }

    .useful_links{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 750px) {
        .useful_links{
            flex-direction: column;
        }

        .useful_links > div{
            margin-bottom: 40px ;
        }
    }

    .links, .social, .support{
        text-align: center;
    }

    .social_icons{
        display: flex;
        justify-content: center;
    }

    .social_icons > li{
        padding: 10px;
    }

    .copyright{
        margin-top: 10px;
        border-top: 1px solid white;
        text-align: center;
        padding: 10px 0 20px 0;
    }

    
</style>