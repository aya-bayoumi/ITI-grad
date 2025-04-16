<template>
    <div class="container w-full">
        <nav class="flex justify-between items-center py-4">
            <div>
                <a href="/" class="logo text-2xl font-bold">Qera'a</a>
            </div>
            <div class="links flex items-center">
                <NuxtLink href="/" class="px-6 py-2" active-class="active">Home</NuxtLink>
                <NuxtLink href="/books" class="px-6 py-2" active-class="active">Books</NuxtLink>
                <NuxtLink href="/contact" class="px-6 py-2" active-class="active">Contact Us</NuxtLink>
            </div>
            <div class="auth flex items-center">
                <a href="/signUp" class="sign px-4 py-2">Sign Up</a>
                <a href="/login" class="login px-4 py-2">Login</a>
            </div>
        </nav>
    </div>
</template>


<style>
.container {
    background-color: #4E3629;
    /* width: 100vw; */
    position: sticky;
    top: 0;
    z-index: 999;
}

nav{
    width: 90%;
    height: 70px;
    margin: auto;

}

.logo{
    font-family: logo;
    font-size: 40px;
    font-weight: lighter;
    color: #FED8B1;
}

.links {
    color: #FFEAD6;
    font-family: links;
}
.active {
  color: #FED8B1;
  font-weight: bold;
}

.auth{
    font-family: links;
    font-weight:bold;
}
.auth .sign{
    color: #FED8B1;
    border-radius: 40px;
    width: 120px;
    text-align: center;
}

.sign:hover{
background-color:#FAD4A2 ;
color: #4E3629;
}
.auth .login{
    color: #4E3629;
    background-color: #FAD4A2;
    border-radius: 40px;
    width: 120px;
    text-align: center;
    margin-left: 5px;
}
.login:hover{
    background-color: #4E3629;
    color: #FAD4A2;
}
</style>