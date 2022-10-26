<template>
    <div class="root">

        <div class="accordion" id="accordionExample">
            <div class="accordion-item" v-for="section in filteredTitles" :key="section">
                <h2 class="accordion-header" v-bind:id="section.Title.split(' ').join('').replace(/\'|\//g,'').toLowerCase()">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse' + section.Title.split(' ').join('').replace(/\'|\//g,'').toLowerCase()" aria-expanded="false" v-bind:aria-controls="'collapse' + section.Title.split(' ').join('').replace(/\'|\//g,'').toLowerCase()">
                    {{ section.Title }}
                </button>
                </h2>
                <div v-bind:id="'collapse' + section.Title.split(' ').join('').replace(/\'|\//g,'').toLowerCase()" class="accordion-collapse collapse" v-bind:aria-labelledby="section.Title.split(' ').join('').replace(/\'|\//g,'').toLowerCase()" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div v-for="content in section.content" :key="content">
                            <p v-html="content.content"></p>
                        </div>
                        <div class="accordion" id="accordionExample2">
                            <div class="accordion-item" v-for="subsection in section.Subsection" :key="subsection">
                                <h2 class="accordion-header" v-bind:id="subsection.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()">
                                    <button 
                                        class="accordion-button collapsed"
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        v-bind:data-bs-target="'#collapse' + subsection.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" aria-expanded="false" 
                                        v-bind:aria-controls="'collapse' + subsection.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()">
                                        {{  subsection.Title}}
                                    </button>
                                </h2>
                                <div 
                                    v-bind:id="'collapse' + subsection.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" class="accordion-collapse collapse" 
                                    v-bind:aria-labelledby="subsection.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" data-bs-parent="#accordionExample2">
                                    <div class="accordion-body">
                                        <p v-html="subsection.content"></p>
                                        <ul>
                                            <li v-for="sub in subsection.Subsection" :key="sub">
                                                {{ sub.Title }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion" id="accordionExample3">
                            <div class="accordion-item" v-for="article in section.Article" :key="article">
                                
                                <h2 class="accordion-header" v-bind:id="article.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse' + article.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" aria-expanded="false" v-bind:aria-controls="'collapse' + article.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()">
                                        {{ article.Title }}
                                    </button>
                                </h2>

                                <div v-bind:id="'collapse' + article.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" class="accordion-collapse collapse" v-bind:aria-labelledby="article.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" data-bs-parent="#accordionExample3">

                                    <div class="accordion-body">
                                        <div v-for="content in article.content" :key="content">
                                            <p>{{ content.Title}}</p>
                                            <p v-html="content.content"></p>
                                        </div>

                                        <div class="accordion" id="accordionExample4">
                                            <div class="accordion-item" v-for="title in article.Subsection" :key="title">

                                                <h2 class="accordion-header" v-bind:id="title.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse' + title.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" aria-expanded="false" v-bind:aria-controls="'collapse' + title.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()">
                                                        {{ title.Title}}
                                                    </button>
                                                </h2>
                                                
                                                <div v-bind:id="'collapse' + title.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" class="accordion-collapse collapse" v-bind:aria-labelledby="title.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" data-bs-parent="#accordionExample4">

                                                    <div class="accordion-body">
                                                        <p v-html="title.content"></p>
                                                        <div class="accordion" id="accordionExample5">
                                                            <div class="accordion-item" v-for="subcontent in title.Subsection" :key="subcontent">
                                                                <h2 class="accordion-header" v-bind:id="subcontent.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()">
                                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse' + subcontent.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" aria-expanded="false" v-bind:aria-controls="'collapse' + subcontent.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()">
                                                                        {{ subcontent.Title }}
                                                                    </button>
                                                                </h2>

                                                                <div v-bind:id="'collapse' + subcontent.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" class="accordion-collapse collapse" v-bind:aria-labelledby="subcontent.Title.replace(/[ ,.'/()\-\&%]/g, '').toLowerCase()" data-bs-parent="#accordionExample5">

                                                                    <div class="accordion-body">
                                                                        <p v-html="subcontent.content"></p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import guides from '../post-data.json'
import { computed } from 'vue' 

export default {
    props: {
        searchQuery: String
    },
    setup (props) {

        const filteredTitles = computed(() => {
            return guides.Section.filter(
                section => 
                    section.Title.toLowerCase().includes(props.searchQuery.toLowerCase())
            )
        })

        return {
            filteredTitles,
            methods: {
                toggleActive(subsection) {
                    let item = this.items[subsection];

                    item.active = !item.active;

                    this.$set(this.items, subsection, item);
                }
            }
        }
    }
}
</script>