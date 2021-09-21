

<template>
  
    <div class="container mt-5">
        
        <div class="card">
       
            <div class="card-header">
       
                <h5 class="card-title">{{post.title}}</h5>

                <div class="card-body">
       
                    <h5 class="card-title" v-if="post.category">{{post.category.name}}</h5>
        
                    <p class="card-text">{{post.content}}</p>

                    <div v-if="post.tags">
                        
                        <span class="badge badge-success m-1" v-for="tag in post.tags" :key="tag.id"> {{tag.name}} </span>

                    </div>

                    <router-link  :to="{name: 'post', params: {slug: post.slug }}" class="btn btn-primary mt-5">Ritorna</router-link>

                </div>
       
            </div>
       
        </div>

    </div>

</template>


<script>

    export default {

        name: 'SinglePost',

        data() {

            return {

                post: []

            }

        },

        mounted() {

            axios.get('/api/posts/' + this.$route.params.slug)
                
                .then( response => {

                    this.post = response.data.result;

                    console.log( this.post);

                })
                .catch();
            
        }

    } 

</script>


<style lang="scss ">

</style>