<template>

  <!--
    This example requires Tailwind CSS v2.0+

    This example requires some changes to your config:

    ```
    // tailwind.config.js
    const colors = require('tailwindcss/colors')

    module.exports = {
      // ...
      theme: {
        extend: {
          colors: {
            green: colors.green,
            cyan: colors.cyan,
          },
        },
      },
      plugins: [
        // ...
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
      ],
    }
    ```
  -->
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <header class="relative">
        <div class="bg-gray-900 p-4">
          <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-1 sm:px-2" aria-label="Global">
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img class="h-6 w-auto sm:h-10"
                       src="/Logo/logo1.svg" alt="">
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <button type="button"
                          class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                          aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: outline/menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="hidden space-x-8 md:flex md:ml-10">
                <a href="#anchor1" class="text-base font-medium text-white hover:text-gray-300">Идея</a>
                <a href="#anchor2" class="text-center font-medium text-white hover:text-gray-300">Решение</a>
<!--                <a href="#anchor3" class="text-base font-medium text-white hover:text-gray-300">Примеры</a>-->
<!--                <a href="#" class="text-base font-medium text-white hover:text-gray-300">Материалы</a>-->
                <a href="#anchor3" class="text-base font-medium text-white hover:text-gray-300">Клиенты</a>
                <a href="#anchor4" class="text-base font-medium text-white hover:text-gray-300">Замер</a>
                <a href="#anchor5" class="text-base font-medium text-white hover:text-gray-300">Галерея</a>
                <a href="#anchor6" class="text-base font-medium text-white hover:text-gray-300">Контакты</a>
              </div>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-6">

              <p class="text-xl font-medium text-white hover:text-gray-300">
                +7 (831) 423-23-89
              </p>
              <!--          <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">-->
              <!--            Start free trial-->
              <!--          </a>-->
            </div>
          </nav>
        </div>

        <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
          <div class="rounded-lg shadow-md  ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-green-500-cyan-600.svg"
                     alt="">
              </div>
              <div class="-mr-2">
                <button type="button"
                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="pt-5 pb-6">
              <div class="px-2 space-y-1">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Product</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Marketplace</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Company</a>
              </div>
              <div class="mt-6 px-5">
                <a href="#"
                   class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700">Start
                  free trial</a>
              </div>
              <div class="mt-6 px-5">
                <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>


        <div class="relative bg-gray-900 overflow-hidden ">
          <div class="max-w-screen-xl mx-auto">
            <div class="relative z-10 pb-2 bg-gray-900 sm:pb-10 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-5 xl:pb-5">
              <svg
                class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100"/>
              </svg>

              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div class="lg:py-24">
                  <a href="#anchor6"
                     class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span
                      class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-green-500 to-cyan-600 rounded-full">Мы работаем</span>
                    <span class="ml-4 text-sm">Посетите наш офис</span>
                    <!-- Heroicon name: solid/chevron-right -->
                    <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"/>
                    </svg>
                  </a>
                  <h1
                    class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">Ремонт квартир</span>
                    <span
                      class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-cyan-400 sm:pb-5">любой сложности</span>
                  </h1>
                  <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                    Дарим каждому клиенту дизайн проект!
                  </p>
                  <div class="mt-10 sm:mt-12">
                    <form @submit.prevent="sendPhone" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div class="sm:flex">
                        <div class="min-w-0 flex-1">
                          <label for="phone" class="sr-only">Phone</label>
                          <input
                            :value="rulePhone.phone"
                            @input="updatePhone"
                            id="phone" type="tel" placeholder="Запишите ваш телефон"
                            class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                          <button type="submit"
                                  class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                            Отправить
                          </button>
                        </div>
                      </div>
                      <p class="mt-3 text-sm text-gray-300 sm:mt-4">В течении дня с вами свяжется специалист и даст подробную консультацию.
                        <br>Услуга бесплатная.</p>
                    </form>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                 src="https://thumb.tildacdn.com/tild3931-6462-4836-b435-353636303532/-/format/webp/udobno-hvoya_image_s.jpg" alt="">
<!--                 src="https://noginsk-remont.ru/wp-content/uploads/2020/09/kosmetika.jpg" alt="">-->
<!--                 src="https://stroy-okey.ru/wp-content/uploads/2020/10/2020-10-21_14-50-01.png" alt="">-->
            <!--             src="https://remont-kvartir-v-msk.ru/uploads/posts/2016-04/1459917460_istock_000016196507large_shironosov.jpg" alt="">-->
          </div>
        </div>


        <!--    <div class="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">-->
        <!--      <div class="mx-auto max-w-7xl lg:px-8">-->
        <!--        <div class="lg:grid lg:grid-cols-2 lg:gap-8">-->
        <!--          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">-->
        <!--            <div class="lg:py-24">-->
        <!--              <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">-->
        <!--                <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-green-500 to-cyan-600 rounded-full">We're hiring</span>-->
        <!--                <span class="ml-4 text-sm">Visit our careers page</span>-->
        <!--                &lt;!&ndash; Heroicon name: solid/chevron-right &ndash;&gt;-->
        <!--                <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
        <!--                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />-->
        <!--                </svg>-->
        <!--              </a>-->
        <!--              <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">-->
        <!--                <span class="block">Ремонт помещений</span>-->
        <!--                <span class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-cyan-400 sm:pb-5">любой сложности</span>-->
        <!--              </h1>-->
        <!--              <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">-->
        <!--                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.-->
        <!--              </p>-->
        <!--              <div class="mt-10 sm:mt-12">-->
        <!--                <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">-->
        <!--                  <div class="sm:flex">-->
        <!--                    <div class="min-w-0 flex-1">-->
        <!--                      <label for="email" class="sr-only">Email address</label>-->
        <!--                      <input id="email" type="email" placeholder="Enter your email" class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">-->
        <!--                    </div>-->
        <!--                    <div class="mt-3 sm:mt-0 sm:ml-3">-->
        <!--                      <button type="submit" class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">Start free trial</button>-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--                  <p class="mt-3 text-sm text-gray-300 sm:mt-4">Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="#" class="font-medium text-white">terms of service</a>.</p>-->
        <!--                </form>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">-->
        <!--            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">-->
        <!--              &lt;!&ndash; Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ &ndash;&gt;-->
        <!--              <img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://remont-kvartir-v-msk.ru/uploads/posts/2016-04/1459917460_istock_000016196507large_shironosov.jpg" alt="">-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--    </div>-->

        <!-- Feature section with screenshot -->
        <div class="bg-gray-50 pt-12 sm:pt-16 lg:pt-24" id="anchor1">
          <div class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl ">
            <div>
              <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Идея</h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Решили сделать ремонт?
              </p>
              <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Это интересный и творческий процесс, который разнообразит вашу жизнь и превнесёт множество красок в прямом и переносном смысле. Но не всегда &#129299;
              </p>
            </div>
            <div class="mt-12 ">
              <img class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 mx-auto"
                   src="https://media.mycredit.ua/assets/images/blog/2019/july/Remont_v_spalne.png" alt="">
            </div>
          </div>
        </div>

        <!-- Feature section with grid -->
        <div class="relative bg-white py-16 sm:py-16 lg:py-24" id="anchor2">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Решение</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Порой лучше довериться профессионалам
            </p>
            <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Мы предлагаем свои услуги тем кто дорожит своим временем и нервами. Наши специалисты с большим опытом и разнообразным инструментом решат ваши вопросы в оговоренные сроки и с наилучшим качеством работ
            </p>
            <div class="mt-12">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/cloud-upload -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                        </svg>
                      </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Рассчёт</h3>
                      <p class="mt-5 text-base text-gray-500">
                        Подробный расчёт всех работ и материалов в день замера и обсуждение иных деталей
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/lock-closed -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                      </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Гарантии</h3>
                      <p class="mt-5 text-base text-gray-500">
                        100% соблюдение сроков ремонта по договору или заплатим % за каждый день просрочки
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/refresh -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                      </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Проект</h3>
                      <p class="mt-5 text-base text-gray-500">
                        Дизайн-проект для каждого клиента вне зависимости какой ремонт вы будете делать
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/shield-check -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                      </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Выгода</h3>
                      <p class="mt-5 text-base text-gray-500">
                        До 30% гарантированной скидки на все материалы плюс дополнительные акции на наши услуги
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/cog -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Опыт</h3>
                      <p class="mt-5 text-base text-gray-500">
                        Более 1000 квартир в разных регионах отремонтировано "под ключ"нашими стараниями!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-md shadow-lg">
                        <!-- Heroicon name: outline/server -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                        </svg>
                      </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Экскурсия</h3>
                      <p class="mt-5 text-base text-gray-500">
                        Вы можете заказать экскурсию на текущий объект чтобы убедиться в нашем профессионализме
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonial section -->
        <div class="pb-16 bg-gradient-to-r from-green-400 via-green-600 to-green-500 lg:pb-0 lg:z-10 lg:relative">
          <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="relative lg:-my-8">
              <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
              <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div
                  class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img class="object-cover lg:h-full lg:w-full"
                       src="https://static.tildacdn.com/tild3165-3232-4034-b461-343834396163/2_1.jpg"
                       alt="">
                </div>
              </div>
            </div>
            <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <svg class="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32"
                         aria-hidden="true">
                      <path
                        d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                    </svg>
                    <p class="mt-6 text-xl font-medium text-white">
                      Мы стараемся делать наши услуги максимально выгодными для наших заказчиков, и теперь мы рады сообщить вам, что дизайн интерьера стал доступнее! Компания "ГостРемонт" предлагает уникальную возможность получить дизайн-проект бесплатно при заказе ремонта. Ремонт, проведенный в соответствии с дизайн-проектом, имеет массу преимуществ, ведь в нем продумана каждая деталь. Ждём вас.
                    </p>
                  </div>
                  <footer class="mt-6">
                    <p class="text-base font-medium text-white">Сергей Фёдорович</p>
                    <p class="text-base font-medium text-cyan-100">Ведущий специалист</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <!-- Blog section -->
        <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32" id="anchor3">
          <div class="relative">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Клиенты</h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Выбирайте ваш стиль
              </p>
              <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                Более 1000 квартир отремонтировано "под ключ"нашими стараниями!
              </p>
            </div>
            <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover transition delay-150 duration-300 ease-in-out"
                       src="https://thumb.tildacdn.com/tild3964-3864-4430-a562-393931336363/-/resize/600x/-/format/webp/17.jpg"
                       alt="">
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="mb-1 text-sm font-medium text-cyan-600">
                      Стиль Лофт
                    </p>
                    <p class="text-xl font-semibold text-gray-900 flex space-x-1">
                      <span>
                        ул. Украинская
                      </span>
                      <span aria-hidden="true">
                          &middot;
                      </span>
                      <span>
                          48 м/кв
                      </span>
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Однокомнатную квартиру застройщик сдал без какой-либо отделки.
                      Компания "Гостремонт" разработала и согласовала дизайн-проект будущей квартиры с планировавочным
                      решением и функциональным дизайном в стиле LOFT.
                      Сохранив обособленным спальное место, нам удалось расширить жизненное пространство для молодой
                      семьи.
                    </p>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <img class="h-12 w-12 rounded-full"
                             src="https://thumb.tildacdn.com/tild3164-3233-4135-b530-633436376535/-/resize/600x/-/format/webp/12.jpg"
                             alt="Roel Aufderehar">
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Людмила
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <p>
                          "Мы с мужем даже не ожидали, что получится так красиво и стильно."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover"
                       src="https://thumb.tildacdn.com/tild3164-3233-4135-b530-633436376535/-/resize/600x/-/format/webp/12.jpg"
                       alt="">
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="mb-1 text-sm font-medium text-cyan-600">
                      Современный стиль
                    </p>
                    <p class="text-xl font-semibold text-gray-900 flex space-x-1">
                      <span>
                        ул. Космонавта Комарова
                      </span>
                      <span aria-hidden="true">
                          &middot;
                      </span>
                      <span>
                          42 м/кв
                      </span>
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Проект обновления квартиры в кирпичной пятиэтажки застройки конца 70-х годов. Материалы подобранные к проекту создали лёгкое и светлое настроение от пребывания в этой квартире. Все пожелания заказчика были учтены и реализованы в полной мере, есть даже рабочая зона.
                    </p>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <img class="h-12 w-12 rounded-full"
                             src="https://thumb.tildacdn.com/tild3164-3233-4135-b530-633436376535/-/resize/600x/-/format/webp/12.jpg"
                             alt="Roel Aufderehar">
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Пётр Иванович
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <p>
                          "Всё устроило более чем. По срокам всё соблюдено на отлично!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                  <img class="h-48 w-full object-cover"
                       src="https://thumb.tildacdn.com/tild6339-3666-4137-b261-343637343764/-/resize/600x/-/format/webp/cover.jpg"
                       alt="">
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="mb-1 text-sm font-medium text-cyan-600">
                      Классический стиль
                    </p>
                    <p class="text-xl font-semibold text-gray-900 flex space-x-1">
                      <span>
                        ул. Республиканская
                      </span>
                      <span aria-hidden="true">
                          &middot;
                      </span>
                      <span>
                          102 м/кв
                      </span>
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                      Ремонт новой трёхкомнатной квартиры в новом жилом комплексе был начат сразу после сдачи застройщиком дома в эксплуатацию. Дизайнер нашёл оптимальное решение в классических спокойных и светлых тонах. Прекрасным решением было поставить двери типа "купэ" чтобы разграничить кухню с большой гостиной комнатой.
                    </p>
                  </div>
                  <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <img class="h-12 w-12 rounded-full"
                             src="https://thumb.tildacdn.com/tild3164-3233-4135-b530-633436376535/-/resize/600x/-/format/webp/12.jpg"
                             alt="Roel Aufderehar">
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">
                          Герман Викторович
                        </a>
                      </p>
                      <div class="flex space-x-1 text-sm text-gray-500">
                        <p>
                          "Получилось чисто, как я хотел, спасибо "Гостремонт", что всё учли."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="relative bg-gray-900" id="anchor4">
          <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img class="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                 alt="">
            <div aria-hidden="true"
                 class="absolute inset-0 bg-gradient-to-r from-cyan-200 to-cyan-400 mix-blend-multiply"></div>
          </div>
          <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div class="md:ml-auto md:w-1/2 md:pl-10">
              <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                Бесплатный замер
              </h2>
              <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                Мы готовы помочь вам
              </p>
              <p class="mt-3 text-lg text-gray-300">
                Сотрудники нашей компании постараются грамотно подсказать какие варианты наиболее приемлемы в вашей ситуации. Оптимальный баланс цены и качества это цель, которая устроит и нас и вас на каждом этапе сотрудничества.
              </p>
              <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                  <a href="#"
                     class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Записаться на замер
                    <!-- Heroicon name: solid/external-link -->
                    <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                      <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  methods: {
    ...mapActions({
      'updatePhone':'leads/phone/updatePhone',
      'sendPhone': 'leads/phone/sendPhone',
    })
  },
  computed: {
    ...mapGetters({
      'rulePhone': 'leads/phone/rulePhone',
      'ruleEmail': 'leads/email/ruleEmail'
    }),
  },
}
</script>

