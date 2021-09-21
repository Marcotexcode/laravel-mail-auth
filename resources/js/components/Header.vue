


<template>

    <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <router-link :to="{name: 'home'}" class="nav-link">Boolpress</router-link>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            
                <span class="navbar-toggler-icon"></span>
            
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
            
                <ul class="navbar-nav">

                     <li class="nav-item active" v-for="(link, index) in menuBoolpress" :key="index">
                        
                        <router-link :to="{name: link.routeName}" class="nav-link">{{link.label}}</router-link>

                    </li>
            
                </ul>
            
            </div>
        
        </nav>

    </div>

</template>

<script>

    export default {

        name: 'Header',

        data() {

            return {

                menuBoolpress: [

                    {
                        label: 'Home',
                        routeName: 'home'
                    },
                    {
                        label: 'Chi-siamo',
                        routeName: 'about'
                    },
                    {
                        label: 'I miei post',
                        routeName: 'post'
                    },
                    {
                        label: 'Contatti',
                        routeName: 'contact'
                    }

                ]

            }

        }

    }

</script>

<style lang="scss" scoped>

</style>