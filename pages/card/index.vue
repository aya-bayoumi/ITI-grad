<template>
    <div class=" relative bg-Colors-Main-body-bg overflow-hidden flex flex-col items-center gap-1  text-Colors-main-body-text font-['Montserrat'] p-5 justify-center mt-25">   
        <div>
            <h2 class="self-stretch text-center justify-center text-Colors-main-body-text text-5xl font-semibold font-['Playfair_Display']">Card Details</h2>
        </div>
        <div class="flex gap-30 mt-5 ">
            <!-- <div class="w-80 inline-flex flex-col justify-start items-start gap-2">
        <div class="self-stretch flex flex-col justify-start items-start gap-4">
            <div class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize">First Name*</div>
        </div>
        <div class="self-stretch h-10 px-4 py-2.5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5">
            <div class="text-center justify-center"></div>
        </div>
    </div> -->
    
        </div>
        <div>
            <label  class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">Enter Credit Card Number*</label>
            <br>
            <input class="self-stretch h-10 px-48 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
        </div>
        <div>
            <label  class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">Card Holder Name*</label>
            <br>
            <input class="self-stretch h-10 px-48 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
        </div>
        <div class="flex gap-32">

            <div>
                    <label class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">Expiry*</label>
                    <br>
                    <input class="self-stretch h-10 px-4 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
                </div>
                <div>
                    <label class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">CVV *</label>
                    <br>
                    <input class="self-stretch h-10 px-4 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
                </div>
        </div>
        <div class="self-stretch inline-flex gap-110 justify-center mb-2">
            <p class="justify-center text-black text-3xl font-normal font-['Montserrat']">Total</p>
            <p class=" justify-center text-black text-3xl font-normal font-['Montserrat']">$4.88</p>
        </div>
        <div  class="w-[400px] h-12 p-2.5 bg-[#4E3629] rounded-[40px] outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-center items-center gap-2.5">
            <button class="text-center justify-center text-[#FED8B1] text-xl font-semibold font-['Montserrat'] cursor-pointer">Confirm</button>
        </div>
        <div class="inline-flex justify-start items-center gap-4 cursor-pointer">
            <i class="fa-solid fa-arrow-left cursor-pointer "></i>
            <p class="text-center justify-center text-black text-2xl font-normal font-['Montserrat'] capitalize cursor-pointer">Back</p>
        </div>
    </div>
    </template>

    <script setup>
    definePageMeta({ layout: 'registered' })
    </script>