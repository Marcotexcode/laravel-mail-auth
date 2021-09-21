

<template>
  
    <div class="container mt-5">

        <div class="row">
       
            <div class="col-sm-6" v-for="post in posts" :key="post.id">
       
                <div class="card m-3">
       
                    <div class="card-body">
        
                        <h5 class="card-title">{{post.title}}</h5>
        
                        <p class="card-text">{{post.content}}</p>

                        <router-link  :to="{name: 'post-detail', params: {slug: post.slug }}" class="btn btn-primary">Dettagli</router-link>

        
                    </div>
       
                </div>
       
            </div>
            
            <nav aria-label="Page navigation example" class="mx-auto mt-5">
            
                <ul class="pagination ">
            
                    <li class="page-item" :class=" {'disabled' : currentPage == 1 } ">
                       
                        <button class="page-link" href="#" @click="getPosts(currentPage - 1)">Previous</button>

                    </li>
            
                    <li class="page-item" :class=" {'disabled' : currentPage == lastPage } ">
                        
                        <button class="page-link" href="#" @click="getPosts(currentPage + 1)">Next</button>

                    </li>
            
                </ul>
            
            </nav>
       
        </div>
         
    </div>

</template>


<script>

    export default {

        name: 'Post',

         data() {

            return {

                chiamataApi: 'http://localhost:8000/api/posts',

                posts: [],

                currentPage: 1,

                lastPage: null

            }

        },

        created() {

            this.getPosts();

        },

        methods: {

            getPosts(pagePost) {

                axios.get(this.chiamataApi, {

                    params: {

                        page: pagePost

                    }

                })

                .then(response => {
                    
                    this.posts = response.data.result.data;

                    this.currentPage = response.data.result.current_page;

                    this.lastPage = response.data.result.last_page;
                
                })

                .catch();

            }

        }


    }

</script>


<style  style="scss">

</style>